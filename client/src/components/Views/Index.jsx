import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

const DivContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivInter = styled.div`
    background-color: #8d7070;
    color: #ede1e1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    width: 300px;
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.6);
    
    @media(max-width:1200px) {
        width: 70%;  
        padding: 20px;
    }
`;

const Image = styled.img`
    width: 25%;
`;

const Button = styled.button`
    &:hover {
        transform: scale(1.15);
    }
    background-color: #ede1e1;
    color: #8d7070;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.8s;
    box-shadow: #2c2c2c 1px 1px 2px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

function Index() {
    let year = new Date().getFullYear();

    return (
        <DivContainer>
            <DivInter>
                <Image src={logo} alt="" />
                <h1>The Dog Api!</h1>
                <Link to="/home">
                    <Button>Start!</Button>
                </Link>
                <h3>By Lien Sanchez</h3>
                <ButtonContainer>
                    <a href="https://github.com/liensanchez" target="blank">
                        <Button> Github</Button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/liensanchez/"
                        target="blank"
                    >
                        <Button>LinkedIn</Button>
                    </a>
                </ButtonContainer>
                <p>{year} FullStack @SoyHenry</p>
            </DivInter>
        </DivContainer>
    );
}

export default Index;
