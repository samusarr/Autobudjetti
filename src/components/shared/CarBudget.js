// import styled from '@emotion/styled';
import React from "react";
import { Card, ValueLowering } from './index';
import { theme } from '../../styles';
import { Row, Col, Tooltip } from 'antd';
import { CloseSquareOutlined, InfoCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled';




const CarBudget = (props) => {

  // gasoline monthly cost (benzine is '1' and diesel is '2')
  let gasprice = null;
  let fuel = '';
  if (props.budget.usepower === "1") {
    gasprice = props.budget.petrol;
    fuel = 'Bensa';
  } else {
    gasprice = props.budget.diesel;
    fuel = 'Diesel';
  }
  const monthlyGas = (((props.budget.kilometres / 12 / 100) * (gasprice * props.budget.consumption)).toFixed(2)).toString();
  const taxAndInsurance = (((props.budget.insurance + props.budget.taxes) / 365).toFixed(2)).toString();
  const yearlyCost = (((monthlyGas * 12) + (taxAndInsurance * 365) + (props.budget.parking * 12) + props.budget.inspection + props.budget.carservice + props.budget.tires).toFixed(2)).toString();
  
  const monthlyCost = ((yearlyCost / 12).toFixed(2)).toString();
  const dailyCost = ((yearlyCost / 365).toFixed(2)).toString();

  const verokikkailu = 'Veron ja vakuutuksen päivittäinen summa on relevantti, jos haluaa säästää laittamalla auton pois liikenteestä kun sitä ei käytä. Liikenteestä poisto maksaa 5€. Jos vakuutus ja vero tekee yhteensä esimerkiksi 2€ päivässä, tulee halvemmaksi ottaa auto pois liikenteestä jos sitä ei käytä seuraavaan vähintään kolmeen päivään.';

  return (
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
    <CarContainer>
      <Row justify='space-between'>
        <Col span={16}>
          <DetailHeader>{props.budget.make} {props.budget.model}</DetailHeader>
          <DetailHeader>{fuel}, {(props.budget.kilometres/52).toFixed(0)}km/viikko</DetailHeader>
        </Col>
        <Col span={1} offset={5}>
          <Remove onClick={() => {props.onDelete(props.id)}}><RemoveIcon /></Remove>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}><ResultHeader>Kokonaiskustannukset</ResultHeader></Col>
      </Row>
      <Row justify='center' align='middle'>
        <Col xs={24}>
          <Result>{yearlyCost} €/vuosi</Result>
        </Col>
        <Col xs={16}>
          <Result><DetailSpan>({monthlyCost} €/kk, {dailyCost} €/pvä)</DetailSpan></Result>
        </Col>
      </Row>
      <hr></hr>
      <Row justify='space-between'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DetailHeader>Polttoainekustannukset:</DetailHeader>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Detail>{monthlyGas}€/kk</Detail>
        </Col>
      </Row>
      <Row justify='space-between' align='bottom'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DetailHeader>Vakuutus + vero:</DetailHeader>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Detail>{taxAndInsurance}€/päivä
          <Tooltip placement="topRight" title={verokikkailu} color={theme.colors.primary}>                              
              <span><InfoIcon /></span> 
          </Tooltip>
          </Detail>
        </Col>
      </Row>
      {/* <h3>Polttoainekustannukset: {monthlyGas}€/kk</h3>
      <h3>Vakuutus + vero: {taxAndInsurance}€ /päivä</h3>
      <h2>Kokonaiskustannukset: <br></br> {yearlyCost} €/vuosi {monthlyCost} €/kk  {dailyCost} €/päivä</h2> */}
      <hr></hr>
      <ValueLowering carprice={props.budget.price} />
    </CarContainer>
      </Col>
  )
}

export default CarBudget;

const CarContainer = styled(Card)`
  margin-top: 0px;
`

const ResultHeader = styled.p`
  text-align: center;
  @media only screen and (min-width: ${theme.breakpoints.m}) {
    font-size: 30px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.m}) {
    font-size: 25px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    font-size: 20px;
    margin-bottom: 0px;
  }
  
`

const Result = styled.p`
text-align: center; 
font-weight: 900;
@media only screen and (min-width: ${theme.breakpoints.m}) {
  font-size: 22px;
  margin-bottom: 0px;
}
@media only screen and (max-width: ${theme.breakpoints.m}) {
    font-size: 20px;
    margin-bottom: 0px;
  
  }
`

const DetailHeader = styled.p`
  text-align: left;
  @media only screen and (min-width: ${theme.breakpoints.m}) {
    font-size: 20px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.m}) {
    font-size: 16px;
    margin-bottom: 0px;
  }


`

const Detail = styled.p`

text-align: right; 
font-weight: 900;
@media only screen and (min-width: ${theme.breakpoints.m}) {
  font-size: 20px;
  margin-bottom: 0px;
}
@media only screen and (max-width: ${theme.breakpoints.m}) {
    font-size: 16px;
    margin-bottom: 0px;
  
  }

`

const DetailSpan = styled.span`
@media only screen and (min-width: ${theme.breakpoints.l}) {
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 500;

}
@media only screen and (max-width: ${theme.breakpoints.s}) {
  font-size: 15px;
  margin-bottom: 0px;
  font-weight: 500;

}
`

const Remove = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const RemoveIcon = styled(CloseSquareOutlined)`
  color: red;
  font-size: 30px;
`

const InfoIcon = styled(InfoCircleOutlined)`
  color: ${theme.colors.primary};
  font-size: 15px;
`