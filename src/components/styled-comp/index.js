import React from "react";
import Button from "./button/Button";
import Wrapper from "./wrapper/Wrapper";
import HeaderText from "./header/HeaderText";
import LearnFSD from "./link/LearnFSD";
import "./link/linkStyle.css";
import ExtendedLearnFSD from "./extended-link/ExtendedLearnFSD";

const StyledComponents = () => {
    const [isPrimary, setIsPrimary] = React.useState(false);
    return (
        <Wrapper bgColor="wheat">
            <HeaderText>Clarusway</HeaderText>
            <HeaderText headerColor="purple">Styled Components</HeaderText>

            <LearnFSD
                // className="red-bg"
                href="https://clarusway.com"
                target="_blank"
                secondary
            >
                Learn Full Stack Development
            </LearnFSD>

            <ExtendedLearnFSD secondary>
                We're Learning Styled Components
            </ExtendedLearnFSD>

            <Button
                primary={isPrimary}
                onClick={() => setIsPrimary((prev) => !prev)}
            >
                {isPrimary ? "Primary" : "Default"}
            </Button>
            <Button primary={!isPrimary}>
                {!isPrimary ? "Primary" : "Default"}
            </Button>
        </Wrapper>
    );
};

export default StyledComponents;
