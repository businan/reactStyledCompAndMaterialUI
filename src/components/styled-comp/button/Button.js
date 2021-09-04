import styled from "styled-components";

export default styled.button`
    border: none;
    margin: 2px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    background-color: ${props => (props.primary ? "#4caf50" : "#008CBA")}
`;