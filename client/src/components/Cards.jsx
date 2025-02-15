import React from "react";
import Card from "./Card";
import styled from "styled-components";

const DivDogs = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
`;

function Cards(prop) {
    const { dog } = prop;

    const showDog = dog.map((dog) => (
        <Card
            id={dog.id}
            key={dog.id}
            name={dog.name}
            img={dog.image}
            temperament={dog.temperament}
            weight={dog.weight}
        />
    ));
    return <DivDogs>{showDog}</DivDogs>;
}

export default Cards;
