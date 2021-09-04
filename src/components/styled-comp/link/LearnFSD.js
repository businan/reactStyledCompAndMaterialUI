import styled, { css } from "styled-components";

export default styled.a`
    font-size: 1.5rem;
    transition: ease 0.25s all;
    text-decoration: none;
    color: #7e3b8e;
    ${(props) =>
        props.secondary &&
        css`
            color: white;
            background-color: #7e3b8e;
            border-radius: 8px;
            padding: 8px;
        `}
    :hover {
        font-size: 1.7rem;
        opacity: 0.8;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
