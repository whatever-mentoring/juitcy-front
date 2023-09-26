import { Column, EntireContainer, Row } from 'assets/common';
import { LongBtn } from 'components/common/Button';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import { CTATextJuni } from 'components/Main/CallToAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const Ask = () => {
  const userType = localStorage.getItem('userType');
  const navigate = useNavigate();

  useEffect(() => {
    if (userType !== 'Juni') {
      alert('쥬니 회원만 접근할 수 있는 페이지입니다.');
      navigate(-1);
    }
  }, []);

  return (
    <>
      {userType === 'Juni' && (
        <Column>
          <Header borderBottom={false}>질문하기</Header>
          <EntireContainer
            homebar={true}
            background={Palette.Back.juni}
            padding="0"
          >
            <BackImg>
              <InnerContainer justifyContent="space-between">
                <CTATextJuni />
                <InnerContents>
                  <Row>
                    <Typo.b4 color={Palette.Main}>3개의 답변이 등록</Typo.b4>
                    <Typo.b4 color={Palette.Gray5}>
                      되거나 3일이 지난 후,{' '}
                    </Typo.b4>
                  </Row>
                  <Typo.b4 color={Palette.Gray5}>
                    자동으로 쥬시글에 등록됩니다.
                  </Typo.b4>
                </InnerContents>

                <Row justifyContent="center">
                  <LongBtn to="/ask/write">시작하기</LongBtn>
                </Row>
              </InnerContainer>
            </BackImg>
          </EntireContainer>
          <Homebar />
        </Column>
      )}
    </>
  );
};

export default Ask;

const InnerContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 25px 30px;
`;
const InnerContents = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  padding: 37px 0px;
`;
const BackImg = styled.div`
  background-image: url('/img/pageImgs/askpage-img.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  width: 100%;
  height: 100%;
`;
