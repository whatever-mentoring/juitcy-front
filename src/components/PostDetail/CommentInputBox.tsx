import { Row } from 'assets/common';
import styled from 'styled-components';
import commentCyni from 'assets/icons/comment-cyni.svg';
import commentJuni from 'assets/icons/comment-juni.svg';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useState, useEffect, useRef } from 'react';
import closure from 'store/closure';
import { editCommentApi, postCommentApi } from 'network/apis/commentApi';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { editCommentState } from 'store/recoil/atom';

const CommentInputBox = ({ idx }: { idx: number }) => {
  const userType = closure.getUserType();
  const [editState, setEditState] = useRecoilState(editCommentState);
  const resetEditComment = useResetRecoilState(editCommentState);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
  };
  const handleClickSend = async () => {
    //수정하기 버튼을 누른 경우, 댓글 수정 기능을 수행하도록 변함
    if (editState.editClicked) {
      const [content, commentIdx] = [text, editState.commentIdx];
      let res = await editCommentApi({ content, commentIdx });

      if (res.isSuccess) {
        alert('댓글이 수정되었습니다.');
        //새로고침
        resetEditComment(); //recoil atom 리셋
        window.location.reload();
      }
    } else {
      const [content, postIdx] = [text, idx];
      let res = await postCommentApi({ content, postIdx });

      if (res.isSuccess) {
        alert('댓글이 등록되었습니다.');
        //새로고침
        window.location.reload();
      }
    }
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [text]);
  useEffect(() => {
    editState.editClicked && setText(editState.text);
  }, [editState]);

  return (
    <Container>
      <img src={userType === 'Cyni' ? commentCyni : commentJuni}></img>
      <TextInputWrapper>
        <TextInput
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder={`익명의 ${
            userType === 'Cyni' ? '시니' : '쥬니'
          }로 댓글 달기...`}
        ></TextInput>
        {text && <SendButton onClick={handleClickSend}>게시</SendButton>}
      </TextInputWrapper>
    </Container>
  );
};

export default CommentInputBox;

const Container = styled(Row)`
  width: 100%;
  padding: 11px 30px 33px 30px;
  gap: 9px;

  box-shadow: -4px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background: ${Palette.White};

  position: fixed;
  bottom: 0;
`;
const TextInputWrapper = styled(Row)`
  width: 100%;
  height: 100%;
  padding: 5px 14px;

  justify-content: space-between;

  border-radius: 17.5px;
  border: 1px solid ${Palette.Gray2};

  &:focus-within {
    border: 1px solid ${Palette.Main50};
    outline: none;
`;
const TextInput = styled.textarea`
  width: 85%;
  border:none;

  font-family: PretendardRegular;
  font-size: 14px;
  line-height: 150%;
  
  resize: none;
  overflow-y:hidden;

  &:focus {
    outline: none;

  ::placeholder {
    color: ${Palette.Gray3};
  }
`;
const SendButton = styled(Typo.b3)`
  color: ${Palette.Main};
  cursor: pointer;
`;
