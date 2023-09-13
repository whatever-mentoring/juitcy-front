import styled from "styled-components";
import Category from "./Category";
import { useState } from "react";

const CategoryBar = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: "전체", selected: false },
        { id: 2, name: "일상", selected: false },
        { id: 3, name: "인간관계", selected: false },
        { id: 4, name: "사회생활", selected: false },
        { id: 5, name: "기타", selected: false },
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
        <Container>
            {categories.map((category) => (
                <Category
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    selected={category.selected}
                    onClick={handleClick}
                />
            ))}
        </Container>
    );
};

export default CategoryBar;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;
