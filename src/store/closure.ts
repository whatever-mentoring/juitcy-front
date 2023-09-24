import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentUser } from './recoil/atom';

const CreateUserModule = () => {
  const userType = useRecoilValue(currentUser);
  const setUserType = useSetRecoilState(currentUser);

  // userType을 가져오는 함수
  const getUserType = () => {
    return userType;
  };

  // userType을 설정하는 함수
  const updateUserType = (newType: string) => {
    setUserType(newType);
  };

  return { getUserType, updateUserType };
};

export default CreateUserModule();
