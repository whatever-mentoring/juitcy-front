import { Column, EntireContainer } from 'assets/common';
import CategoryBar from 'components/Category/CategoryBar';
import { Header } from 'components/common/Header';
import WriteConfirmBar from 'components/common/WriteConfirmBar';
import WriteInputBox from 'components/common/WriteInputBox';
import { useState } from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const WriteQuestion = () => {
  return (
    <Column>
      <Header borderBottom={false} btn={'back'}>
        질문하기
      </Header>
      <EntireContainer>
        <Column gap={18} alignItems="flex-start">
          <Typo.s2>제목(최대 100자)</Typo.s2>
          <Title />
          <CtgWrapper>
            <Typo.s2>카테고리</Typo.s2>
            <CategoryBar.ctgs ctgAll={false} />
          </CtgWrapper>
          <Typo.s2>내용</Typo.s2>
          <WriteInputBox
            minHeight={430}
            placeholder="익명의 시니어님에게 고민을 털어 놓아보세요."
          />
        </Column>
      </EntireContainer>
      <WriteConfirmBar />
    </Column>
  );
};

const Title = () => {
  const [text, setText] = useState<string>('');
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.length > 100) {
      setText(text);
    } else {
      setText(newText);
    }
  };

  return (
    <TitleInput
      value={text}
      onChange={handleTextChange}
      placeholder="제목을 입력하세요"
    ></TitleInput>
  );
};

export default WriteQuestion;

const CtgWrapper = styled(CategoryBar.container)`
  padding: 0px;
`;
const TitleInput = styled.input`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${Palette.Gray4};
  border-radius: 4px;

  font-family: PretendardBold;
  font-size: 19px;
  line-height: 150%;

  &:focus {
    border: 1px solid ${Palette.Main};
    outline: none;
  }
  ::placeholder {
    color: #${Palette.Gray4};
  }
`;
