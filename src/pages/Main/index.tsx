import { Column, EntireContainer, Row, StyledLink } from 'assets/common';
import CategoryBar from 'components/Category/CategoryBar';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import styled from 'styled-components';
import CardSlider from '../../components/common/CardSlider';
import { Palette } from 'styles/Palette';
import CallToAction from 'components/Main/CallToAction';
import { QTitleCard, QContentCard, AnsCard } from 'components/common/Card';

const Main = () => {
  const cards = [
    <QTitleCard></QTitleCard>,
    <QContentCard></QContentCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
  ];

  return (
    <Column>
      <Header borderBottom={false} btn={'search'}>
        쥬시글
      </Header>
      <EntireContainer homebar={true} padding="25px 0px">
        <Column color={Palette.Gray05}>
          <div className="padding-container">
            <CategoryBar ctgAll={true} />
          </div>
          <CallToAction />
        </Column>
        <div className="padding-container">
          <Column gap={26}>
            <StyledLink to="/post/1">
              <CardSlider cards={cards} />
            </StyledLink>
            <CardSlider cards={cards} />
          </Column>
        </div>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Main;
