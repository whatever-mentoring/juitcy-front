import { publicInstance } from './config';

export const postQuestionApi = async ({
  title,
  category,
  content,
}: {
  title: string;
  category: string;
  content: string;
}) => {
  try {
    const body = {
      title: title,
      category: category,
      content: content,
    };
    let res = await publicInstance.post('/questions', body);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
