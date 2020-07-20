import React, { Component } from 'react';

class Filters extends Component {
	render () {
		return (
			<div className="filters">
				<button className="filter-chip" value="gin" onClick={this.props.handleClick}>Gin</button>
				<button className="filter-chip" value="whiskey" onClick={this.props.handleClick}>Whiskey</button>
				<button className="filter-chip" value="vodka" onClick={this.props.handleClick}>Vodka</button>
				<button className="filter-chip" value="rum" onClick={this.props.handleClick}>Rum</button>
				<button className="filter-chip" value="other" onClick={this.props.handleClick}>Other</button>
				<button className="filter-chip" value="All" onClick={this.props.handleClick}>Show All</button>
				<style jsx>{`
					.filters {
						display: flex;
						flex-direction: row;
						padding-left: 20px;
					}
					.filter-chip {
						height: 40px;
						padding: 0px 25px;
						background-color: #377084;
						border: 1px solid #377084;
						border-radius: 20px;
						display: flex;
						align-items: center;
						margin-left: 16px;
						color: #ffffff;
						font-family: 'Advent Pro', sans-serif;
					}

					.filter-chip:hover {
						background-color: #EFF3F4;
						border: 1px solid #377084;
						color: #377084;
						transition: 0.4s;
					}
				`}
				</style>
			</div>
		)
	}
}

export default Filters;