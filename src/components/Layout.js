import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import 'antd/dist/antd.css';

import SEO from './SEO/seo';
import Navbar from './Navbar';
import Footer from './Footer';
import { theme, reset } from '../styles';

// // eslint-disable-next-line global-require
// require("smooth-scroll")('Link[href*="#"]')

const globalStyle = css`
  ${reset}
  @font-face {
    font-family: "Darkergrotesk";
    src: url("fonts/DarkerGrotesque-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }  
  @font-face {
    font-family: "Darkergrotesk";
    src: url("fonts/DarkerGrotesque-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Darkergrotesk";
    src: url("fonts/DarkerGrotesque-SemiBold.woff") format("woff");
    font-weight: Semi Bold;
    font-style: normal;
  }  
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
    height: 100%;
    margin: 0 auto;
    font-family: "Darkergrotesk";
    font-weight: normal;
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const Layout = ({ children, isRootPage = false }) => (
    <ThemeProvider theme={theme}>
      <SEO />
      <Global styles={globalStyle} />
      <Navbar isRootPage={isRootPage} />
        {children}
      <Footer />
    </ThemeProvider>
      
);

export default Layout

Layout.propTypes = {
  isRootPage: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
Layout.defaultProps = {
  isRootPage: false,
};
