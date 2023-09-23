import { Column, EntireContainer } from 'assets/common';
import WriteInputBox from 'components/common/WriteInputBox';
import { QDetailCard } from 'components/common/Card';
import { Header } from 'components/common/Header';
import WriteConfirmBar from 'components/common/WriteConfirmBar';
import { Palette } from 'styles/Palette';
import { useParams } from 'react-router-dom';

const WriteAnswer = () => {
  const { idx } = useParams();
  const idxNum = idx ? parseInt(idx) : null;

  return (
    <Column>
      <Header borderBottom={true} color={Palette.Main} btn="back">
        답변하기
      </Header>
      <EntireContainer
        homebar={false}
        style={{ height: 'calc(100dvh - 119px)' }}
      >
        <Column gap={22} alignItems="center">
          <QDetailCard />
          <WriteInputBox
            minHeight={203}
            placeholder="시니어님의 경험을 바탕으로 답변을 작성해주세요."
          />
        </Column>
      </EntireContainer>
      {idxNum && <WriteConfirmBar postIdx={idxNum} />}
    </Column>
  );
};

export default WriteAnswer;
