import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailCard from "../DetailCard";

const DivContainer = styled.div`
    margin: 45px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Detail() {
    let { id } = useParams();

    const [dog, setDog] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const dogsResponse = await axios.get(`/doglist/${id}`);
                setDog(dogsResponse.data);
                console.log("our dog:", dogsResponse.data); // ✅ Logs after data is fetched
            } catch (error) {
                console.error("Error fetching dog:", error);
            }
        }

        getData();
    }, [id]);

    console.log("our dog" + dog);

    const showDog = dog.map((dog) => (
        <DetailCard
            id={dog.id}
            key={dog.id}
            name={dog.name}
            img={dog.image}
            temperament={dog.temperament}
            weight={dog.weight}
            height={dog.height}
            lifeSpan={dog.lifeSpan}
        />
    ));
    return <DivContainer className="custom-container">{showDog}</DivContainer>;
}

export default Detail;
