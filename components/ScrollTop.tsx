import React, { Component, useEffect, useState } from "react";

interface IScrollTop {
  className?: string;
  style?: any;
  // 滚动此距离时，显示组件
  distance?: number;

  // 滚回到顶部的动画时间
  speed: number;

  // 自定义滚动到页面顶部的距离 默认为0
  target: number;
}

export default function ScrollTop(
  {
    distance= 50,
    speed=100,
    target=0,
    style,
    className
  }:IScrollTop
) {
  const [visible, setVisible] = useState(true);

  /**
   * 监听滚动事件 判断是否显示组件按钮
   */
  useEffect(() => {
    const checkForScrollToTop = () => {
      if (
        document.body.scrollTop > distance ||
        document.documentElement.scrollTop > distance
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    checkForScrollToTop();

    window.addEventListener("scroll", checkForScrollToTop);
    return () => {
      window.removeEventListener("scroll", checkForScrollToTop);
    };
  }, [distance]);

  const getScrollTop = () => {
    return (
      document.body.scrollTop ||
      (document.documentElement && document.documentElement.scrollTop) ||
      0
    );
  };

  const onClickScrolltopHandle = () => {
    if (typeof window !== "undefined") {
      const { performance, requestAnimationFrame } = window;

      // 无动画直接返回顶部
      if (
        speed <= 0 ||
        typeof performance === "undefined" ||
        typeof requestAnimationFrame === "undefined"
      ) {
        return setScrollTop(target);
      }

      // 当前页面滚动的距离
      const initScrollTop = getScrollTop();
      // 返回页面顶部(或者自定义的target)需要滚动多少距离
      const pxsToScrollBy = initScrollTop - target;

      let start: number | undefined;

      const step = (timestamp: number) => {

        if (start === undefined) start = timestamp;
        const delta = timestamp - start;

        // 当前滚动进度
        const progress = Math.min(delta / speed, 1);

        // 每次要滚动的距离
        setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));

        // console.log(
        //   "timestamp",
        //   timestamp,
        //   "progress",
        //   progress,
        //   "delta",
        //   delta,
        //   "滚动距离",
        //   Math.round(progress * pxsToScrollBy),
        //   "总共滚动距离",
        //   pxsToScrollBy
        // );

        //  进度完成前一直调用
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  const setScrollTop = (value: number) => {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  };

  return (
    visible ? (
      <div
        style={style}
        className={`ScrollToTopButton dark:bg-gray-100 ${className}`}
        onClick={onClickScrolltopHandle}
      >
        🔝
      </div>
    ):<></>
  );
}
