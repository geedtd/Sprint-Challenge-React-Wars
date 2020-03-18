import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: black;
    color: yellow;
    border: 3px solid yellow;
    border-radius: 8px;
    padding: 3%;
    margin: 4%;
`;

const CharCard = props => {
    return (
        <Card>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Born:</strong> {props.birth}</p>
            <p><strong>Height:</strong> {props.height/100} Meters / {(props.height/30.5).toFixed(1)} Feet {((props.height/30.5).toFixed(1)%1)}inches</p>
            <p><strong>Weight:</strong> {props.weight} Kilograms / {(props.weight*2.2).toFixed(1)} Pounds </p>
        </Card>
    );
}

export default CharCard;