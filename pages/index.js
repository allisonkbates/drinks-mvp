import React, { Component } from 'react';
import fetch from 'node-fetch';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import RecList from '../components/RecList';
import GinList from '../components/GinList';

class Index extends Component {
  render() {
    return (
      <div> 
        <Head>
          <title>Drinks MVP</title>
          <link rel="icon" type="image/svg" sizes="32x32" href="/logo-color.svg"></link>
        </Head>
        <Nav />
        <Hero />
        <RecList drinks={this.props.drinks}/>
        <GinList drinks={this.props.drinks}/>
      </div>
    )
  }
}

export async function getStaticProps() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.airtable.com/v0/app53cV9D5L6e38bR/Drinks?view=V1-UI-View&api_key=${apiKey}`);
  const json = await res.json()

  return {
    props: {
      drinks: json.records,
    },
  }
}

export default Index;


