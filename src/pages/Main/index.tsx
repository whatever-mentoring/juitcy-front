import { Column, EntireContainer, StyledLink } from 'assets/common';
import CategoryBar from 'components/Category/CategoryBar';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import CardSlider, { MakeCardSlider } from '../../components/common/CardSlider';
import { Palette } from 'styles/Palette';
import CallToAction from 'components/Main/CallToAction';
import { useEffect, useState } from 'react';
import { getPostsApi } from 'network/postsApi';
import { postType } from 'types';
import { useInView } from 'react-intersection-observer';

const Main = () => {
  const [posts, setPosts] = useState<postType[]>();
  const [seletedCtg, setSelectedCtg] = useState<string>('');
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);

  const fetchNewPosts = async () => {
    try {
      let newPosts = await getPostsApi({ page, seletedCtg });
      if (posts !== undefined) {
        setPosts([...posts, ...newPosts]);
      }
      setPage(page + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const page = 0;
        let newPosts = await getPostsApi({ page, seletedCtg });
        setPosts(newPosts);
        setPage(page + 1);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [seletedCtg]);

  useEffect(() => {
    if (inView) fetchNewPosts();
  }, [inView]);

  return (
    <Column>
      <Header borderBottom={false} btn={'search'}>
        쥬시글
      </Header>
      <EntireContainer homebar={true} padding="25px 0px">
        <Column color={Palette.Gray05}>
          <div className="padding-container">
            <CategoryBar ctgAll={true} setSelectedCtg={setSelectedCtg} />
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
                  <CardSlider
                    key={`slider_${index}`}
                    cards={cardComponents}
                    ref={index === posts.length - 1 ? ref : undefined}
                  />
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
