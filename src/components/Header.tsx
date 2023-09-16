import { Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import search from '@assets/icons/search.svg';
import back from '@assets/icons/back.svg';

interface headerProps {
  btn: string;
  children: string;
}

export const Header = ({ btn, children }: headerProps) => {
  return (
    <Container>
      <img src={btn === 'back' && back}></img>
      <Typo.h2>{children}</Typo.h2>
      <img src={btn === 'search' && search}></img>
    </Container>
  );
};

const Container = styled(Row)`
  width: 390px;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  padding: 0px 30px;

  border-bottom: 1px solid ${Palette.Main};
  background: ${Palette.White};
`;
