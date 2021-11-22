import React from 'react'
import Header from '../../components/HeaderTitle/HeaderTitle'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Notif from '../../assets/images/notification.png'
import styled from 'styled-components'
import donut from '../../assets/images/donut.png'

const cards = [
    {sold : 1242.42, number : "5495 7381 3759 2321", cvc:"04 / 24"},
    {sold : 249.00, number : "5346 0956 1284 4735", cvc:"05 / 25"},
    {sold : 249.00, number : "9756 1584 8365 4123", cvc:"01 / 25"},
]

const activitiesToday = [
    {type : "Sent" , to : "Martin Mitchel", sold : "-3,004.52"},
    {type : "Sent" , to : "Jane Klamberberg", sold : "-1,023.19"},
    {type : "Conversion" , to : "EURO to USD", sold : "+1,456.00"}
]

const activitiesYesterday = [
    {type : "Café & Restaurants" , to : "Starbucks", sold : "-5.99"},
    {type : "Opened" , to : "Deposit to your USD Balance", sold : "-4,000.00"},
]

const stats = [
    {label : "Credit limit", division : "1500 / 2000 USD"},
    {label : "Online limit", division : "1324 / 1500 USD"},
]

const intentPayement = [
    {type : "Awaiting", number : "8", status : true},
    {type : "In progress", number : "5", status : false},
    {type : "Competed", number : "12", status : true},
    {type : "Canceled", number : "4", status : true},
]

const MoneyInMoneyOut = [
    {type : "Money In", sold : "+10.343"},
    {type : "Money Out", sold : "-4360.00"},
]

function Overview() {
    return (
        <React.Fragment>
            <Header title={"Your Cards"} buttonadd={"New cards +"} sourceNotif={Notif}/>
            <CardsContainer>
                {cards.map(({sold , number, cvc}) => <Card key={number} sold={sold} number={number} cvc={cvc}/>)}
            </CardsContainer>
            <ContentContainer>
                <Left>
                    <Stats>
                        {stats.map((stat)=> 
                            <StatsItem>
                                <img src={donut} alt="statsDonut" style={{marginRight : "20px"}}/>
                                <div>
                                    <StatsLabel>
                                        {stat.label}
                                    </StatsLabel> 
                                    <StatsDivident>{stat.division.split("/")[0]}</StatsDivident>
                                    <span>/{stat.division.split("/")[1]}</span>
                                </div>
                            </StatsItem>)}
                    </Stats>
                    <div style={{display : "flex" , justifyContent : "space-between", alignItems : "center"}}>
                        <SubTitle>Int. Payements</SubTitle>
                        <Last30>the last 30days</Last30>
                    </div>
                    <PayementContainer>
                        {intentPayement.map((intent)=> 
                            <PayementItem>
                                <NumberPayemetn>{intent.number}</NumberPayemetn>
                                <TypePayement>{intent.type}</TypePayement>
                            </PayementItem>)}
                    </PayementContainer>
                    <MoneyContainer>
                        {MoneyInMoneyOut.map((money) => 
                        <Money>
                            <MoneyType type={money.type}>{money.type}</MoneyType>
                            <MoneySold>{money.sold} <USD> USD </USD></MoneySold>
                        </Money>
                        )}
                    </MoneyContainer>
                </Left>
                <Right>
                    <HeaderActivities>
                    <SubTitle>Recent Activities</SubTitle>
                        <Button label={"View a reports"}/>
                    </HeaderActivities>

                    <Sub>Today</Sub>
                    {activitiesToday.map((activity)=> 
                        <TodayItem>
                            <TodayLeft>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <rect width="25" height="25" fill="white"/>
                            <path d="M4.05738 11.145L20.6495 7.21527L14.101 22.4952L11.9818 14.8662L11.9187 14.6389L11.7031 14.5431L4.05738 11.145Z" stroke="black"/>
                            <line x1="11.6805" y1="14.4084" x2="19.857" y2="7.61541" stroke="black"/>
                            </g>
                        </svg>
                        <div style={{marginLeft : "20px"}}>
                                <Name>{activity.to}</Name>
                                <Type>{activity.type}</Type>
                        </div>
                            </TodayLeft>
                            <TodayRight>
                                {activity.sold}
                                <USD> USD </USD>
                            </TodayRight>
                        </TodayItem>)}
                    <Sub>Yesterday</Sub>
                    {activitiesYesterday.map((activity)=> 
                        <TodayItem>
                            <TodayLeft>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                <rect width="25" height="25" fill="white"/>
                                <rect x="2.5" y="6.5" width="20" height="13" stroke="black"/>
                                <line x1="3" y1="10.5" x2="23" y2="10.5" stroke="black"/>
                                <line x1="4" y1="16.5" x2="11" y2="16.5" stroke="black"/>
                                </g>
                            </svg>
                            <div style={{marginLeft : "20px"}}>
                                <Name>{activity.to}</Name>
                                <Type>{activity.type}</Type>
                            </div>
                            </TodayLeft>
                            <TodayRight>
                                {activity.sold}
                                <USD> USD </USD>
                            </TodayRight> 
                        </TodayItem>)}
                </Right>
            </ContentContainer>
        </React.Fragment>
            
    )
}

export default Overview


const CardsContainer = styled.div`
    display : flex;
    margin : 20px 0;
`
const ContentContainer = styled.div`
    display : flex;
    padding : 20px 0;
`

const Right = styled.div`
    display : flex;
    flex-direction : column;
    flex:1;
    padding-left : 30px;
`

const HeaderActivities = styled.div`
    display : flex;
    justify-content : space-between;
`

const Money = styled.div`
    padding : 25px 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    flex : 1;
    margin : 0 10px;
    background-color : rgb(252,253,255);
`

const MoneyContainer = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top : 30px;
`

const PayementContainer = styled.div`
display : flex;
margin : 20px 0;
`

const PayementItem = styled.div`
    border-left : 0.5px solid #EEE;
    border-right : 0.5px solid #EEE;
    padding : 30px 25px;
    display : flex;
    flex-direction : column;
    align-items : center;
    background-color : rgb(252,253,255);
`

const Left = styled.div`
    display : flex;
    flex-direction : column;
    padding-right : 30px;
    border-right : 1px solid #EEE;
`

const Stats = styled.div`
    display : flex;
    flex : 1;
    padding : 20px 0 20px 0; 
    border-bottom : 0.9px solid #EEE9;
`

const StatsItem = styled.div`
    padding : 10px 0;
    display : flex;
    margin : 0 20px;
`

const StatsLabel = styled.div`
    color : #222;
    font-size : 1.2rem;
    font-weight : 600;
`

const StatsDivident = styled.span`
    color : #313874;
    font-weight : 600;
`

const SubTitle = styled.h3`
    font-size : 1.3rem;
    font-size : 500;
`

const Last30 = styled.span`
    color : #AAA;
    font-size : 0.9rem;
`

const NumberPayemetn =  styled.div`
    font-weight : 800;
    font-size : 1.5rem;
    margin-bottom : 10px;
`
const TypePayement = styled.div`
    color : #AAA;
`

const MoneyType = styled.div`
    color : ${props => props.type === "Money In" ? "green" : "red"};
`

const MoneySold = styled.div`
    font-size : 1.3rem;
    font-weight : 800;
    margin-top : 20px;
    color : #333;
`

const USD = styled.span`
font-size : 1.2rem;
font-weight : 200;
`

const Sub = styled.h4`
    color : #333;
    font-size : 0.9rem;
    margin : 40px 0;
`

const TodayItem = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin-bottom : 10px;
`
const TodayLeft = styled.div`
    display : flex;
    flex-direction : row;
`

const Name = styled.div`
    color : #444;
    font-weight : 500;
    font-size : 1.1rem;
`

const Type = styled.div`
    color : #BBB;
`

const TodayRight = styled.div`
    font-weight : 700;
    font-size : 1.1rem;
`