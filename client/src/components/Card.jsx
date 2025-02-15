import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivContainer = styled.div`
    background-color: #8d7070;
    color: #ede1e1;
    border-radius: 10px;
    padding: 10px;
    box-shadow: #2c2c2c 6px 6px 18px;
    max-width: 300px;
/*     width: 100%; */
`;

const Image = styled.img`
    margin: 0 auto;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    box-shadow: #2c2c2c 2px 2px 8px;
`;

const DogName = styled.h2`
    margin: 0;
    color: #ede1e1;
    text-decoration: none;
    text-transform: capitalize;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space between;
    gap: 5px;
`;

const DogP = styled.p`
    margin: 0;
    color: #ede1e1;
`;

const WeightTitle = styled.h3`
    margin: 0;
    color: #ede1e1;
`;

function Card(dog) {
    return (
        <>
            <DivContainer key={dog.id}>
                <Link to={`/dogs/${dog.id}`}>
                    <Image
                        src={`https://cdn2.thedogapi.com/images/${dog.img}.jpg`}
                        alt=""
                    />
                </Link>

                <CardText>
                    <Link
                        to={`/dogs/${dog.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <DogName>{dog.name}</DogName>
                    </Link>
                    <DogP>{dog.temperament}</DogP>
                    <WeightTitle>Weight:</WeightTitle>
                    <DogP>
                        From {dog.weight[0]} to {dog.weight[1]} kilos
                    </DogP>
                </CardText>
            </DivContainer>
        </>
    );
}

export default Card;
