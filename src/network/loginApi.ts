import { publicInstance } from './config';

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
    window.localStorage.setItem(
      'access_token',
      res.data.result.jwt.access_token,
    );
    window.localStorage.setItem(
      'refresh_token',
      res.data.result.jwt.refresh_token,
    );
    //만료시간도 저장

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
