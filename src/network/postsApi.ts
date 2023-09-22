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

// postsApi를 활용한 apis
export const postAllApi = async ({
  setPosts,
}: {
  setPosts: React.Dispatch<React.SetStateAction<postType[] | undefined>>;
}) => {
  try {
    const data = await postsApi({
      size: 10,
      page: 0,
      category: '',
      searchWord: '',
    });
    setPosts(data);
  } catch (error) {
    console.log(error);
  }
};
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
