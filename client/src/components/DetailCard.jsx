import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivInter = styled.div`
    width: 100%;
    background-color: #e4dcdc;
    color: #ede1e1;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: #000000 6px 6px 18px;
`;
const DataContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 35px;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 50%;
    height: auto;
    aspect-ratio: 1/1;
    border-radius: 10px;
    box-shadow: #000000 2px 2px 8px;
`;

const RightContainer = styled.div`
    width: 100%;
    max-width: 50%;
`;

const DogBreed = styled.div`
    display: flex;
    gap: 5px;
    text-transform: capitalize;
    color: #000000;
    margin: 0px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;

const InfoTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #e4dcdc;
    }
`;

const TableHeader = styled.th`
    background-color: #8d7070;
    color: white;
    padding: 10px;
    text-align: left;
`;

const TableCell = styled.td`
    padding: 10px;
    color: #000000;
    border-bottom: 1px solid #ccc;
`;

const GoHome = styled.button`
    margin: 0 auto;
    cursor: pointer;
    background-color: #8d7070;
    color: #f8f8f8;
    border-radius: 5px;
    padding: 15px;
    border: none;
    box-shadow: #2c2c2c 1px 1px 2px;
    transition: all 0.8s;
    font-weight: 600;
`;

function DetailCard(showDog) {
    const dog = showDog;

    return (
        <>
            <DivInter>
                <DataContainer key={dog.id}>
                    <Image
                        src={`https://cdn2.thedogapi.com/images/${dog.img}.jpg`}
                        alt=""
                    />

                    <RightContainer>
                        <DogBreed>
                            <h1>Breed:</h1>
                            <h1>{dog.name}</h1>
                        </DogBreed>
                        <InfoContainer>
                            <InfoTable>
                                <tbody>
                                    <TableRow>
                                        <TableHeader>Temperaments:</TableHeader>
                                        <TableCell>
                                            {" "}
                                            {dog.temperament
                                                ?.split(", ")
                                                .map((temp, index) => (
                                                    <p key={index}>{temp}</p>
                                                ))}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeader>Weight:</TableHeader>
                                        <TableCell>
                                            From {dog.weight[0]} to{" "}
                                            {dog.weight[1]} kilos
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeader>Height:</TableHeader>
                                        <TableCell>
                                            From {dog.height} cm
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeader>Life Span:</TableHeader>
                                        <TableCell>
                                            Between {dog.lifeSpan} years of life
                                        </TableCell>
                                    </TableRow>
                                </tbody>
                            </InfoTable>
                            <Link
                                to={`/home`}
                                style={{ textDecoration: "none" }}
                            >
                                <GoHome>
                                    <svg
                                        width="12.000244"
                                        height="10.007812"
                                        viewBox="0 0 12.0002 10.0078"
                                        fill="none"
                                    >
                                        <defs />
                                        <path
                                            id="Vector"
                                            d="M11 5L1 5M5 9L1 5L5 1"
                                            stroke="#f8f8f8"
                                            strokeOpacity="1.000000"
                                            strokeWidth="2.000000"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                     Go Back
                                </GoHome>
                            </Link>
                        </InfoContainer>
                    </RightContainer>
                </DataContainer>
            </DivInter>
        </>
    );
}

export default DetailCard;
