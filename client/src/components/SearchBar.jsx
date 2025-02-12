import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    &:hover {
        transform: scale(1.15);
    }
    background-color: #ede1e1;
    color: #8d7070;
    border-radius: 5px;
    margin-left: 5px;
    border: none;
    box-shadow: #2c2c2c 1px 1px 2px;
    transition: all 0.8s;
`;

const Input = styled.input`
    border: none;
    border-radius: 5px;
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
                    width="16.676514"
                    height="16.663910"
                    viewBox="0 0 16.6765 16.6639"
                    fill="none"
                >
                    <defs />
                    <path
                        id="Vector"
                        d="M16.44 15.25L13.35 12.19C14.55 10.69 15.13 8.79 14.97 6.88C14.81 4.97 13.93 3.19 12.5 1.91C11.07 0.63 9.21 -0.05 7.29 0C5.37 0.05 3.55 0.84 2.19 2.19C0.84 3.55 0.05 5.37 0 7.29C-0.05 9.21 0.63 11.07 1.91 12.5C3.19 13.93 4.97 14.81 6.88 14.97C8.79 15.13 10.69 14.55 12.19 13.35L15.25 16.41C15.33 16.49 15.42 16.55 15.53 16.59C15.63 16.64 15.74 16.66 15.85 16.66C15.96 16.66 16.06 16.64 16.17 16.59C16.27 16.55 16.36 16.49 16.44 16.41C16.59 16.26 16.67 16.05 16.67 15.83C16.67 15.62 16.59 15.41 16.44 15.25ZM7.51 13.35C6.36 13.35 5.23 13 4.27 12.36C3.31 11.72 2.56 10.81 2.12 9.74C1.68 8.68 1.57 7.51 1.79 6.37C2.02 5.24 2.57 4.2 3.39 3.39C4.2 2.57 5.24 2.02 6.37 1.79C7.51 1.57 8.68 1.68 9.74 2.12C10.81 2.56 11.72 3.31 12.36 4.27C13 5.23 13.35 6.36 13.35 7.51C13.35 9.06 12.73 10.54 11.64 11.64C10.54 12.73 9.06 13.35 7.51 13.35Z"
                        fill="#667479"
                        fill-opacity="1.000000"
                        fill-rule="nonzero"
                    />
                </svg>
            </Button>
        </SearchContainer>
    );
}

export default SearchBar;
