import { Row, StyledLink } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import search from '@assets/icons/search.svg';
import back from '@assets/icons/back.svg';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

interface headerProps {
  btn?: string;
  children: string;
  color?: string;
  background?: string;
  borderBottom: boolean;
}

export const Header = ({
  btn,
  children,
  color,
  borderBottom,
  background,
}: headerProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const currentURI = location.pathname;
    if (currentURI === '/ask/write') {
      alert('작성을 취소하시겠습니까?');
      navigate('/ask');
    } else if (currentURI.match(/^\/answer\/\d+$/)) {
      alert('작성을 취소하시겠습니까?');
      navigate('/answer');
    } else {
      navigate(-1);
    }
  };

  return (
    <Container borderBottom={borderBottom} background={background}>
      <img src={btn === 'back' && back} onClick={handleBack}></img>
      <Typo.h2 color={color}>{children}</Typo.h2>
      <StyledLink to="/search">
        <img src={btn === 'search' && search}></img>
      </StyledLink>
    </Container>
  );
};

const Container = styled(Row)<{ borderBottom?: boolean; background?: string }>`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;

  padding: 0px 30px;

  border-bottom: ${({ borderBottom }) =>
    borderBottom === false ? 'none' : `1px solid ${Palette.Main}`};
  background: ${({ background }) => (background ? background : Palette.White)};
`;
