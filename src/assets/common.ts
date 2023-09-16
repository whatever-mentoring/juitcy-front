import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';

export const EntireContainer = styled.div`
  padding: 25px 30px;
`;

export const Row = styled.div<{
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;
export const Column = styled.div<{
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}>`
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
  borderRadius?: number;
}>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : 'fit-content')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 5)}px;
  padding: ${({ padding }) => (padding ? padding : 0)};
  background: ${Palette.White};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;
