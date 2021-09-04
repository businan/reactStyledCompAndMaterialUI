import React from "react";
import Buttons from "./buttons/Buttons";
import CheckBoxComp from "./checkBox/CheckBoxComp";
import StyledButton from "./styled-button/StyledButton";
import TextFieldComp from "./text-field/TextFieldComp";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import TypographyComp from "./typography/TypographyComp";
import Cards from "./cards/Cards";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[400],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        h2: {
            fontSize: 38,
            marginBottom: 10,
        },
        subtitle1: {
            marginBottom: 10,
        },
    },
});

const MaterialUIComponents = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <TypographyComp />

                <Cards />

                <StyledButton />
                <TextFieldComp />
                <Buttons />
                <CheckBoxComp />
            </ThemeProvider>
        </>
    );
};

export default MaterialUIComponents;
