import React, { Component } from 'react';
import ShortCard from './ShortCard';
import Filters from './Filters';

class FilterList extends Component {
  render() {
    const drinks = this.props.drinks;
    const filter = this.props.filter;
    const filteredDrinks = drinks.map((drink) => {
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
		const drinkListStyle = {
      padding: "0px 80px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    };
		const isNull = (currentValue) => currentValue === null;
    let showDrinks;       
    if (filteredDrinks.every(isNull)) {
      showDrinks = <h2 style={{color: "red"}}>Oops! We don't have any drinks. Add one here.</h2>
    } else {
      showDrinks = <div className="drink-list" style={drinkListStyle}>{filteredDrinks}</div>;
    }
    return (
      <div>
        <div className="heading">
          <h2>Filter By:</h2>
          <Filters handleClick={this.props.handleClick}/>
					{showDrinks}
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