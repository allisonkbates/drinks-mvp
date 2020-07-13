import React, { Component } from 'react';
import fetch from 'node-fetch';
import Head from 'next/head'
import Header from '../components/Header';
import DrinkList from '../components/DrinkList';
import Filters from '../components/Filters';
import Banner from '../components/Banner';

class HomeV1 extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      filter: 'All'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      filter: event.target.value
    });
  }*/

  render() {
    return (
      <div> 
        <Head>
          <title>Home V1</title>
          <link rel="icon" type="image/svg" sizes="32x32" href="/cocktail.svg"></link>
        </Head>
        <Banner />
        <Header />
       {/* <Filters handleClick={this.handleClick}/>
        <DrinkList drinks={this.props.drinks} filter={this.state.filter}/> */}
      </div>
    )
  }
}

/*export async function getStaticProps() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?maxRecords=100&view=Grid%20view&api_key=${apiKey}`);
  const json = await res.json()

  return {
    props: {
      drinks: json.records,
    },
  }
}*/

export default HomeV1;