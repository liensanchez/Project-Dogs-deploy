import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../redux/action/action";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    color: #ede1e1;
    background-color: #8d7070;
    border-radius: 5px;
    padding: 5px;
    border: none;
    margin: 0 5px;
    transition: all 0.3s;

    &.active {
        background-color: #ede1e1;
        color: #8d7070;
        font-weight: bold;
    }

    &.disabled {
        background-color: #ccc;
        color: #666;
        cursor: not-allowed;
    }
`;

const ButtonContainer = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #8d7070;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 6px 6px 18px;
`;

function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.currentPage);
    const dogs = useSelector((state) => state.dogs);
    const totalPages = Math.ceil(dogs.length / 9);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(changePage(page));
            window.scrollTo({ top: 0, left: 0 });
        }
    };

    return (
        <ButtonContainer>
            <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
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
                        stroke="#ede1e1"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </svg>
            </Button>

            {currentPage > 1 && (
                <Button onClick={() => handlePageChange(currentPage - 1)}>
                    {currentPage - 1}
                </Button>
            )}

            <Button className="active">{currentPage}</Button>

            {currentPage < totalPages && (
                <Button onClick={() => handlePageChange(currentPage + 1)}>
                    {currentPage + 1}
                </Button>
            )}

            <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg
                    width="12.000000"
                    height="10.007812"
                    viewBox="0 0 12 10.0078"
                    fill="none"
                >
                    <defs />
                    <path
                        id="Vector"
                        d="M1 5L11 5M7 9L11 5L7 1"
                        stroke="#ede1e1"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                </svg>
            </Button>
        </ButtonContainer>
    );
}

export default Pagination;
