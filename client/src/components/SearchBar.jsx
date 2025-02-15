import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #ede1e1;
    border-radius: 5px;
    overflow: hidden;
`;

const Button = styled.button`
    /* &:hover {
        transform: scale(1.15);
    } */
    color: #8d7070;
    padding: 5px;
    border-radius: 5px;
    border: none;
    transition: all 0.8s;
    cursor: pointer;
    background-color: #ede1e1;
`;

const Input = styled.input`
    border: none;
    padding: 5px;
    background-color: #ede1e1;
    &:focus {
        outline: none;
    }
`;

function SearchBar() {
    const navigate = useNavigate();

    const [searchBreed, setSearchBreed] = useState("");

    const handleChange = (e) => {
        setSearchBreed(e.target.value);
    };

    const search = async () => {
        navigate(`/dogs?name=${searchBreed}`);
    };

    return (
        <SearchContainer>
            <Input
                type="search"
                onChange={handleChange}
                name="search"
                placeholder="Ingresa una Raza"
            />
            <Button onClick={search}>
                <svg
                    fill="#000000"
                    width="18px"
                    height="18px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>
                    </g>
                </svg>
            </Button>
        </SearchContainer>
    );
}

export default SearchBar;
