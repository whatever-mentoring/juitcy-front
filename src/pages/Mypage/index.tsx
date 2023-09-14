import { Link } from 'react-router-dom';

export const Mypage = () => {
  return (
    <>
      <div>
        <Link to="/myQna">내질문</Link>
      </div>
      <div>
        <Link to="/myComment">내댓글</Link>
      </div>
      <div>
        <Link to="/myScrap">스크랩</Link>
      </div>
    </>
  );
};
