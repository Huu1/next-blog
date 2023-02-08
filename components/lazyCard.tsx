const Wrap = (props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { children, style, className } = props;
  return (
    <div
      style={{ maxWidth: 620, ...style }}
      className={` bg-light-card_bg dark:bg-dark-card_bg my-0 m-auto mb-5 shadow-lg  hover:shadow-xl transition-all cursor-pointer  rounded-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrap;
