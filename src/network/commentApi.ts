import { publicInstance } from './config';

export const postCommentApi = async ({
  content,
  postIdx,
}: {
  content: string;
  postIdx: number;
}) => {
  try {
    const body = {
      content: content,
      postIdx: postIdx,
    };
    let res = await publicInstance.post('/comments', body);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const editCommentApi = async ({
  content,
  commentIdx,
}: {
  content: string;
  commentIdx: number;
}) => {
  try {
    const body = {
      content: content,
    };
    let res = await publicInstance.patch(`/comments/${commentIdx}`, body);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCommentApi = async ({
  commentIdx,
}: {
  commentIdx: number;
}) => {
  try {
    let res = await publicInstance.delete(`/comments/${commentIdx}`);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
