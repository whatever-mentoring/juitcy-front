import { Column, Row, StyledLink } from 'assets/common';
import CardSlider, { MakeCardSlider } from 'components/common/CardSlider';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { postType } from 'types';
import { searchApi } from 'network/postsApi';

const SearchResult = ({ text }: { text: string }) => {
  const [resultNum, setResultNum] = useState<number>();
  const [posts, setPosts] = useState<postType[] | null>(null);

  useEffect(() => {
    const search = async () => {
      try {
        let res = await searchApi({ text });
        setPosts(res);
        setResultNum(res.length);
      } catch (err) {
        console.log(err);
      }
    };
    search();
  }, [text]);

  return (
    <Column gap={30}>
      <Row>
        <Typo.b3>'{text}'</Typo.b3>
        <Typo.b4>에 대한 검색 결과</Typo.b4>
        <Typo.b3 color={Palette.Main}>&nbsp; {resultNum}</Typo.b3>
        <Typo.b4>개</Typo.b4>
      </Row>
      <ResultContainer>
        {/* card slider들을 렌더한다. */}
        {posts?.map((cards, index) => {
          const cardComponents = MakeCardSlider(cards);
          return (
            <StyledLink key={index} to={`/post/${cards.postIdx}`}>
              <CardSlider key={`slider_${index}`} cards={cardComponents} />
            </StyledLink>
          );
        })}
      </ResultContainer>
    </Column>
  );
};

export default SearchResult;

const ResultContainer = styled(Column)`
width:100%
justify-content:center;

  padding: 30px 0;
  gap: 40px;
`;
