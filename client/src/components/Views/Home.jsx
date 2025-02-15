import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";
import Pagination from "../Pagination";
import Filters from "../Filters";
import styled from "styled-components";

const DivContainer = styled.div`
    display: flex;
    gap: 45px;
    padding: 45px 0;
`;

const DogsDispaly = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
`;

function Home() {
    const dog = useSelector((state) => state.dogsWithFilters);

    const currentPage = useSelector((state) => state.currentPage);

    return (
        <>
            <DivContainer className="custom-container">
                <Filters />
                <DogsDispaly>
                    <Cards
                        dog={dog.slice((currentPage - 1) * 8, currentPage * 8)}
                    />
                    <Pagination />
                </DogsDispaly>
            </DivContainer>
        </>
    );
}

export default Home;
