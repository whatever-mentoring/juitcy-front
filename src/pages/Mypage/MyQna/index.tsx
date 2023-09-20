import { EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import { MyQnaListBox } from 'components/Mypage/MyQnaListBox';
import { Waitingtab } from 'components/Mypage/WaitingTab';
import { NoticeLabel } from 'components/common/NotcieLabel';
import { useState } from 'react';
import Typo from 'styles/Typo';
import { Palette } from 'styles/Palette';
import closure from 'store/closure';

const fakeData = [
  {
    count: 1,
    category: '일상',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 1,
    category: '일상',
    dDay: 1,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 2,
    category: '사회생활',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 3,
    category: '일상',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 3,
    category: '기타',
    dDay: 3,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 1,
    category: '일상',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 3,
    category: '일상',
    dDay: 1,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 1,
    category: '일상',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
  {
    count: 2,
    category: '일상',
    dDay: 2,
    date: '2023.09.09',
    content: '결혼식 축의금 얼마할까요?',
  },
];

export const MyQna = () => {
  const userType = closure.getUserType();

  let text = '쥬시 완료된 질문 ';
  const [nowTab, setNowTab] = useState(0); // index 가 0이면 완료 api 불러오기 , 1이면 대기 api 불러오기

  if (userType === 'Juni') {
    if (nowTab === 0) text = '쥬시 완료된 질문 ';
    else text = '쥬시 대기 중인 질문 ';
  } else {
    if (nowTab === 0) text = '쥬시 완료된 답변 ';
    else text = '쥬시 대기 중인 답변 ';
  }

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
          <Typo.b2 color={Palette.Main}>12</Typo.b2>
        </Row>
        {nowTab === 1 && (
          <NoticeLabel margin="20px 0 0 0">
            3개의 답변이 등록되거나 3일이 지난 후, 자동으로 쥬시글에 등록됩니다.
          </NoticeLabel>
        )}
        <div className="mypage-list-container">
          {fakeData.map((data: any, index: number) => (
            <MyQnaListBox
              count={data.count}
              dDay={data.dDay}
              date={data.date}
              category={data.category}
              key={index}
            >
              {data.content}
            </MyQnaListBox>
          ))}
        </div>
      </EntireContainer>
    </>
  );
};
