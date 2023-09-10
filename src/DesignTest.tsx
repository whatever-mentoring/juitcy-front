//디자인 시스템 테스트를 위한 페이지
//추후 삭제
import Typo from "styles/Typo";
import styled from "styled-components";
import { Palette } from "styles/Palette";

const DesignTest = () => {
    return (
        <div>
            {/* typo */}

            <Typo.h1>질문에 답해주세요!</Typo.h1>
            <br />
            <Typo.h2>Q.질문이 들어올 자리입니다.</Typo.h2>
            <br />
            <Typo.h3>답변 완료</Typo.h3>
            <br />
            <Typo.h4>답변 대기</Typo.h4>
            <br />
            <Typo.b1>12</Typo.b1>
            <br />
            <Typo.b2>답변 완료된 질문</Typo.b2>
            <br />
            <Typo.b3>일상, 인간관계, 사회생활, 기타</Typo.b3>
            <br />
            <Typo.b4>주니어들이 시니어님의 답변을 기다리고 있어요!</Typo.b4>
            <br />
            <Typo.s1>답변하기 예시입니다.</Typo.s1>
            <br />
            <Typo.s2>답변하기 예시입니다.</Typo.s2>
            <br />

            {/* pallete */}

            <Colorbx color={Palette.Grey}></Colorbx>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Colorbx color={Palette.Juni.main}></Colorbx>
                <Colorbx color={Palette.Juni.category}></Colorbx>
                <Colorbx color={Palette.Juni.ans1}></Colorbx>
                <Colorbx color={Palette.Juni.ans2}></Colorbx>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Colorbx color={Palette.Cyni.main}></Colorbx>
                <Colorbx color={Palette.Cyni.category}></Colorbx>
                <Colorbx color={Palette.Cyni.ans1}></Colorbx>
                <Colorbx color={Palette.Cyni.ans2}></Colorbx>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Colorbx color={Palette.White}></Colorbx>
                <Colorbx color={Palette.Gray2}></Colorbx>
                <Colorbx color={Palette.Gray3}></Colorbx>
                <Colorbx color={Palette.Gray4}></Colorbx>
                <Colorbx color={Palette.Gray5}></Colorbx>
                <Colorbx color={Palette.Gray6}></Colorbx>
                <Colorbx color={Palette.Black}></Colorbx>
            </div>
        </div>
    );
};

export default DesignTest;

const Colorbx = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${(props) => props.color};
`;
