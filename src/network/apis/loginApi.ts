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
    let res = await publicInstance.get('/login/naver', {
      params: {
        code: code,
        state: state,
      },
    });

    //토큰 값을 localStorage에 저장
    window.localStorage.setItem('access_token', res.data.result.access_token);
    window.localStorage.setItem('refresh_token', res.data.result.refresh_token);
    //만료시간도 저장
    //userType 저장
    closure.setUserType(res.data.result.role);

    //회원가입/로그인 구분
    if (res.data.result.isNewUser) {
      window.location.href = '/signup/terms';
    }
    {
      window.location.href = '/';
    }
  } catch (err) {
    console.log(err);
  }
};
