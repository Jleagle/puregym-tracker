import Head from 'next/head'
import '../scss/bootstrap.scss'
import '../scss/main.scss'
import {Container} from 'react-bootstrap'
import React from 'react'

export default function MyApp({Component, pageProps}) {
  return <>
    <Head>
      <title>PureGym Tracker</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="apple-mobile-web-app-title" content="PureGym Tracker"/>
      <meta name="application-name" content="PureGym Tracker"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <Container>
      <h1 className="mt-4">Gym Tracker</h1>
      <Component {...pageProps} />
    </Container>
  </>
};
