import { publicInstance } from '../config';
import closure from 'store/closure';

export const loginApi = async ({
  code,
  state,
}: {
  code: string;
  state: string;
}) => {
  try {
    const res = await publicInstance.get('/login/naver', {
      params: {
        code: code,
        state: state,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};
