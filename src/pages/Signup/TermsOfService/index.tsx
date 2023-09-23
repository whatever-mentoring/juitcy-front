import { Column, EntireContainer, Row, StyledLink } from 'assets/common';
import { Header } from 'components/common/Header';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import checkOff from 'assets/icons/check-off.svg';
import checkOnJuni from 'assets/icons/check-on-juni.svg';
import checkOnCyni from 'assets/icons/check-on-cyni.svg';
import termArrow from 'assets/icons/term-arrow.svg';
import { useEffect, useState } from 'react';
import closure from 'store/closure';
import { LongBtn } from 'components/common/Button';

const TermsOfService = () => {
  const userType = closure.getUserType();
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkboxStates, setCheckboxStates] = useState([
    {
      state: false,
      termTitle: '[필수] 서비스 이용약관 동의',
      page: '이용약관',
    },
    {
      state: false,
      termTitle: '[필수] 개인정보 처리방침 동의',
      page: '개인정보처리방침',
    },
  ]);
  const handleCheckboxChange = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index].state = !newCheckboxStates[index].state;
    setCheckboxStates(newCheckboxStates);
  };
  const toggleCheck = () => {
    if (allChecked) {
      setAllChecked(false);
      const newCheckboxStates = [
        {
          state: false,
          termTitle: checkboxStates[0].termTitle,
          page: checkboxStates[0].page,
        },
        {
          state: false,
          termTitle: checkboxStates[1].termTitle,
          page: checkboxStates[1].page,
        },
      ];
      setCheckboxStates(newCheckboxStates);
    } else {
      setAllChecked(true);
      const newCheckboxStates = [
        {
          state: true,
          termTitle: checkboxStates[0].termTitle,
          page: checkboxStates[0].page,
        },
        {
          state: true,
          termTitle: checkboxStates[1].termTitle,
          page: checkboxStates[1].page,
        },
      ];
      setCheckboxStates(newCheckboxStates);
    }
  };
  useEffect(() => {
    const checkIfAnyFalse = () => {
      for (const checkbox of checkboxStates) {
        if (!checkbox.state) {
          return false;
        }
      }
      return true;
    };

    if (checkIfAnyFalse()) {
      setAllChecked(true); //약관이 모두 체크되었을 경우 전체 체크 버튼 체크
    } else {
      setAllChecked(false); //체크되지 않은 약관이 있을 경우 전체 체크 버튼 해제
    }
  }, [checkboxStates]);

  return (
    <Column>
      <Header btn={'back'} borderBottom={false}>
        {' '}
      </Header>
      <EntireContainer>
        <InnerContainer>
          <Column gap={27}>
            <Typo.h1>
              반가워요! 가입하려면
              <br /> 약관에 동의가 필요해요.
            </Typo.h1>
            <Column gap={18}>
              <CheckAllBtn>
                <CheckBox onClick={toggleCheck}>
                  <CheckIcon
                    src={
                      allChecked
                        ? userType === 'Juni'
                          ? checkOnJuni
                          : checkOnCyni
                        : checkOff
                    }
                  ></CheckIcon>
                </CheckBox>
                <Typo.h5>전체 동의하기</Typo.h5>
              </CheckAllBtn>
            </Column>
            <Column gap={15}>
              {checkboxStates.map((checkbox, index) => (
                <CheckList key={index} justifyContent="space-between">
                  <Row gap={12.5}>
                    <CheckIcon
                      src={
                        checkbox.state
                          ? userType === 'Juni'
                            ? checkOnJuni
                            : checkOnCyni
                          : checkOff
                      }
                      onClick={() => handleCheckboxChange(index)}
                    />
                    <Typo.b4 color={Palette.Gray4}>
                      {checkbox.termTitle}
                    </Typo.b4>
                  </Row>
                  <StyledLink
                    to="/mypage/provision"
                    state={{ page: checkbox.page }}
                  >
                    <img src={termArrow} />
                  </StyledLink>
                </CheckList>
              ))}
            </Column>
          </Column>
          {allChecked ? (
            <LongBtn to="/signup/success">다음</LongBtn>
          ) : (
            <LongBtn to="" color={Palette.Gray4}>
              다음
            </LongBtn>
          )}
        </InnerContainer>
      </EntireContainer>
    </Column>
  );
};

export default TermsOfService;

const InnerContainer = styled(Column)`
  height: 100%;
  justify-content: space-between;
`;
const CheckAllBtn = styled(Row)`
  width: 100%;
  height: 58px;
  alignitems: center;

  padding: 17px 16px;
  gap: 15px;

  border-radius: 10px;
  border: 0.5px solid ${Palette.Grey};
  background: ${Palette.White};
`;
const CheckBox = styled(Row)`
  width: 25px;
  height: 25px;
  justify-content: center;
  alignitems: center;

  border-radius: 5px;
  border: 1px solid ${Palette.Gray3};

  cursor: pointer;
`;
const CheckIcon = styled.img`
  width: 11.5px;
  cursor: pointer;
`;
const CheckList = styled(Row)`
  padding: 0 22px;
`;
