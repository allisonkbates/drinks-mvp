import React, { Component } from 'react';
import TallCard from '../components/TallCard';

class RecList extends Component {
  render() {
    const drinks = this.props.drinks;
    const showRecDrinks = drinks.map((drink) => {
      const tags = drink.fields.tags;
      if (tags && tags.includes("daniel-recommends")) {
        return <TallCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
     });

    return (
      <div className="container">
        <h2>Our Recommendations</h2>
        <div className="drink-list">
       {/*{showRecDrinks.length
        ? {showRecDrinks}
        : <h2>Oops! We don't have any drinks. Add one here.</h2>
      }*/}
        {showRecDrinks}  
        </div>
        <style jsx>{`
        .container {
          margin: 30px 0px;
        }
        h2 {
          font-family: 'Advent Pro', sans-serif;
          font-size: 32px;
          font-weight: 400;
          margin: 16px 0px 16px 80px;
        }
        .drink-list {
          padding: 0px 80px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
      </div>
    )
  }
}

export default RecList;