export interface postType {
  postIdx?: number;
  category: string;
  scrapCount: number;
  commentCount: number;
  cardList: string[];
  juicyDateTime: string;
  commentList?: commentType[];
  isScrap?: boolean;
}

export interface commentType {
  commentIdx: number;
  writer: string;
  content: string;
  isWriter: boolean;
  commentDateTime: string;
}

export interface questionType {
  postIdx: number;
  category: string;
  title: string;
  content: string;
  dateTime: string;
}
