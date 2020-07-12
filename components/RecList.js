import React, { Component } from 'react';
import ListHeading from '../components/ListHeading';
import TallCard from '../components/TallCard';

class RecList extends Component {
  render() {
    const drinks = this.props.drinks;
    console.log(drinks);
    const showRecDrinks = drinks.map((drink) => {
      if (drink.fields.Recommended) {
        return <TallCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
     });
    return (
      <div>
        <ListHeading name="Our Recommendations" />
        <div className="drink-list">
          {showRecDrinks}
        </div>
        <style jsx>{`
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