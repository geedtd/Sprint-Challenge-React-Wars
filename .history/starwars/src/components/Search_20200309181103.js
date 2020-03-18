import React, { useState, state }from 'react';
import ReactDOM, { render } from 'react-dom'
import styled from 'styled-components';


const Search = styled.div`
h3 {
    color : yellow;
    margin-top: 10px;
    margin-bottom:10px;

}
input {
    width: 95%;
    margin: 10px;
    padding: 18px 10px;
    border-radius: 4px;
    border: 1px solid yellow;
    box-shadow: 1px 0.5px white;
    font-size: 15px;
}
button {
    padding: 12px 10px;
    width: 30%;
    border-radius: 4px;
    background-color: black;
    color: yellow;
    cursor: pointer;
    font-size: 18px;
}
`;


// const SearchComponent = () => {
//     state = {
//         searchValue: '',
//     };
    // handleOnChange = event => {
    //     this.setState({ searchValue: event.target.value});
    // };
    // handleSearch = () => {
    // ''
    // }
        return (
        <Search>
            <h3>Search for Characters Below</h3>
            <input 
                name="text" 
                type= "text" 
                placeholder="Type Here" 
                //onChange={event => this.handleOnChange(event)}
                //value={this.state.searchValue}    
                />
            <button onClick={this.handleSearch}>Search</button>
        </Search>
         
        );
    
}

export default SearchComponent;