import React from 'react'
import Buttons from './buttons/Buttons'
import CheckBoxComp from './checkBox/CheckBoxComp'
import StyledButton from './styled-button/StyledButton'
import TextFieldComp from './text-field/TextFieldComp'

const MaterialUIComponents = () => {
    return (
        <>
            <StyledButton />
            <TextFieldComp /> 
            <CheckBoxComp />
            <Buttons />
        </>
    )
}

export default MaterialUIComponents
