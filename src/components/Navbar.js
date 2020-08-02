import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles';
import { Link } from 'gatsby';

const Navbar = () => (
  <HeadContainer id='nav'>
    <NavItem to='/'><Header>autobudjetti.fi</Header></NavItem>
    {/* navbar stuff here
    <NavItem to="/laskuri">Go to laskuri</NavItem> <br /> */}
  </HeadContainer>
)

export default Navbar;

const HeadContainer = styled.div`
  background-color: ${theme.colors.primary};
  position: relative;
  width: 100%;
  height: 50px;
  top: 0;
  z-index: 100;
`;

const Header = styled.p`
    font-size: 30px;
    color: ${theme.colors.white};
    margin-left: 10px;
`

const NavItem = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`

