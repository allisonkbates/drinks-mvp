import React, { Component } from 'react';
import TallCard from '../components/TallCard';

class RecList extends Component {
  render() {
    const drinks = this.props.drinks;
    const recDrinks = drinks.map((drink) => {
      const tags = drink.fields.tags;
      if (tags && tags.includes("daniel-recommends")) {
        return <TallCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
    });
    const drinkListStyle = {
      padding: "0px 80px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };
    const isNull = (currentValue) => currentValue === null;
    let showDrinks;       
    if (recDrinks.every(isNull)) {
      showDrinks = <h2 style={{color: "red"}}>Oops! We don't have any drinks. Add one here.</h2>
    } else {
      showDrinks = <div className="drink-list" style={drinkListStyle}>{recDrinks}</div>;
    }
    return (
      <div className="container">
        <h2>Our Recommendations</h2>
        <div className="drinkContainer">
        {showDrinks}
        </div>
        <style jsx>{`
        .container {
          margin: 30px 0px;
        }
        .drinkContainer {
          display: flex;
          flex-grow: 1;
        }

        h2 {
          font-family: 'Advent Pro', sans-serif;
          font-size: 32px;
          font-weight: 400;
          margin: 16px 0px 16px 80px;
        }
      `}</style>
      </div>
    )
  }
}

export default RecList;