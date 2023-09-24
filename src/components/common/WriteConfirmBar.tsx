import { Row } from 'assets/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { writeState } from 'store/recoil/atom';
import { postQuestionApi } from 'network/apis/question';
import { postAnswerApi } from 'network/apis/answerApi';

const WriteConfirmBar = ({ postIdx }: { postIdx?: number }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentURI = location.pathname;
  const { title, category, content } = useRecoilValue(writeState);

  //onClick
  const onClickWrite = () => {
    let message, destination: string, api: any;

    if (currentURI === '/ask/write') {
      message = '질문을 등록하시겠습니까?';
      destination = '/ask';
      api = postQuestionApi({ title, category, content });
    } else {
      message = '답변을 등록하시겠습니까?';
      destination = '/answer';
      api = postIdx ? postAnswerApi({ postIdx, answer: content }) : '';
    }

    const result = window.confirm(message);
    if (result) {
      if (title && title.length < 10) {
        alert('제목을 10자 이상 입력해주세요.');
      } else if (content.length < 10) {
        alert('내용을 10자 이상 입력해주세요.');
      } else {
        const postApi = async () => {
          try {
            let res = await api;
            res.isSuccess && navigate(destination);
          } catch (err) {}
        };

        postApi();
      }
    }
  };
  const onClickCancel = () => {
    const message = '작성을 취소하시겠습니까?';
    const destination = currentURI === '/ask/write' ? '/ask' : '/answer';

    const result = window.confirm(message);
    if (result) {
      navigate(destination);
    }
  };

  return (
    <Container>
      <BtnDib
        color={Palette.Gray05}
        borderClr={Palette.Gray2}
        onClick={onClickCancel}
      >
        <Typo.h2 color={Palette.Gray4}>취소</Typo.h2>
      </BtnDib>
      <BtnDib
        color={Palette.Main}
        borderClr={Palette.Main}
        onClick={onClickWrite}
      >
        <Typo.h2 color={Palette.White}>작성완료</Typo.h2>
      </BtnDib>
    </Container>
  );
};

export default WriteConfirmBar;

const Container = styled(Row)`
  width: 100%;
  height: 59px;
`;
const BtnDib = styled(Row)<{ color: string; borderClr: string }>`
  width: 50%;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => color};
  border-top: 1px solid ${({ borderClr }) => borderClr};
  cursor: pointer;
`;
