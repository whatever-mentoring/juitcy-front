export interface postType {
  postIdx?: number;
  category: string;
  scrapCount: number;
  commentCount: number;
  cardList: string[];
  juicyDateTime: string;
  commentList?: commentType[];
}

export interface commentType {
  commentIdx: number;
  writer: string;
  content: string;
  isWriter: boolean;
  commentDateTime: string;
}
