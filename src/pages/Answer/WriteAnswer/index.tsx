import { Column, EntireContainer } from 'assets/common';
import WriteInputBox from 'components/Answer/WriteInputBox';
import { QDetailCard } from 'components/Card';
import { Header } from 'components/Header';
import { Palette } from 'styles/Palette';

const WriteAnswer = () => {
  return (
    <Column>
      <Header borderBottom={true} color={Palette.Main}>
        답변하기
      </Header>
      <EntireContainer>
        <Column gap={22} alignItems="center">
          <QDetailCard />
          <WriteInputBox />
        </Column>
      </EntireContainer>
    </Column>
  );
};

export default WriteAnswer;
