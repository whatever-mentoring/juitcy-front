import scrapOff from 'assets/icons/scrap-off.svg';
import scrapOnCyni from 'assets/icons/scrap-on-cyni.svg';
import scrapOnJuni from 'assets/icons/scrap-on-juni.svg';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUser } from 'recoil/recoil';
import styled from 'styled-components';

const ScrapButton = () => {
  const [isScraped, setIsScraped] = useState<boolean>(false);
  const user = useRecoilValue(currentUser);

  const handleClick = () => {
    setIsScraped(!isScraped);
  };

  return (
    <ScrapImg
      src={isScraped ? (user === 'Cyni' ? scrapOnCyni : scrapOnJuni) : scrapOff}
      onClick={handleClick}
    ></ScrapImg>
  );
};

export default ScrapButton;

const ScrapImg = styled.img`
  cursor: pointer;
`;
