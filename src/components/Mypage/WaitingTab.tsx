import { useState } from 'react';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface tabInterface {
  label: string;
  status: string;
}

export const Waitingtab = () => {
  const [clickNum, setClickNum] = useState(0);
  let role = 'juni';

  const tabs: tabInterface[] = [
    { label: role === 'juni' ? '답변' : '주씨', status: '완료' },
    { label: role === 'juni' ? '답변' : '주씨', status: '대기' },
  ];

  return (
    <Container>
      {tabs.map((tab: tabInterface, index: number) => (
        <SubContainer
          key={index}
          onClick={() => setClickNum(index)}
          borderHeight={index === clickNum ? 3 : 0}
        >
          <Typo.h4>{`${tab.label} ${tab.status}`}</Typo.h4>
        </SubContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 41px;
  padding: 0 25px;
  border-bottom: ${Palette.Gray3} 1px solid;
`;
const SubContainer = styled.div<{ borderHeight?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: ${({ borderHeight }) =>
    borderHeight ? `${Palette.Black} ${borderHeight}px solid` : 0};
`;
