import scrapOff from 'assets/icons/scrap-off.svg';
import scrapOnCyni from 'assets/icons/scrap-on-cyni.svg';
import scrapOnJuni from 'assets/icons/scrap-on-juni.svg';
import { scrapApi } from 'network/apis/postsApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { postType } from 'types';

const ScrapButton = ({
  postIdx,
  post,
}: {
  postIdx: number;
  post: postType;
}) => {
  const [isScraped, setIsScraped] = useState<boolean>();
  const userType = window.localStorage.getItem('userType');

  const handleClick = async () => {
    if (postIdx !== undefined) {
      let res = await scrapApi({ postIdx });
      if (res.isSuccess) {
        setIsScraped(!isScraped);
      }
    }
  };
  useEffect(() => {
    if (post.isScrap) {
      setIsScraped(post.isScrap);
    }
  }, []);

  return (
    <ScrapImg
      src={
        isScraped ? (userType === 'Cyni' ? scrapOnCyni : scrapOnJuni) : scrapOff
      }
      onClick={handleClick}
    ></ScrapImg>
  );
};

export default ScrapButton;

const ScrapImg = styled.img`
  cursor: pointer;
`;
