import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles';
import { Row, Col } from 'antd';

const Footer = () => (
  <FooterContainer>
    <Row justify='center'>
      <Col><FooterItem>Powered by Sarrit</FooterItem></Col>
    </Row>
    
  </FooterContainer>
)

export default Footer;

const FooterContainer = styled.div`
  background-color: ${theme.colors.primary};
  width: 100%;
  min-height: 100px;
  bottom: 0;
`;

const FooterItem = styled.p`
  margin: 50px 15px 15px 15px;
  font-size: 15px;
`