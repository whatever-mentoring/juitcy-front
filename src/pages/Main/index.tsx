import { Column, EntireContainer, Row } from 'assets/common';
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
      <Header btn={'search'} borderBottom={false}>
        쥬시글
      </Header>
      <Column gap={11}>
        <CategoryBar />
        <CallToAction />
      </Column>
      <EntireContainer>
        <Column gap={26}>
          <CardSlider />
          <CardSlider />
        </Column>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Main;
