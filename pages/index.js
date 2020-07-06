import React, { Component } from 'react';
import fetch from 'node-fetch';
import Header from '../components/Header';
import DrinkList from '../components/DrinkList';
import Filters from '../components/Filters';

class Index extends Component {
  render() {
    return (
      <div> 
        <Header />
        <Filters />
        <DrinkList drinks={this.props.drinks}/>
      </div>
    )
  }
}

export async function getStaticProps() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.airtable.com/v0/app53cV9D5L6e38bR/Drinks?api_key=${apiKey}`);
  const json = await res.json()

  return {
    props: {
      drinks: json.records,
    },
  }
}

export default Index;


