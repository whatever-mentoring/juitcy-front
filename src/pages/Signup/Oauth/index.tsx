import { loginApi } from 'network/apis/loginApi';
import { useEffect } from 'react';

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
      loginApi({ code, state });
    }
  }, []);

  return <></>;
};

export default Oauth;
