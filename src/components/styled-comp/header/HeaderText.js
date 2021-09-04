import styled from "styled-components";

export default styled.h1`
    color: ${props => props.headerColor ? props.headerColor : "#484848"};
    font-size: 2.5rem;
    margin: 1px;
`;