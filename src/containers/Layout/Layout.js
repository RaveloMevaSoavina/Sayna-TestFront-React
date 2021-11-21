import React from 'react'
import SideBar from './SideBar/SideBar';
import styled from 'styled-components'

function Layout({children}) {
    return (
        <Container>
            <SideBar/>
            <Content>{children}</Content>
        </Container>
    )
}

export default Layout


const Container = styled.div`
    display : flex;
    background-color : rgb(247,248,252);
`
const Content = styled.div`
    padding : 20px;
`