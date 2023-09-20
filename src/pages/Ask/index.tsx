import { Column, EntireContainer, Row } from 'assets/common';
import { LongBtn } from 'components/common/Button';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import { CTAText } from 'components/Main/CallToAction';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const Ask = () => {
  return (
    <Column>
      <Header borderBottom={false}>질문하기</Header>
      <EntireContainer homebar={true}>
        <InnerContainer justifyContent="space-between">
          <CTAText />
          <InnerContents>
            <Row>
              <Typo.b4 color={Palette.Main}>3개의 답변이 등록</Typo.b4>
              <Typo.b4 color={Palette.Gray5}>되거나 3일이 지난 후, </Typo.b4>
            </Row>
            <Typo.b4 color={Palette.Gray5}>
              자동으로 쥬시글에 등록됩니다.
            </Typo.b4>
          </InnerContents>

          <Row justifyContent="center">
            <LongBtn to="/ask/write">시작하기</LongBtn>
          </Row>
        </InnerContainer>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Ask;

const InnerContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const InnerContents = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: 37px 0px;
`;
