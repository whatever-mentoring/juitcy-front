import { Column, EntireContainer, Row, StyledLink } from 'assets/common';
import CategoryBar from 'components/Category/CategoryBar';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
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
        <CategoryBar ctgAll={true} />
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
