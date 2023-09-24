import { Column } from 'assets/common';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useSetRecoilState } from 'recoil';
import { writeState } from 'store/recoil/atom';

interface inputboxProps {
  placeholder: string;
  minHeight: number;
}
const WriteInputBox = ({ placeholder, minHeight }: inputboxProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>('');
  const setWriteState = useSetRecoilState(writeState);
  //content 저장
  useEffect(() => {
    setWriteState((prevState) => ({
      ...prevState,
      content: text,
    }));
  }, [text]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > 1000) {
      setText(text);
    } else {
      setText(newText);
    }
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [text]);

  return (
    <Container>
      <Input
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        minHeight={minHeight}
      ></Input>
      <TypingLimit textLenght={text.length}></TypingLimit>
    </Container>
  );
};

const TypingLimit = ({ textLenght }: { textLenght: number }) => {
  return (
    <Column alignItems="flex-end" gap={5}>
      <Typo.b3 color={Palette.Main}>{textLenght} / 1000자</Typo.b3>
      <Column alignItems="flex-end">
        <Typo.s1 color={Palette.Gray4}>
          3개의 답변이 등록되거나 3일이 지난 후,
        </Typo.s1>
        <Typo.s1 color={Palette.Gray4}>자동으로 쥬시글에 등록됩니다·</Typo.s1>
      </Column>
    </Column>
  );
};

export default WriteInputBox;

const Container = styled(Column)`
  width: 100%;
  gap: 11px;
`;
const Input = styled.textarea<{ minHeight: number }>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight}px;
  height: textareaHeight;

  display: flex;
  flex-direction: column;
  jusitfy-contents: flex-start;
  align-items: flex-start;

  padding: 20px;

  border-radius: 12px;
  border: 1px solid ${Palette.Gray4};
  background: ${Palette.White};

  font-family: PretendardMedium;
  font-size: 14px;
  line-height: 150%;

  &:focus {
    border: 1.5px solid ${Palette.Main};
    outline: none;
  }

  resize: none;
  overflow-y: hidden;
`;
