import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';

interface divProps {
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}
export const Row = styled.div<divProps>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;
export const Column = styled.div<divProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;

export const MyPageBoxContainer = styled.div<{
  height?: string;
  padding?: string;
}>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  border-radius: 5px;
  padding: ${({ padding }) => (padding ? padding : 0)};
  background: ${Palette.White};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;
