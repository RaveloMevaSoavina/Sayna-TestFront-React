import React , { useState} from 'react'
import styled from 'styled-components'
import {menuItems, footMenu }from '../../../settings/constants'
import LogoURI from '../../../assets/images/logo.png'

function SideBar() {
    const [menu , ] = useState(menuItems);
    console.log(footMenu);
    return (
        <Container>
            <Logo>
                <img alt="logo" src={LogoURI} width="48px" style={{marginRight : "20px"}}/>
                Klamma
            </Logo>
            <MenuContainer>
                <div>
            {menu.map(({id, label , icon})=>{
                return(
                    <Item key={id}>{icon}{label}</Item>
                )
            })}
            </div>
            <div>
            {footMenu.map(({id, label , icon})=>{
                return(
                    <Item key={id}>{label}</Item>
                )
            })}
            </div>
            </MenuContainer>
            
        </Container>
    )
}

export default SideBar


const Container = styled.div`
    width : 400px;
    height : 95vh;
    padding : 20px 20px;
    background-color : #FFF;
    display : flex;
    flex-direction: column;
    color : #999;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`

const Item = styled.div`
    padding : 10px 20px;
    width : 100%:
    font-size : 1.4rem;
    cursor : pointer;
`

const Logo = styled.div`
    margin : 0 auto;
    display : flex;
    align-items : center;
    color : #313874;
    font-size : 1.5rem;
    font-weight : 600;
`

const MenuContainer = styled.div`
    display : flex;
    flex : 1;
    flex-direction : column;
    justify-content : space-between;
    margin-top : 20px;
`