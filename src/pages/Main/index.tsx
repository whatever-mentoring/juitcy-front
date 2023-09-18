import { Column, EntireContainer, Row, StyledLink } from 'assets/common';
import CategoryBar from 'components/CategoryBar';
import { Header } from 'components/Header';
import Homebar from 'components/Homebar';
import styled from 'styled-components';
import CardSlider from '../../components/Main/CardSlider';
import { Palette } from 'styles/Palette';
import CallToAction from 'components/Main/CallToAction';

const Main = () => {
  return (
    <Column>
      <Header borderBottom={false} btn={'search'}>
        쥬시글
      </Header>
      <Column color={Palette.Gray05}>
        <CategoryBar />
        <CallToAction />
      </Column>
      <EntireContainer>
        <Column gap={26}>
          <StyledLink to="/post/1">
            <CardSlider />
          </StyledLink>
          <CardSlider />
        </Column>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Main;
