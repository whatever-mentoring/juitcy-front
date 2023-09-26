import { Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { writeState } from 'store/recoil/atom';
import { postQuestionApi } from 'network/apis/question';
import { postAnswerApi } from 'network/apis/answerApi';
import { useEffect, useState } from 'react';
import Modal from './Modal';

const WriteConfirmBar = ({ postIdx }: { postIdx?: number }) => {
  const location = useLocation();
  const currentURI = location.pathname;
  const { title, category, content } = useRecoilValue(writeState);
  const [modalInfo, setModalInfo] = useState({
    message: '',
    destination: '',
    type: '',
  });

  const [yesClicked, SetYesClicked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalOpen(true);
  };

  //api
  const questionApi = async () => {
    try {
      let res = await postQuestionApi({ title, category, content });
      if (res.isSuccess) {
        setModalInfo({
          ...modalInfo,
          message: '질문이 등록되었습니다.',
          destination: '/ask',
          type: 'alert',
        });
        toggleModal();
      }
    } catch (err) {}
  };
  const answerApi = async () => {
    try {
      let res = await postAnswerApi({
        postIdx: postIdx ? postIdx : -1,
        answer: content,
      });
      if (res.isSuccess) {
        setModalInfo({
          ...modalInfo,
          message: '답변이 등록되었습니다.',
          destination: '/answer',
          type: 'alert',
        });
        toggleModal();
      }
    } catch (err) {}
  };

  //modal info 설정
  useEffect(() => {
    if (currentURI === '/ask/write') {
      setModalInfo({
        ...modalInfo,
        message: '질문을 등록하시겠습니까?',
        destination: '/ask',
        type: 'confirm',
      });
    } else {
      setModalInfo({
        ...modalInfo,
        message: '답변을 등록하시겠습니까?',
        destination: '/answer',
        type: 'confirm',
      });
    }
  }, []);

  useEffect(() => {
    if (yesClicked) {
      if (title && title.length < 5) {
        alert('제목을 5자 이상 입력해주세요.');
        SetYesClicked(false);
      } else if (content.length < 10) {
        alert('내용을 10자 이상 입력해주세요.');
        SetYesClicked(false);
      } else {
        currentURI === '/ask/write' ? questionApi() : answerApi();
      }
    }
  }, [yesClicked]);

  //onClick
  const onClickWrite = () => {
    toggleModal();
  };

  const onClickCancel = () => {
    const destination = currentURI === '/ask/write' ? '/ask' : '/answer';
    setModalInfo({
      ...modalInfo,
      message: '작성을 취소하시겠습니까?',
      destination: destination,
      type: 'alert',
    });
    toggleModal();
  };

  return (
    <Container>
      <BtnDiv
        color={Palette.Gray05}
        borderClr={Palette.Gray2}
        onClick={onClickCancel}
      >
        <Typo.h2 color={Palette.Gray4}>취소</Typo.h2>
      </BtnDiv>
      <BtnDiv
        color={Palette.Main}
        borderClr={Palette.Main}
        onClick={onClickWrite}
      >
        <Typo.h2 color={Palette.White}>작성완료</Typo.h2>
      </BtnDiv>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          text={modalInfo.message}
          type={modalInfo.type}
          destination={modalInfo.destination}
          SetYesClicked={SetYesClicked}
        />
      )}
    </Container>
  );
};

export default WriteConfirmBar;

const Container = styled(Row)`
  width: 100%;
  height: 59px;
`;
const BtnDiv = styled(Row)<{ color: string; borderClr: string }>`
  width: 50%;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => color};
  border-top: 1px solid ${({ borderClr }) => borderClr};
  cursor: pointer;
`;
