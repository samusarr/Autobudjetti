import React from 'react';
import styled from '@emotion/styled';
// import { Link } from 'react-scroll';
import { Link } from 'gatsby';
import { Card, StyledButton } from './shared';
import { Row, Col} from 'antd';
import { theme } from '../styles';

// let ScrollLink = Scroll.Link;
// let scroller = Scroll.scroller;

const Landing = () => {

  // const scrollToElement = () => {
  //   console.log('perkele?')
  //   scroller.scrollTo('info', {
  //     duration: 500,
  //     smooth: true,
  //     containerId: 'info'
  //   })
  // }


  

  return(
    <Landerbg>
    <Container>
      <Row justify='center'>
        <Col xs={24} sm={22} md={18} lg={16} xl={14} xxl={10}>
          <Heading>Autobudjetti.fi</Heading>
          <Subheading>Apunasi fiksun auton valinnassa</Subheading>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={24} sm={22} md={18} lg={16} xl={14} xxl={10}>
          <DescBox>
            <Desc>
            Auton ostaminen on usein iso taloudellinen satsaus. Vaikka auto itsessään ei olisi kallis, voi sen ylläpito olla todella kallista. Autobudjetin avulla pystyt helposti vertailemaan ja laskemaan parhaan vaihtoehdon juuri sinulle.
            </Desc> <br></br>
            <Link to='/#info'><LandButton>Lue lisää</LandButton></Link>
            <Link to='/laskuri'><LandButton>Laskuriin</LandButton></Link>
          </DescBox>
        </Col>
      </Row>
      <Row justify='center' align='top'>
        <Ad xs={24} sm={22} md={18} lg={16} xl={14} xxl={10}>
          <Card>Mainos</Card>
        </Ad>
      </Row>
    </Container>
    </Landerbg>
  )
}

export default Landing

const Landerbg = styled.div`
  background-image: url('/images/car-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Container = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 80px;
  min-height: 95vh;
  width: 70%;
  z-index: 90;
  overflow: hidden;
  font-family: "Darkergrotesk";
  font-weight: normal;
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    width: 90%;
    padding-top: 50px;
  }
`
const Heading = styled.h1`
  margin-top: 25px;
  font-size: 50px;
  line-height: 60px;
  font-weight: 900;
  color: ${theme.colors.white};
  text-shadow: 2px 2px 5px ${theme.colors.black};
  @media only screen and (min-width: ${theme.breakpoints.s}) {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    line-height: 35px;
    margin-top: 15px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    line-height: 35px;
    margin-top: 15px;
    margin-bottom: 0px;
  }
`
const Subheading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.white};
  text-shadow: 2px 2px 5px ${theme.colors.black};
  @media only screen and (min-width: ${theme.breakpoints.xs}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
  }
`

const DescBox = styled(Card)`
  text-align: center;
  margin-top: 25px;
`
const Desc = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 22px;
  margin: 0;
  font-family: "Darkergrotesk";
  font-weight: 600;
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    padding: 0px;
  }
`

const Ad = styled(Col)`
  margin-top: 15px;
`

const LandButton = styled(StyledButton)`
@media only screen and (max-width: ${theme.breakpoints.xs}) {
  margin-top: 10px;
  width: 75%;
}
`