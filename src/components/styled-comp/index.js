import React from "react";
import Button from "./button/Button";
import Wrapper from "./wrapper/Wrapper";
import HeaderText from "./header/HeaderText";
import LearnFSD from "./link/LearnFSD";

const StyledComponents = () => {
    return (
        <Wrapper bgColor="wheat">
            <HeaderText>Clarusway</HeaderText>
            <HeaderText headerColor="purple">Styled Components</HeaderText>


            <LearnFSD href="https://clarusway.com" target="_blank" secondary>Learn Full Stack Development</LearnFSD>

            <Button primary>Primary</Button>
            <Button>Default</Button>
        </Wrapper>
    );
};

export default StyledComponents;
