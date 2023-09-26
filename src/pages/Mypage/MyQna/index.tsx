import { EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import MyQnaListBox from 'components/Mypage/MyQnaListBox';
import { Waitingtab } from 'components/Mypage/WaitingTab';
import { NoticeLabel } from 'components/common/NotcieLabel';
import { useEffect, useState } from 'react';
import Typo from 'styles/Typo';
import { Palette } from 'styles/Palette';
import { useInView } from 'react-intersection-observer';
import { myPageApi } from 'network/apis/myPageApi';

interface myQnaDataInterface {
  title?: string;
  date: string;
  category: string;
  answerCount: number;
  content?: string;
  postIdx: number;
  daysUntilDday: number;
}

export const MyQna = () => {
  const userType = window.localStorage.getItem('userType');

  let text = '쥬시 완료된 질문 ';
  const [nowTab, setNowTab] = useState(0); // index 가 0이면 완료 api 불러오기 , 1이면 대기 api 불러오기
  const [myQnaData, setMyQnaData] = useState<myQnaDataInterface[]>();
  const [myQnaCount, setMyQnaCount] = useState<number>();
  const [page, setPage] = useState<number>(2);

  const { ref, inView } = useInView();

  if (userType === 'Juni') {
    if (nowTab === 0) text = '쥬시 완료된 질문 ';
    else text = '쥬시 대기 중인 질문 ';
  } else {
    if (nowTab === 0) text = '쥬시 완료된 답변 ';
    else text = '쥬시 대기 중인 답변 ';
  }

  useEffect(() => {
    myPageApi.GET_MYPAGE_QNA(1, userType, nowTab).then((res) => {
      setMyQnaData(res?.data?.result?.content);
      setMyQnaCount(res?.data?.result?.totalElements);
    });
  }, [nowTab]);

  const getNewPageData = () => {
    myPageApi.GET_MYPAGE_QNA(page, userType, nowTab).then((res) => {
      const newData = res?.data?.result?.content || [];
      myQnaData !== undefined && setMyQnaData([...myQnaData, ...newData]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    if (inView) getNewPageData();
  }, [inView]);

  return (
    <>
      <Header borderBottom={false} btn="back">
        {userType === 'Juni' ? '내질문' : '내답변'}
      </Header>
      <Waitingtab setNowTab={setNowTab} />
      <EntireContainer
        background={`${Palette.Gray05}`}
        style={{ height: 'calc(100dvh - 101px)' }}
      >
        <Row>
          <Typo.b2>{text} &nbsp;</Typo.b2>
          <Typo.b2 color={Palette.Main}>{myQnaCount}</Typo.b2>
        </Row>
        {nowTab === 1 && (
          <NoticeLabel margin="20px 0 0 0">
            3개의 답변이 등록되거나 3일이 지난 후, 자동으로 쥬시글에 등록됩니다.
          </NoticeLabel>
        )}
        <div className="mypage-list-container">
          {myQnaData !== undefined &&
            myQnaData.map((data: myQnaDataInterface, index: number) => (
              <MyQnaListBox
                count={data.answerCount}
                dDay={data.daysUntilDday}
                date={data.date}
                category={data.category}
                key={index}
                postIdx={data.postIdx}
                ref={
                  index > 8 && index === myQnaData?.length - 1 ? ref : undefined
                }
              >
                {userType === 'Juni' ? data.title : data.content}
              </MyQnaListBox>
            ))}
        </div>
      </EntireContainer>
    </>
  );
};
