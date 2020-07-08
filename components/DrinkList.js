import React, { Component } from 'react';
import DrinkCard from '../components/DrinkCard';

class DrinkList extends Component {
  render() {
    const drinks = this.props.drinks;
    const filter = this.props.filter;
    const showDrinks = drinks.map((drink) => {
      const alcoholTag = drink.fields["alcohol-tag"]; 
      if (filter === "All") {
        return <DrinkCard  key={drink.id} drink={drink} />
      } else if (filter === alcoholTag) {
        return <DrinkCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
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


export default DrinkList;