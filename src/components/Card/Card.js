import React from 'react'
import styled from 'styled-components'
import image from "../../assets/images/Dribbble shot - 1.png"
import imageActive from "../../assets/images/fondActive.png"

function Card({sold , number, cvc}) {
    return (
        <CardContainer cvc={cvc}>
            <Sold color={cvc !== "04 / 24" ? "black" : "white"}>{sold} USD</Sold>
            <Number color={cvc !== "04 / 24" ? "black" : "white"}>{number}</Number>
            <CVC color={cvc !== "04 / 24" ? "black" : "white"}>{cvc}</CVC>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    width : 295px;
    height : 150px;
    padding : 20px;
    box-shadow : ${props => props.cvc !== "04 / 24" ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"};
    border-radius : 10px;
    margin-right : 20px;
    background : url(${props => props.cvc !== "04 / 24" ? image : imageActive});
    background-repeat : no-repeat;
    background-position : center/center;
    background-size : contain;
    cursor : pointer;
    
`
const Sold = styled.h3`
    font-weight : 500;
    font-size : 1.2rem;
    margin-top : 60px;
    color : ${props => props.color}
`

const Number = styled.div`
    font-size : 1.1rem;
    color : ${props => props.color}
`

const CVC = styled.div`
color : ${props => props.color}
`