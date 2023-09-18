import { EntireContainer, Row } from 'assets/common';
import { Header } from 'components/Header';
import { ScrapListBox } from 'components/Mypage/ScrapListBox';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const fakeData = [
  {
    category: '일상',
    title: '글 ㅇㅁㅇㅍㅁ',
    content: 'ㅇㅇㅇㅇㅇㅇ.댓글입니다댓글입니다.',
    date: '2023.09.05',
    commentCount: 23,
    scrapCount: 44,
  },
  {
    category: '일상',
    title: '글맹퍄ㅜㅁ애푸',
    content: '꺄ㅏ아아아아아ㅏ.댓글입니다댓글입니다.',
    date: '2023.09.05',
    commentCount: 23,
    scrapCount: 44,
  },
  {
    category: '일상',
    title: '글마푸앺ㅁ제목',
    date: '2023.09.05',
    content: '아아아아ㅏ아아댓글입니다댓글입니다.',
    commentCount: 23,
    scrapCount: 44,
  },
  {
    category: '일상',
    title: '파ㅜㅐㅍ먀ㅜ제목',
    content: '파무애ㅑ풰배ㅑㅜㅍㅇ.댓글입니다댓글입니다.',
    commentCount: 23,
    scrapCount: 44,
    date: '2023.09.05',
  },
  {
    category: '일상',
    title: '글 제목',
    commentCount: 23,
    scrapCount: 44,
    content: '아푸매야ㅜ패먕.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
  {
    category: '일상',
    title: '글 제목',
    content: '댓글입니다댓글입니다.댓글입니다댓글입니다.',
    date: '2023.09.05',
    commentCount: 23,
    scrapCount: 44,
  },
  {
    category: '일상',
    title: '글 제목',
    commentCount: 23,
    scrapCount: 44,
    content: '댓글입니다댓글입니다.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
  {
    category: '일상',
    commentCount: 23,
    scrapCount: 44,
    title: '글 제목',
    content: '댓글입니다댓글입니다.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
  {
    category: '일상',
    title: '글 제목',
    commentCount: 23,
    scrapCount: 44,
    content: '댓글입니다댓글입니다.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
];

export const MyScrap = () => {
  return (
    <>
      <Header borderBottom={false} btn="back">
        스크랩
      </Header>
      <EntireContainer>
        <Row>
          <Typo.b2 color={Palette.Main}>4</Typo.b2>
          <Typo.b2> &nbsp; 개의 스크랩</Typo.b2>
        </Row>
        <div className="mypage-list-container">
          {fakeData.map((data: any, index: number) => (
            <ScrapListBox
              date={data.date}
              title={data.title}
              category={data.category}
              commentCount={data.commentCount}
              scrapCount={data.scrapCount}
              key={index}
            >
              {data.content}
            </ScrapListBox>
          ))}
        </div>
      </EntireContainer>
    </>
  );
};
