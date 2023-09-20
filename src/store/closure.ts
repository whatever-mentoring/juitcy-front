// 클로저 함수를 사용하여 userType 설정
const createUserModule = () => {
  let userType = 'Juni';

  // userType을 가져오는 함수
  const getUserType = () => {
    return userType;
  };

  // userType을 설정하는 함수
  const setUserType = (newType: string) => {
    userType = newType;
  };

  return { getUserType, setUserType };
};

export default createUserModule();
