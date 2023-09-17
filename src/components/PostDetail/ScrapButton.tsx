import scrapOff from 'assets/icons/scrap-off.svg';
import scrapOnCyni from 'assets/icons/scrap-on-cyni.svg';
import scrapOnJuni from 'assets/icons/scrap-on-juni.svg';
import { useState } from 'react';
import styled from 'styled-components';

const ScrapButton = () => {
  const [isScraped, setIsScraped] = useState<boolean>(false);
  let userType = 1;

  const handleClick = () => {
    setIsScraped(!isScraped);
  };

  return (
    <ScrapImg
      src={isScraped ? (userType === 1 ? scrapOnCyni : scrapOnJuni) : scrapOff}
      onClick={handleClick}
    ></ScrapImg>
  );
};

export default ScrapButton;

const ScrapImg = styled.img`
  cursor: pointer;
`;
