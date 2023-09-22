import { Row } from 'assets/common';
import comment from 'assets/icons/comment.svg';
import scrap from 'assets/icons/scrap.svg';
import { postType } from 'types';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const CommentScrapInfo = ({ post }: { post: postType }) => {
  return (
    <Row gap={8}>
      <Row gap={5} alignItems="center">
        <img src={comment}></img>
        <Typo.b1 color={Palette.Gray4}>{post.commentCount}</Typo.b1>
      </Row>
      <Row gap={5} alignItems="center">
        <img src={scrap}></img>
        <Typo.b1 color={Palette.Gray4}>{post.scrapCount}</Typo.b1>
      </Row>
    </Row>
  );
};

export default CommentScrapInfo;
