import { Column, EntireContainer, StyledLink } from 'assets/common';
import CategoryBar from 'components/Category/CategoryBar';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import CardSlider, { MakeCardSlider } from '../../components/common/CardSlider';
import { Palette } from 'styles/Palette';
import CallToAction from 'components/Main/CallToAction';
import { useEffect, useState } from 'react';
import { postAllApi } from 'network/postsApi';
import { postType } from 'types';

const Main = () => {
  const [posts, setPosts] = useState<postType[]>();
  useEffect(() => {
    postAllApi({ setPosts });
  }, []);

  return (
    <Column>
      <Header borderBottom={false} btn={'search'}>
        쥬시글
      </Header>
      <EntireContainer homebar={true} padding="25px 0px">
        <Column color={Palette.Gray05}>
          <div className="padding-container">
            <CategoryBar ctgAll={true} />
          </div>
          <CallToAction />
        </Column>
        <div className="padding-container">
          <Column gap={26}>
            {/* card slider들을 렌더한다. */}
            {posts?.map((cards, index) => {
              const cardComponents = MakeCardSlider(cards);
              return (
                <StyledLink key={index} to={`/post/${cards.postIdx}`}>
                  <CardSlider key={`slider_${index}`} cards={cardComponents} />
                </StyledLink>
              );
            })}
          </Column>
        </div>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Main;
