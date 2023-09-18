//추상화를 위해 compount componet 패턴 사용

import styled from 'styled-components';
import { Palette } from 'styles/Palette';

const Typo = () => {
  return <></>;
};

const Heading1 = styled.text<{ color?: string }>`
  font-family: PretendardBold;
  font-size: 24px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Heading2 = styled.text<{ color?: string }>`
  font-family: PretendardBold;
  font-size: 19px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Heading3 = styled.text<{ color?: string }>`
  font-family: PretendardMedium;
  font-size: 18px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Heading4 = styled.text<{ color?: string }>`
  font-family: PretendardRegular;
  font-size: 18px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Heading5 = styled.text<{ color?: string }>`
  font-family: PretendardBold;
  font-size: 16px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Body1 = styled.text<{ color?: string }>`
  font-family: PretendardMedium;
  font-size: 16px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Body2 = styled.text<{ color?: string }>`
  font-family: PretendardRegular;
  font-size: 16px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Body3 = styled.text<{ color?: string }>`
  font-family: PretendardMedium;
  font-size: 14px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Body4 = styled.text<{ color?: string }>`
  font-family: PretendardRegular;
  font-size: 14px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Small1 = styled.text<{ color?: string }>`
  font-family: PretendardMedium;
  font-size: 12px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
const Small2 = styled.text<{ color?: string }>`
  font-family: PretendardRegular;
  font-size: 12px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
interface HomebarProps {
  isOn: boolean;
}
const Homebar = styled.text<HomebarProps>`
  font-family: PretendardBold;
  font-size: 10px;
  line-height: 150%;
  color: ${(props) => (props.isOn ? Palette.Black : Palette.Gray4)};
`;

Typo.h1 = Heading1;
Typo.h2 = Heading2;
Typo.h3 = Heading3;
Typo.h4 = Heading4;
Typo.h5 = Heading5;
Typo.b1 = Body1;
Typo.b2 = Body2;
Typo.b3 = Body3;
Typo.b4 = Body4;
Typo.s1 = Small1;
Typo.s2 = Small2;
Typo.homebar = Homebar;
export default Typo;
