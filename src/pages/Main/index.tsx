import { Column, Row } from 'assets/common';
import CategoryBar from 'components/CategoryBar';
import { Header } from 'components/Header';
import Homebar from 'components/Homebar';
import styled from 'styled-components';
import CardSlider from '../../components/Main/CardSlider';
import { Palette } from 'styles/Palette';

const Main = () => {
  return (
    <Column>
      <Header borderBottom={false} btn={'search'}>
        쥬시글
      </Header>
      <Container color={Palette.Gray05}>
        <CategoryBar />
        <Column gap={20}>
          <CardSlider />
          <CardSlider />
        </Column>
      </Container>
      <Homebar />
    </Column>
  );
};

export default Main;

const Container = styled(Column)<{ color?: string }>`
  width: 100%;
  padding: 24px 30px;
  gap: 20px;
  background: ${({ color }) => (color ? color : Palette.White)};
`;
