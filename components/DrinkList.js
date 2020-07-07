import React, { Component } from 'react';

class DrinkList extends Component {
  render() {
    const drinks = this.props.drinks;
    console.log(drinks);
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
    const drinkName = drink.fields["img-path"];
  return (
    <div className="card">
      <img src={`/${drinkName}.png`} height="233" width="280" className="card-child card-image"></img>
      <div className="card-child card-bar">
        <h1>{drinkName}</h1>
      </div>
    <style jsx>{`
      .card {
        height: 233px;
        width: 280px;
        margin: 20px 5px;
        padding: 0px;
        position: relative;
        border-radius: 4px;
      }

      .card-child {
        position: absolute;
        left: 0;
      }
      .card-image {
        top: 0;
        object-fit: cover;
        border-radius: 4px;
      }

      .card-bar {
        top: 175px;
        width: 100%;
      }

      h1 {
        color: #E4E4E0;
        font-family: 'Julius Sans One', sans-serif;
        background-color: rgba(34, 14, 5, .4);
        font-size: 24px;
        padding: 16px;
        margin: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}</style>
    </div>
  )
  }
}

export default DrinkList;