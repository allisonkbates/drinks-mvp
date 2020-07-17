import React, { Component } from 'react';
import ShortCard from './ShortCard';
import Filters from './Filters';

class FilterList extends Component {
  render() {
    const drinks = this.props.drinks;
    const filter = this.props.filter;
    const showFilteredDrinks = drinks.map((drink) => {
      const tags = drink.fields.tags;
      if (filter === "All") {
        return <ShortCard  key={drink.id} drink={drink} />
      } else if (tags && tags.includes(filter)) {
        console.log({tags, filter});
        return <ShortCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
    });
    return (
      <div>
        <div className="heading">
          <h2>Filter By:</h2>
          <Filters handleClick={this.props.handleClick}/>
        </div>
        <div className="drink-list">
          {showFilteredDrinks}
        </div>
      <style jsx>{`
        .heading {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 20px;
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

export default FilterList;