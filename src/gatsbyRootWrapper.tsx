/*
 * Add global component to the project
 * This code is imported in gatsby-browser.js and gatsby-srr.js, just to keep things DRY
 */
import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
);
