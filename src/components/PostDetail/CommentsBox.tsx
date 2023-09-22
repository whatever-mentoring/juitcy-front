import { Column } from 'assets/common';
import styled from 'styled-components';
import Comment from './Comment';
import { commentType } from 'types';

const CommentsBox = ({ comments }: { comments: commentType[] }) => {
  return (
    <Container>
      {comments.map((comment: commentType, index) => (
        <Comment key={comment.commentIdx} comment={comment} />
      ))}
    </Container>
  );
};

export default CommentsBox;

const Container = styled(Column)`
  margin-top: 7px;
  margin-bottom: 78px;
  gap: 20px;
`;
