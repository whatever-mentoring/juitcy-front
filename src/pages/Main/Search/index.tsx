import { Column, EntireContainer } from 'assets/common';
import SearchBar from 'components/Search/SearchBar';
import SearchResult from 'components/Search/SearchResult';
import { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  return (
    <Column>
      <SearchBar
        text={text}
        setText={setText}
        setIsSearched={setIsSearched}
        setSearchText={setSearchText}
      ></SearchBar>
      <EntireContainer>
        {isSearched && <SearchResult text={searchText}></SearchResult>}
      </EntireContainer>
    </Column>
  );
};

export default Search;
