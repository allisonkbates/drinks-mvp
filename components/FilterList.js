import React, { Component } from 'react';
import ListHeading from './ListHeading';
import ShortCard from './ShortCard';
import Filters from './Filters';

class FilterList extends Component {
  render() {
    const drinks = this.props.drinks;
    const filter = this.props.filter;
    const showFilteredDrinks = drinks.map((drink) => {
      if (filter === "All") {
        return <ShortCard  key={drink.id} drink={drink} />
      } else if (tags !== null && tags.includes(filter)) {
        return <ShortCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
    });
    return (
      <div>
        <div className="heading">
          <ListHeading name="Filter By:" />
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