import { loginApi } from 'network/apis/loginApi';
import { useEffect } from 'react';
import closure from 'store/closure';

const Oauth = () => {
  // 인가코드, state를 가져온다.
  const code: string | null = new URL(window.location.href).searchParams.get(
    'code',
  );
  const state: string | null = new URL(window.location.href).searchParams.get(
    'state',
  );

  //백엔드에게 인가코드를 전달하여 jwt 토큰값을 가져온다.
  useEffect(() => {
    if (code && state) {
      loginApi({ code, state }).then((res) => {
        //토큰 값을 localStorage에 저장
        window.localStorage.setItem(
          'access_token',
          res?.data.result.access_token,
        );
        window.localStorage.setItem(
          'refresh_token',
          res?.data.result.refresh_token,
        );
        //만료시간도 저장
        //userType 저장
        closure.setUserType(res?.data.result.role);

        //회원가입/로그인 구분
        if (res?.data.result.isNewUser) {
          window.location.href = '/signup/terms';
        }
        {
          window.location.href = '/';
        }
      });
    }
  }, []);

  return <></>;
};

export default Oauth;
