import { EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import { CommentListBox } from 'components/Mypage/CommentListBox';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const fakeData = [
  {
    title: '글 ㅇㅁㅇㅍㅁ',
    content: 'ㅇㅇㅇㅇㅇㅇ.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
  {
    title: '글맹퍄ㅜㅁ애푸',
    content: '꺄ㅏ아아아아아ㅏ.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
  {
    title: '글마푸앺ㅁ제목',
    date: '2023.09.05',
    content: '아아아아ㅏ아아댓글입니다댓글입니다.',
  },
  {
    title: '파ㅜㅐㅍ먀ㅜ제목',
    content: '파무애ㅑ풰배ㅑㅜㅍㅇ.댓글입니다댓글입니다.',
    date: '2023.09.05',
  },
];

export const MyComment = () => {
  return (
    <>
      <Header borderBottom={false} btn="back">
        내댓글
      </Header>
      <EntireContainer>
        <Row>
          <Typo.b2 color={Palette.Main}>4</Typo.b2>
          <Typo.b2> &nbsp; 개의 댓글</Typo.b2>
        </Row>
        <div className="mypage-list-container">
          {fakeData.map((data: any, index: number) => (
            <CommentListBox date={data.date} title={data.title} key={index}>
              {data.content}
            </CommentListBox>
          ))}
        </div>
      </EntireContainer>
    </>
  );
};
