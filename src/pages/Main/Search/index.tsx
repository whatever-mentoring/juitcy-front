import { Column, EntireContainer } from 'assets/common';
import SearchBar from 'components/Search/SearchBar';
import SearchResult from 'components/Search/SearchResult';
import styled from 'styled-components';

const Search = () => {
  return (
    <Column>
      <SearchBar></SearchBar>
      <EntireContainer>
        <SearchResult text={'취업'}></SearchResult>
      </EntireContainer>
    </Column>
  );
};

export default Search;

const Container = styled.div``;
