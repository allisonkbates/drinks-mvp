import React, { Component } from 'react';

class DrinkCard extends Component {
  render() {
    const drink = this.props.drink;
    const drinkName = drink.fields["img-path"];
    const drinkIngredients = drink.fields["ingredients-cms"]
  return (
    <div className="card">
      <img src={`/${drinkName}.png`} height="233" width="280" className="card-child card-image"></img>
      <div className="card-child card-bar">
        <h1>{drinkName}</h1>
        <p>{drinkIngredients}</p>
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
        height: 60px;
        background-color: rgba(34, 14, 5, .4);
        width: 100%;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: .4s;
      }

      .card-bar:hover {
        top: 137px;
        height: 96px;
        background-color: rgba(34, 14, 5, .4);
        width: 100%;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: .3s;
      }

      .card-bar p {
        display: none;
      }

      h1 {
        color: #E4E4E0;
        font-family: 'Julius Sans One', sans-serif;
        font-size: 24px;
        padding-left: 16px;
        padding-top: 16px;
        margin: 0;
      }
      .card-bar:hover p {
        display: block;
        color: #E4E4E0;
        font-family: 'Julius Sans One', sans-serif;
        font-size: 14px;
        padding-left: 16px;
        padding-top: 8px;
        padding-right: 8px;
        margin: 0;
      }
    `}</style>
    </div>
  )
  }
}

export default DrinkCard;
