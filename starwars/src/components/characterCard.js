import React from 'react';

const CharCard = props => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Born: {props.birth}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
        </div>
    );
}

export default CharCard;