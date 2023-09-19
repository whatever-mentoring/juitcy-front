import { Column, Row } from 'assets/common';
import CardSlider from 'components/Main/CardSlider';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const SearchResult = ({ text }: { text: string }) => {
  let resultNum = 23;
  return (
    <Column gap={30}>
      <Row>
        <Typo.b3>'{text}'</Typo.b3>
        <Typo.b4>에 대한 검색 결과</Typo.b4>
        <Typo.b3 color={Palette.Main}>&nbsp; {resultNum}</Typo.b3>
        <Typo.b4>개</Typo.b4>
      </Row>
      <ResultContainer>
        <CardSlider></CardSlider>
        <CardSlider></CardSlider>
      </ResultContainer>
    </Column>
  );
};

export default SearchResult;

const ResultContainer = styled(Column)`
width:100%
justify-content:center;

  padding: 30px 0;
  gap: 40px;
`;
