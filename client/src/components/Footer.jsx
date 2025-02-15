import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const FooterContainer = styled.div`
    width: 100%;
    background-color: #8d7070;
    box-shadow: 0px 6px 12px;
`;

const FooterContent = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
`;

const Button = styled.button`
    /*     &:hover {
        transform: scale(1.15);
    } */
    cursor: pointer;
    background-color: #ede1e1;
    color: #8d7070;
    border-radius: 5px;
    margin-left: 5px;
    border: none;
    box-shadow: #2c2c2c 1px 1px 2px;
    transition: all 0.8s;
`;

function Footer() {
    const navigate = useNavigate();

    const home = async () => {
        navigate("/home");
    };

    return (
        <FooterContainer>
            <FooterContent className="custom-container">
                <LogoContainer>
                    <Logo src={logo} alt="" onClick={home} />
                    <h3>By Lien Sanchez</h3>
                </LogoContainer>
                <div>
                    <p>Linkedin</p>
                    <p>Portfolio</p>
                </div>
                <PagesContainer>
                    <h3>Pages</h3>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link to="/">
                        <Button>About</Button>
                    </Link>
                    <Link to="/">
                        <Button>Contact</Button>
                    </Link>
                </PagesContainer>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;
