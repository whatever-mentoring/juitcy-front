import styled from 'styled-components';
import Category from './Category';
import { useState } from 'react';
import { Column, Row } from 'assets/common';
import Typo from 'styles/Typo';

const CategoryBar = ({
  ctgAll,
  setSelectedCtg,
}: {
  ctgAll: boolean;
  setSelectedCtg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Container>
      <Title></Title>
      <Categories ctgAll={ctgAll} setSelectedCtg={setSelectedCtg}></Categories>
    </Container>
  );
};

const Categories = ({
  ctgAll,
  setSelectedCtg,
}: {
  ctgAll: boolean;
  setSelectedCtg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const ctgArr = ctgAll
    ? [
        { id: '', name: '전체', selected: true },
        { id: 'DAILY', name: '일상', selected: false },
        { id: 'RELATIONSHIP', name: '인간관계', selected: false },
        { id: 'SOCIAL', name: '사회생활', selected: false },
        { id: 'ETC', name: '기타', selected: false },
      ]
    : [
        { id: 'DAILY', name: '일상', selected: false },
        { id: 'RELATIONSHIP', name: '인간관계', selected: false },
        { id: 'SOCIAL', name: '사회생활', selected: false },
        { id: 'ETC', name: '기타', selected: false },
      ];

  const [categories, setCategories] = useState(ctgArr);
  const handleClick = (id: string | null) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
        setSelectedCtg(id);
        return { ...category, selected: true };
      } else {
        return { ...category, selected: false };
      }
    });
    setCategories(updatedCategories);
  };
  return (
    <CtgWrapper gap={8}>
      {categories.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          name={category.name}
          selected={category.selected}
          onClick={handleClick}
        />
      ))}
    </CtgWrapper>
  );
};
const Container = styled(Column)`
  width: 100%;
  gap: 6px;
  padding: 10px 0;
`;
const Title = () => {
  return <Typo.s1>카테고리</Typo.s1>;
};

CategoryBar.container = Container;
CategoryBar.ctgs = Categories;
CategoryBar.text = Title;
export default CategoryBar;

const CtgWrapper = styled(Row)`
  flex-wrap: wrap;
  gap: 8px;
`;
