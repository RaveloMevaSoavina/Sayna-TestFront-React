import React from 'react'
import styled from 'styled-components'

function Button({label}) {
    return (
        <ButtonAdd>{label}</ButtonAdd>
    )
}

export default Button

const ButtonAdd = styled.button`
border : none;
color : rgb(113,122,142);
backgrounf-color : rgb(241,243,249);
font-weight : 600;
margin : 0 10px;
font-size: 0.8rem;
height : 100%;
padding : 10px 15px;
border-radius : 3px;
`