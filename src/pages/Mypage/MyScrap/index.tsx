import { EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import ScrapListBox from 'components/Mypage/ScrapListBox';
import { publicInstance } from 'network/config';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface myScrapData {
  postTitle: string;
  postIdx: number;
  category: string;
  content: string;
  commentCount: number;
  scrapCount: number;
  createdDate: string;
}

export const MyScrap = () => {
  const [myScrapData, setMyScrapData] = useState<myScrapData[]>();
  const [myScrapCount, setMyScrapCount] = useState<number>();
  const [page, setPage] = useState<number>(2);

  const { ref, inView } = useInView();

  useEffect(() => {
    publicInstance.get('/users/scrap?requestPageNum=1').then((res) => {
      setMyScrapData(res?.data?.result?.content);
      setMyScrapCount(res?.data?.result?.totalElements);
    });
  }, []);

  const getNewPageData = () => {
    publicInstance.get(`/users/comments?requestPageNum=${page}`).then((res) => {
      const newData = res?.data?.result?.content || [];
      myScrapData !== undefined && setMyScrapData([...myScrapData, ...newData]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    if (inView) getNewPageData();
  }, [inView]);

  return (
    <>
      <Header borderBottom={false} btn="back">
        스크랩
      </Header>
      <EntireContainer background={`${Palette.Gray05}`}>
        <Row>
          <Typo.b2 color={Palette.Main}>{myScrapCount}</Typo.b2>
          <Typo.b2> &nbsp; 개의 스크랩</Typo.b2>
        </Row>
        <div className="mypage-list-container">
          {myScrapData !== undefined &&
            myScrapData.map((data: myScrapData, index: number) => (
              <ScrapListBox
                date={data.createdDate}
                title={data.postTitle}
                category={data.category}
                commentCount={data.commentCount}
                scrapCount={data.scrapCount}
                key={index}
                ref={
                  index > 8 && index === myScrapData.length - 1
                    ? ref
                    : undefined
                }
              >
                {data.content}
              </ScrapListBox>
            ))}
        </div>
      </EntireContainer>
    </>
  );
};
