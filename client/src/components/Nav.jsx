import React from "react";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavContainer = styled.div`
    width: 100%;
    background-color: #8d7070;
    box-shadow: 0px 6px 12px;
`;

const NavBar = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
const QuickLinks = styled.button`
    font-weight: 600;
    color: #ede1e1;
    border: none;
    background: none;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    /*     &:hover {
        transform: scale(1.15);
    } */
    height: 31px;
    cursor: pointer;
    background-color: #ede1e1;
    color: #8d7070;
    border-radius: 5px;
    border: none;
    box-shadow: #2c2c2c 1px 1px 2px;
    transition: all 0.8s;
`;

function Nav() {
    const navigate = useNavigate();

    const home = async () => {
        navigate("/home");
    };

    return (
        <NavContainer>
            <NavBar className="custom-container">
                <LogoContainer>
                    <Logo src={logo} alt="" onClick={home} />
                </LogoContainer>
                <RightContainer>
                    <Link to="/home">
                        <QuickLinks>Home</QuickLinks>
                    </Link>
                    <Link to="/home">
                        <QuickLinks>About me</QuickLinks>
                    </Link>
                    <Link to="/home">
                        <QuickLinks>Contact</QuickLinks>
                    </Link>
                    <SearchContainer>
                        <SearchBar />
                    </SearchContainer>
                    <ButtonContainer>
                        <Link to="/dogs/createdog">
                            <Button>Create New Breed</Button>
                        </Link>
                    </ButtonContainer>
                </RightContainer>
            </NavBar>
        </NavContainer>
    );
}

export default Nav;
