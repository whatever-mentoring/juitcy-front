import { Column } from 'assets/common';
import styled from 'styled-components';
import Comment from './Comment';
import { commentType } from 'pages/Main/PostDetail';

const CommentsBox = (props: { comments: commentType[] }) => {
  return (
    <Container>
      {props.comments.map((comment: commentType, index) => (
        <Comment
          key={index}
          userType={comment.userType}
          text={comment.text}
          date={comment.date}
        />
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
