import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import theme from '../src/theme';
import { AppProps } from 'next/app';



// Definindo os estilos globais diretamente aqui
const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden; /* Oculta a rolagem horizontal */
    margin: 0; /* Remove margens padrão */
    padding: 0; /* Remove preenchimentos padrão */
    font-family: 'Rouge Script', sans-serif; /* Define uma fonte padrão */
  }
`;

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <React.Fragment>
            <Head>
                <title>{"Ana's Touch"}</title>
                <link rel="icon" href="/images" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle />
                    <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
};
