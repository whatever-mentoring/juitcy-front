import styled from 'styled-components';
import Category from './Category';
import { useState } from 'react';
import { Column, Row } from 'assets/common';
import Typo from 'styles/Typo';

const CategoryBar = ({ ctgAll }: { ctgAll: boolean }) => {
  return (
    <Container>
      <Title></Title>
      <Categories ctgAll={ctgAll}></Categories>
    </Container>
  );
};

const Categories = ({ ctgAll }: { ctgAll: boolean }) => {
  const ctgArr = ctgAll
    ? [
        { id: 1, name: '전체', selected: true },
        { id: 2, name: '일상', selected: false },
        { id: 3, name: '인간관계', selected: false },
        { id: 4, name: '사회생활', selected: false },
        { id: 5, name: '기타', selected: false },
      ]
    : [
        { id: 2, name: '일상', selected: false },
        { id: 3, name: '인간관계', selected: false },
        { id: 4, name: '사회생활', selected: false },
        { id: 5, name: '기타', selected: false },
      ];

  const [categories, setCategories] = useState(ctgArr);
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
