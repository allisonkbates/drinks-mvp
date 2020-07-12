import React, { Component } from 'react';
import ListHeading from '../components/ListHeading';
import ShortCard from '../components/ShortCard';

class GinList extends Component {
  render() {
    const drinks = this.props.drinks;
    console.log(drinks);
    const showGinDrinks = drinks.map((drink) => {
      if (drink.fields["alcohol-tag"] === "Gin") {
        return <ShortCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
     });
    return (
      <div>
        <ListHeading name="Gin Cocktails" />
        <div className="drink-list">
          {showGinDrinks}
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

export default GinList;