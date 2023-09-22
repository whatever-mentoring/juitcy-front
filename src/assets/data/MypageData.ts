import { mypageMenuInterface } from 'pages/Mypage';
import closure from 'store/closure';

const userType = closure.getUserType();

export const myPageMemu: mypageMenuInterface[] = [
  {
    link: 'myQna',
    icon: 'myQnaIcon',
    menu: `${userType === 'Juni' ? '내 질문' : '내 답변'}`,
    margin: 0,
    count: 'questionCount',
  },
  {
    link: 'myComment',
    icon: 'myCommentIcon',
    menu: '내 댓글',
    margin: 0,
    count: 'commentCount',
  },
  {
    link: 'myScrap',
    icon: 'myScrapIcon',
    menu: '스크랩',
    margin: 0,
    count: 'scrapCount',
  },
  {
    link: '',
    icon: 'newsLetterIcon',
    menu: '뉴스레터 구독하기',
    margin: 10,
    count: '',
  },
  {
    link: '',
    icon: 'logoutIcon',
    menu: '로그아웃',
    margin: 10,
    count: '',
  },
];
