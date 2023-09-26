import { Column, Row } from 'assets/common';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const Modal = ({
  setIsModalOpen,
  text,
  type,
  destination,
  SetYesClicked,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  type: string;
  destination: string;
  SetYesClicked?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ModalContent>
        <Message>
          <Typo.h5 color={Palette.Gray5}>{text}</Typo.h5>
        </Message>
        {type === 'confirm' ? (
          <Button>
            <LeftBtn
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <Typo.b1 color={Palette.Main}>아니오</Typo.b1>
            </LeftBtn>
            <RightBtn
              onClick={() => {
                {
                  SetYesClicked && SetYesClicked(true);
                }
                setIsModalOpen(false);
              }}
            >
              <Typo.b1 color={Palette.Main}>네</Typo.b1>
            </RightBtn>
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsModalOpen(false);
              navigate(destination);
            }}
          >
            <Typo.b1 color={Palette.Main}>확인</Typo.b1>
          </Button>
        )}
      </ModalContent>
    </Container>
  );
};

export default Modal;

const Container = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  cursor: pointer;
`;
const ModalContent = styled(Column)`
  width: 297px;
  height: 136px;

  border-radius: 15px;
  background: ${Palette.White};
`;
const Message = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${Palette.Gray3};
`;
const Button = styled(Row)`
  width: 100%;
  height: 70px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LeftBtn = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  border-right: 1px solid ${Palette.Gray3};
`;
const RightBtn = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
