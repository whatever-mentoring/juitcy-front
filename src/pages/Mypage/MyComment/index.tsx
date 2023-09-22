import { EntireContainer, Row } from 'assets/common';
import CommentListBox from 'components/Mypage/CommentListBox';
import { Header } from 'components/common/Header';
import { publicInstance } from 'network/config';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface myCommentInterface {
  content: string;
  date: string;
  postIdx: number;
  postTitle: string;
}

export const MyComment = () => {
  const [myCommentData, setMyCommentData] = useState<myCommentInterface[]>();
  const [myCommentCount, setMyCommentCount] = useState<number>();
  const [page, setPage] = useState<number>(2);

  const { ref, inView } = useInView();

  useEffect(() => {
    publicInstance.get('/users/comments?requestPageNum=1').then((res) => {
      setMyCommentData(res?.data?.result?.content);
      setMyCommentCount(res?.data?.result?.totalElements);
    });
  }, []);

  const getNewPageData = () => {
    publicInstance.get(`/users/comments?requestPageNum=${page}`).then((res) => {
      const newData = res?.data?.result?.content || [];
      myCommentData !== undefined &&
        setMyCommentData([...myCommentData, ...newData]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    if (inView) getNewPageData();
  }, [inView]);

  return (
    <>
      <Header borderBottom={false} btn="back">
        내댓글
      </Header>
      <EntireContainer background={`${Palette.Gray05}`}>
        <Row>
          <Typo.b2 color={Palette.Main}>{myCommentCount}</Typo.b2>
          <Typo.b2> &nbsp; 개의 댓글</Typo.b2>
        </Row>
        <div className="mypage-list-container">
          {myCommentData !== undefined &&
            myCommentData?.map((data: myCommentInterface, index: number) => (
              <CommentListBox
                date={data.date}
                title={data.postTitle}
                key={index}
                ref={
                  index > 8 && index === myCommentData?.length - 1
                    ? ref
                    : undefined
                }
              >
                {data.content}
              </CommentListBox>
            ))}
        </div>
      </EntireContainer>
    </>
  );
};
