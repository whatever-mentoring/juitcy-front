import { postType } from 'types';
import { publicInstance } from './config';

interface postsParams {
  size?: number;
  page?: number;
  category?: string;
  searchWord?: string;
}

//쥬시글 상세 조회
export const postsDetailApi = async (idx: number) => {
  try {
    let res = await publicInstance.get(`/posts/${idx}`);
    return res.data.result;
  } catch (err) {
    console.log(err);
  }
};
//쥬시글 목록 조회
export const postsApi = async ({
  size,
  page,
  category,
  searchWord,
}: postsParams) => {
  try {
    let res = await publicInstance.get('/posts', {
      params: {
        size: size,
        page: page,
        category: category,
        searchWord: searchWord,
      },
    });
    return res.data.result.content;
  } catch (err) {
    console.log(err);
  }
};

// 카테고리 필터링을 사용한 쥬시글 목록 조회
export const getPostsApi = async ({
  page,
  seletedCtg,
}: {
  page: number;
  seletedCtg: string;
}) => {
  try {
    const res = await postsApi({
      size: 10,
      page: page,
      category: seletedCtg,
      searchWord: '',
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//검색어를 사용한 쥬시글 목록 조회
export const searchApi = async ({
  text,
  setPosts,
}: {
  text: string;
  setPosts: React.Dispatch<React.SetStateAction<postType[] | null>>;
}) => {
  try {
    const res = await postsApi({
      size: 10,
      category: '',
      searchWord: text,
    });

    setPosts(res.result.content);
  } catch (error) {
    console.log(error);
  }
};

//스크랩
export const scrapApi = async ({ postIdx }: { postIdx: number }) => {
  try {
    let res = await publicInstance.post(`/posts/${postIdx}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
