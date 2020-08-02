import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Card, StyledButton } from './shared';
import { Row, Col} from 'antd';
import { theme } from '../styles';

const Info = () => {

  let content = require('./shared/questionsandanswers.json')
  const questionandanswers = content.questions.map((item, index) => (
    <Col span={24} key={index}>
      <Question>{item.question}</Question>
      <Answer>{item.answer}</Answer>
    </Col>
  ))

 return (
  <Container  id='info'>
    <Row justify='center'>
        <Col xs={23} sm={22} md={18} lg={18} xl={18} xxl={18}>
      <Row justify='center'>
        <Col>
          <QandA>
            <Row align='top'>
              {questionandanswers}
            </Row>
          </QandA>
        </Col>
        </Row>
        <Row justify='center'>
        <Col>
          <Link to='/laskuri'><CalculatorButton>Laskuriin</CalculatorButton></Link>
        </Col>
        
      </Row>
      </Col>
    </Row>
    
   <YellowBeetle 
    src='images/yellow-beetle.png'
   />
   <BackgroundRectangle/>
 </Container>
 )
}

export default Info

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-top: 120px;
  overflow: hidden;
  @media only screen and (max-width: ${theme.breakpoints.l}) {
    padding-top: 25px;
  }
`
const BackgroundRectangle = styled.div`
  width: 1800px;
  height: 800px;
  background-color: ${theme.colors.lightblue};
  transform: rotate(-20deg);
  position: absolute;
  bottom: -500px;
  z-index: -2;
  @media only screen and (max-width: ${theme.breakpoints.l}) {
    transform: rotate(-30deg);
    bottom: -200px;
  }
  @media only screen and (max-width: ${theme.breakpoints.m}) {
    transform: rotate(-30deg);
    bottom: -300px;
  }
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    transform: rotate(-80deg);
    bottom: -300px;
    left: -400px;
    height: 1000px;
  }
`
const QandA = styled(Card)`
  min-height: 80vh;
  z-index: 100;
  opacity: 0.7;
  margin-bottom: 50px;
`
const YellowBeetle = styled.img`
  position: absolute;
  width: 500px;
  bottom: 50px;
  left: 1200px;
  opacity: 0.4;
  z-index: -1;
  @media only screen and (max-width: ${theme.breakpoints.l}) {
    bottom: 100px;
    left: 700px;
    width: 400px;
  }
  @media only screen and (max-width: ${theme.breakpoints.m}) {
    bottom: 100px;
    left: 600px;
    width: 400px;
  }
`
const Answer = styled.p`
  font-family: "Darkergrotesk";
  font-weight: 500;
  font-size: 22px;
  color: #133551;
`
const Question = styled.h2`
  font-family: "Darkergrotesk";
  font-weight: bold;
  font-size: 25px;
  color: #133551;
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    line-height: 30px;
  }

`

const CalculatorButton = styled(StyledButton)`
  margin-bottom: 50px;
  width: 220px;
  font-size: 20px;
  padding: 5px;
  letter-spacing: 3px;
  border-radius: 20px;
`