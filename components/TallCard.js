import React, { Component } from 'react';

class TallCard extends Component {
  render() {
    const drink = this.props.drink;
    const drinkImageName = drink.fields["img-path"];
    const drinkName = drink.fields["Cocktail Name"];
    const drinkIngredients = drink.fields["ingredients-cms"]
  return (
    <div className="card">
      <img src={`/${drinkImageName}.png`} height="194" width="210" className=""></img>
      <div className="card-wrapper">
        <h3>{drinkName}</h3>
        <h4>Ingredients</h4>
        <p>{drinkIngredients}</p>
        <h4>Preparation</h4>
        <ol>
          <li>Pour vodka and lime juice into a mug; add ice cubes and ginger beer.</li>
          <li>Stir to combine.</li>
          <li>Drop a lime wedge into the mug for garnish.</li>
        </ol>
      </div>
    <style jsx>{`
      .card {
        display: flex;
        margin: 12px 12px 12px 0px;
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .card-wrapper {
        background-color: #ffffff;
        height: 250px;
        width: 170px;
        margin: 0;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        padding: 16px 20px;
      }
      h3 {
        font-family: 'Advent Pro', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #222222;
        margin: 0;
        padding: 0px 0px 0px 0px;
      }
      h4 {
        font-family: 'Oxygen', sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #222222;
        margin: 8px 0px 6px 0px;
      }
      p, li {
        font-family: 'Oxygen', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: #222222;
        margin: 0;
      }
      li {
        padding: 0px 0px 6px 0px;
      }

    ol {
        margin: 0;
        padding: 6px 20px;
      }
    `}</style>
    </div>
  )
  }
}

export default TallCard;