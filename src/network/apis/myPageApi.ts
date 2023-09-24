import { publicInstance } from 'network/config';

export const myPageApi = {
  GET_MYPAGE_DATA: async () => {
    const response = await publicInstance.get('/users');

    return response;
  },
  GET_MYPAGE_SCRAP: async (page: number) => {
    const response = publicInstance.get(`/users/scrap?requestPageNum=${page}`);
    return response;
  },
  GET_MYPAGE_COMMENT: async (page: number) => {
    const response = publicInstance.get(
      `/users/comments?requestPageNum=${page}`,
    );
    return response;
  },
  GET_MYPAGE_QNA: async (page: number, userType: any, nowTab: number) => {
    const response = publicInstance.get(
      `/users${userType === 'Juni' ? '/juny' : '/siny'}/${
        userType === 'Juni' ? 'questions' : 'answers'
      }?status=${
        nowTab === 0 ? 'completed' : 'waiting'
      }&requestPageNum=${page}`,
    );
    return response;
  },
};
