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
