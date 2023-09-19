import { Column, EntireContainer } from 'assets/common';
import AnswersContainer from 'components/Answer/AnswersContainer';
import Notice from 'components/Answer/Notice';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import CategoryBar from 'components/Category/CategoryBar';

const Answer = () => {
  return (
    <Column>
      <Header borderBottom={true}>답변하기</Header>
      <Notice></Notice>
      <CategoryBar.container>
        <CategoryBar.ctgs ctgAll={true} />
      </CategoryBar.container>
      <EntireContainer>
        <AnswersContainer />
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Answer;
