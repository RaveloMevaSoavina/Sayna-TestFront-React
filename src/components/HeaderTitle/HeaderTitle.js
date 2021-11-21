import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

function HeaderTitle({title, buttonadd, sourceNotif}) {
    return (
        <HeaderContainer>
            <LeftContainer>
                <Header>{title}</Header>
                <Button label={buttonadd}/>
            </LeftContainer>
            <div>
                <Button label={<Image src={sourceNotif} alt="notif"/>}/>
            </div>
        </HeaderContainer>
    )
}

export default HeaderTitle


const Header = styled.h2`
    color : #313874;
    margin : 20px 0 20px 0;
    font-size : 1.3rem;
`

const HeaderContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`


const LeftContainer = styled.div`
    display : flex;
    align-items : center;
`

const Image = styled.img`
    width : 20px;
    height : 20px;
`