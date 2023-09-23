import { publicInstance } from './config';

export const postAnswerApi = async ({
  postIdx,
  answer,
}: {
  postIdx: number;
  answer: string;
}) => {
  try {
    const body = {
      answer: answer,
      postIdx: postIdx,
    };
    let res = await publicInstance.post(`/answers`, body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
