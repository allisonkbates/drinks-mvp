import React, { Component } from 'react';
import fetch from 'node-fetch';

class Index extends Component {
  render() {
    const drinks = this.props.drinks;
    const showDrinks = drinks.map((drink) => {
      return <DrinkCard key={drink.id} drink={drink}/>
    });
    return (
      <div>
        {showDrinks}
        <p>Hello</p>
      </div>
    )
  }
}

class DrinkCard extends Component {
  render() {
    const drink = this.props.drink;
  return (
    <div>
      <h1>{drink.fields["Cocktail Name"]}</h1>
      <p>{drink.fields["Specified Ingredients"]}</p>
      <p>{drink.fields["Preparation"]}</p>
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
