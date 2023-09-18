import { Column, EntireContainer } from 'assets/common';
import AnswersContainer from 'components/Answer/AnswersContainer';
import Notice from 'components/Answer/Notice';
import { Categories, Container } from 'components/CategoryBar';
import { Header } from 'components/Header';
import Homebar from 'components/Homebar';

const Answer = () => {
  return (
    <Column>
      <Header borderBottom={true}>답변하기</Header>
      <Notice></Notice>
      <Container>
        <Categories />
      </Container>
      <EntireContainer>
        <AnswersContainer />
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Answer;
