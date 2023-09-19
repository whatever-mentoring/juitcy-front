import styled from 'styled-components';
import Category from './Category';
import { useState } from 'react';
import { Column, Row } from 'assets/common';
import Typo from 'styles/Typo';

const CategoryBar = () => {
  return (
    <Container>
      <Typo.s1>카테고리</Typo.s1>
      <Categories></Categories>
    </Container>
  );
};

export const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: '전체', selected: true },
    { id: 2, name: '일상', selected: false },
    { id: 3, name: '인간관계', selected: false },
    { id: 4, name: '사회생활', selected: false },
    { id: 5, name: '기타', selected: false },
  ]);
  const handleClick = (id: number) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
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

export default CategoryBar;

export const Container = styled(Column)`
  width: 100%;
  gap: 6px;
  padding: 10px 30px;
`;
const CtgWrapper = styled(Row)`
  flex-wrap: wrap;
  gap: 8px;
`;
