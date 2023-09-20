import { Row } from 'assets/common';
import styled from 'styled-components';
import back from 'assets/icons/back.svg';
import searchButton from 'assets/icons/search-button.svg';
import { Palette } from 'styles/Palette';
import { useNavigate } from 'react-router';

interface searchBarProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
  text,
  setText,
  setIsSearched,
  setSearchText,
}: searchBarProps) => {
  const navigate = useNavigate();
  const toggleSearched = () => {
    setIsSearched(true);
    setSearchText(text);
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleSearched();
    }
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <Container>
      <img src={back} onClick={() => navigate(-1)} />
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyUp={handleKeyPress}
        ></SearchInput>
        <SearchIcon src={searchButton} onClick={toggleSearched} />
      </SearchInputWrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled(Row)`
  width: 100%;
  padding: 14px 30px;
  gap: 16px;
`;
const SearchInputWrapper = styled(Row)`
  width: 100%;
  height: 32px;

  justify-content: space-between;
  align-items: center;

  padding: 4px 16px;
  border-radius: 20px;
  background: ${Palette.Gray1};
`;
const SearchInput = styled.input`
  width: 85%;
  border: none;
  background: ${Palette.Gray1};

  font-family: PretendardMedium;
  font-size: 14px;
  line-height: 150%;

  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
