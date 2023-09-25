import { Row } from 'assets/common';
import styled from 'styled-components';
import back from 'assets/icons/back.svg';
import searchButton from 'assets/icons/search-button.svg';
import { Palette } from 'styles/Palette';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

interface searchBarProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({
  text,
  setText,
  setIsSearched,
  setSearchText,
}: searchBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const toggleSearched = () => {
    setIsSearched(true);
    setSearchText(text);

    // 검색어와 함께 URL에 쿼리 매개변수를 추가
    navigate(`/search?query=${encodeURIComponent(text)}`);
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

  useEffect(() => {
    const query = searchParams.get('query');
    if (searchParams.has('query')) {
      toggleSearched();
    }
    if (query !== null && query !== text) {
      setSearchText(query);
    }
  }, []);

  // 컴포넌트가 처음 로드될 때, URL의 쿼리 매개변수에서 검색어를 읽어옴
  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setText(decodeURIComponent(query));
    }
  }, [location.search]);

  return (
    <Container>
      <img src={back} onClick={() => navigate('/')} />
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyUp={handleKeyPress}
          placeholder="검색어를 입력하세요."
        ></SearchInput>
        <SearchIcon src={searchButton} onClick={toggleSearched} />
      </SearchInputWrapper>
    </Container>
  );
};

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
