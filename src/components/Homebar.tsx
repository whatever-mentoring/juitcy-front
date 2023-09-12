import styled from "styled-components";
import answerOff from "@assets/icons/answer-off.png";
import answerOn from "@assets/icons/answer-on.png";
import askOff from "@assets/icons/ask-off.png";
import askOn from "@assets/icons/ask-on.png";
import juicygeulOff from "@assets/icons/juicygeul-off.png";
import juicygeulOnJuni from "@assets/icons/juicygeul-on-juni.png";
import juicygeulOnCyni from "@assets/icons/juicygeul-on-cyni.png";
import mypageOff from "@assets/icons/mypage-off.png";
import mypageOnJuni from "@assets/icons/mypage-on-juni.png";
import mypageOnCyni from "@assets/icons/mypage-on-cyni.png";
import Typo from "styles/Typo";
import { useState } from "react";

const Homebar = () => {
    let userType = 2; //임시 변수
    const [isAnsOn, setIsAnsOn] = useState<boolean>(false);
    const [isAskOn, setIsAskOn] = useState<boolean>(false);
    const [isJuicyOn, setIsJuicyOn] = useState<boolean>(false);
    const [isMpgOn, setIsMpgOn] = useState<boolean>(false);

    const onClickAns = () => {
        setIsAnsOn(true);
        setIsAskOn(false);
        setIsJuicyOn(false);
        setIsMpgOn(false);
    };
    const onClickAsk = () => {
        setIsAnsOn(false);
        setIsAskOn(true);
        setIsJuicyOn(false);
        setIsMpgOn(false);
    };
    const onClickJuicy = () => {
        setIsAnsOn(false);
        setIsAskOn(false);
        setIsJuicyOn(true);
        setIsMpgOn(false);
    };
    const onClickMpg = () => {
        setIsAnsOn(false);
        setIsAskOn(false);
        setIsJuicyOn(false);
        setIsMpgOn(true);
    };
    const renderAnswerOrAsk = () => {
        const result = [];
        result.push(
            userType == 1 ? (
                // 답변하기
                <Menu onClick={onClickAns}>
                    <Icon src={`${isAnsOn ? answerOn : answerOff}`} />
                    <Typo.homebar isOn={isAnsOn}>답변하기</Typo.homebar>
                </Menu>
            ) : (
                //질문하기
                <Menu onClick={onClickAsk}>
                    <Icon src={`${isAskOn ? askOn : askOff}`} />
                    <Typo.homebar isOn={isAskOn}>질문하기</Typo.homebar>
                </Menu>
            )
        );

        return result;
    };

    return (
        <Container>
            {renderAnswerOrAsk()}
            <Menu onClick={onClickJuicy}>
                <Icon
                    src={`${
                        isJuicyOn
                            ? userType == 1
                                ? juicygeulOnCyni
                                : juicygeulOnJuni
                            : juicygeulOff
                    }`}
                />
                <Typo.homebar isOn={isJuicyOn}>주씨글</Typo.homebar>
            </Menu>
            <Menu onClick={onClickMpg}>
                <Icon
                    src={`${
                        isMpgOn
                            ? userType == 1
                                ? mypageOnCyni
                                : mypageOnJuni
                            : mypageOff
                    }`}
                    style={{ width: "36px", height: "36px" }}
                />
                <Typo.homebar isOn={isMpgOn}>마이페이지</Typo.homebar>
            </Menu>
        </Container>
    );
};

export default Homebar;

const Container = styled.div`
    width: 390px;
    height: 96px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px 52px;
`;
const Menu = styled.div`
    height: 55px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;

    cursor: pointer;
`;
const Icon = styled.img`
    width: 40px;
    height: 40px;
`;
