//추상화를 위해 compount componet 패턴 사용

import styled from "styled-components";
import { Palette } from "styles/Palette";

const Typo = () => {
    return <></>;
};

const Heading1 = styled.text`
    font-family: PretendardBold;
    font-size: 24px;
    line-height: 150%;
`;
const Heading2 = styled.text`
    font-family: PretendardBold;
    font-size: 19px;
    line-height: 150%;
`;
const Heading3 = styled.text`
    font-family: PretendardMedium;
    font-size: 18px;
    line-height: 150%;
`;
const Heading4 = styled.text`
    font-family: PretendardRegular;
    font-size: 18px;
    line-height: 150%;
`;
const Body1 = styled.text`
    font-family: PretendardMedium;
    font-size: 16px;
    line-height: 150%;
`;
const Body2 = styled.text`
    font-family: PretendardRegular;
    font-size: 16px;
    line-height: 150%;
`;
const Body3 = styled.text`
    font-family: PretendardMedium;
    font-size: 14px;
    line-height: 150%;
`;
const Body4 = styled.text`
    font-family: PretendardRegular;
    font-size: 14px;
    line-height: 150%;
`;
const small1 = styled.text`
    font-family: PretendardMedium;
    font-size: 12px;
    line-height: 150%;
`;
const small2 = styled.text`
    font-family: PretendardRegular;
    font-size: 12px;
    line-height: 150%;
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
Typo.b1 = Body1;
Typo.b2 = Body2;
Typo.b3 = Body3;
Typo.b4 = Body4;
Typo.s1 = small1;
Typo.s2 = small2;
Typo.homebar = Homebar;
export default Typo;
