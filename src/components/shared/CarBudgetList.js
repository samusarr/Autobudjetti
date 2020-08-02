// import styled from '@emotion/styled';
import React from "react";
import CarBudget from "./CarBudget";

// import { theme } from '../../styles';
import { Row } from 'antd';

const CarBudgetList = (props) => {
  
  const budgets = props.budgets.map((item, index) => {
    return <CarBudget budget={item} key={index} id={index} onDelete={props.onDelete}/>
  })

  return (
    <Row gutter={[16,16]}>
      {budgets}
    </Row>
  )
}

export default CarBudgetList;