import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface propsType {
  id: string | null;
  name: string;
  selected: boolean;
  onClick: (id: string | null) => void;
}
interface containerProps {
  selected: boolean;
}

const Category = ({ id, name, selected, onClick }: propsType) => {
  return (
    <Container selected={selected} onClick={() => onClick(id)}>
      <Typo.b3>{name}</Typo.b3>
    </Container>
  );
};

export default Category;

const Container = styled.div<containerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 3px 10px;

  border-radius: 30px;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `
        border : 1.5px solid  ${Palette.Main};
        background: ${Palette.Main15};
        color : ${Palette.Main};
    `
      : `
        border : 0.75px solid ${Palette.Gray3};
        background: ${Palette.White};
        color : ${Palette.Gray3};
    `};
`;
