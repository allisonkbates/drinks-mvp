import React, { Component } from 'react';
import ListHeading from '../components/ListHeading';
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
        <ListHeading name="Our Recommendations" />
        <div className="drink-list">
          {showRecDrinks}
        </div>
        <style jsx>{`
        .container {
          margin: 30px 0px;
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