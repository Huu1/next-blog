import React from "react";

export interface IArticleContent {
  content: string;
  id: string;
}
export interface IArticleUser {
  avatar: string;
  userId: string;
  username: string;
}

interface IATag {
  tagId: string;
  title: string;
}

export type Series ={
  tag_color?: string
  tag_content?: string
  tag_createTime?: number
  tag_status?:string
  id?: string
  tag_title?: string
  tag_background?: string
  count?:string
}

export interface IArticle {
  time:number;
  tag: IATag;
  user: IArticleUser;
  content: IArticleContent;
  articleId: string;
  background: string;
  brief: string;
  createTime: number;
  lastUpdateTime: number;
  publishTime: number;
  rejectInfo: string;
  status: number;
  tid: string;
  title: string;
  uid: string;
  viewNum: number;
  readTime: number;
  label: any[];
  next?: IArticle;
  previous?: IArticle;
}
