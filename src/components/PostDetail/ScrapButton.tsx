import scrapOff from 'assets/icons/scrap-off.svg';
import scrapOnCyni from 'assets/icons/scrap-on-cyni.svg';
import scrapOnJuni from 'assets/icons/scrap-on-juni.svg';
import { useState } from 'react';
import closure from 'store/closure';
import styled from 'styled-components';

const ScrapButton = () => {
  const userType = closure.getUserType();
  const [isScraped, setIsScraped] = useState<boolean>(false);

  const handleClick = () => {
    setIsScraped(!isScraped);
  };

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
