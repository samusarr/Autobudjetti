import React from 'react';
import { Tooltip, Row, Col } from 'antd';
import { InfoIcon } from '../icons'
import { theme } from '../../styles'
import styled from '@emotion/styled';

const InfoPopper = (props) => {
  
  const informationball = 
      <Tooltip title={props.tooltip} color='#436A8D'>
        <Col>
          <span><InfoIcon color={theme.colors.white}/></span>
        </Col>
      </Tooltip>;

  return (
      
        <Row gutter={[8, 0]}>
          <Col>
            <Label>{props.label}</Label>
          </Col>
          {informationball}
        </Row>
      

  )
}

export default InfoPopper;


const Label = styled.p`
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    margin-left: 0px;
    font-weight: 300;
    font-size: 14px;
  }
`