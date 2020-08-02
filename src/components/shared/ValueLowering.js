import React, { useState} from 'react';
import { Select, Collapse, Row, Col } from 'antd';
import styled from '@emotion/styled';

const { Option } = Select;
const { Panel } = Collapse;

const ValueCalculator = (props) => {

  const [years, setYears] = useState(1);

  const changeYears = (value) => {
    let newYear = parseInt(value);
    setYears(newYear);
  }

  const valueDrop = (props.carprice - (props.carprice * Math.pow(0.88, years))).toFixed(0);
  const avgDrop = (valueDrop / (years * 12)).toFixed(2);

  return(
      <Collapse
        bordered={false}
      >
        <Panel header='Arvonalenema'>
        <Valinta 
          placeholder="1 vuodessa"
          onChange={changeYears}
          >
          <Option value='1'>1 vuodessa</Option>
          <Option value='2'>2 vuodessa</Option>
          <Option value='3'>3 vuodessa</Option>
          <Option value='4'>4 vuodessa</Option>
          <Option value='5'>5 vuodessa</Option>
          <Option value='10'>10 vuodessa</Option>
        </Valinta>
        <Row gutter={[8,0]}>
          <Col>
            <Value>Yhteensä:</Value>
          </Col>
          <Col>
            <Amount>{valueDrop}€</Amount>
          </Col>
        </Row>
        <Row gutter={[8,0]}>
          <Col>
            <Value>Keskimäärin:</Value>
          </Col>
          <Col>
            <Amount>{avgDrop}€/kk</Amount>
          </Col>
        </Row>
        <Row>
          <Info>
            Arvonalenema on laskettu keskimäärin tippuvan 12% vuodessa. Arvonalenema kuitenkin vaihtelee autojen välillä, ja riippuu myös ajetuista kilometreistä, tehdyistä huolloista.
          </Info>
        </Row>
        </Panel>
      </Collapse>
  )
}

export default ValueCalculator;


const Valinta = styled(Select)`
  width: 100%;
  margin-bottom: 15px;
`

const Value = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
`

const Amount = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
`

const Info = styled.p`

`