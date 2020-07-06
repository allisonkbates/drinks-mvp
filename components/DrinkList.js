import React, { Component } from 'react';

class DrinkList extends Component {
  render() {
    const drinks = this.props.drinks;
    const showDrinks = drinks.map((drink) => {
      return <DrinkCard key={drink.id} drink={drink}/>
    });
    return (
      <div>
        {showDrinks}
      <style jsx>{`
        padding: 0px 55px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #E4E4E0;
      `}</style>
      </div>
    )
  }
}

class DrinkCard extends Component {
  render() {
    const drink = this.props.drink;
    const drinkName = drink.fields["Cocktail Name"];
  return (
    <div className="card">
      <img src={`/${drinkName}.png`} height="233" width="280"></img>
      <h1>{drinkName}</h1>
    <style jsx>{`
      .card {
        height: 233px;
        width: 280px;
        background-image: url('#');
        background-position: center center;
        background-size: cover;
        margin: 20px 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px;
      }
      h1 {
        color: #E4E4E0;
        font-family: 'Julius Sans One', sans-serif;
        background-color: rgba(34, 14, 5, .4);
        font-size: 24px;
        padding: 16px;
        width: 100%;
        margin: 0;
      }
    `}</style>
    </div>
  )
  }
}

export default DrinkList;