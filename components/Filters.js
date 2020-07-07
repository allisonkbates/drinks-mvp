import React, { Component } from 'react';

class Filters extends Component {
  render () {
    return (
      <div className="filters">
        <h2>Filter By:</h2>
        <button className="filter-chip" value="Gin" onClick={this.props.handleClick}>Gin</button>
        <button className="filter-chip" value="Whiskey" onClick={this.props.handleClick}>Whiskey</button>
        <button className="filter-chip" value="Vodka" onClick={this.props.handleClick}>Vodka</button>
        <button className="filter-chip" value="Rum" onClick={this.props.handleClick}>Rum</button>
        <button className="filter-chip" value="All" onClick={this.props.handleClick}>Show All</button>
        <style jsx>{`
          .filters {
            display: flex;
            flex-direction: row;
            padding-left: 20px;
            margin: 40px;
          }
          h2 {
            color: #200d06;
            font-family: 'Julius Sans One', sans-serif;
            font-size: 18px;
            margin-right: 9px;
          }
          .filter-chip {
            background-color: #220E05;
            color: #E4E4E0;
            font-family: 'Julius Sans One', sans-serif;
            font-size: 18px;
            padding: 10px 20px;
            margin: 6px;
            border: none;
            border-radius: 50px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Filters;