import React, { Component } from 'react';

class TallCard extends Component {	
	render() {
		const drink = this.props.drink;
		const drinkImageName = drink.fields["img-path"];
		const drinkName = drink.fields["cocktailName"];
		const drinkIngredients = drink.fields["ingredients-short"];
		const drinkPrep = drink.fields["preparation"];	
		const prepListStyle = {
			fontFamily: "'Oxygen', sans-serif",
			fontSize: "12px",
			fontWeight: "400",
			color: "#222222",
			margin: "0"
		}
		const orderedListStyle = {
			margin: "0",
			padding: "6px 10px",
			fontFamily: "'Oxygen', sans-serif",
			fontSize: "12px"
    }
    
    function truncate(str) {
      let truncated = str.substring(0, 200);
      let formatted = truncated + '...';
      return formatted;
    }

    function formatIntoSteps(str) {
      const strSplit = str.split('\n');
			return <ol style={orderedListStyle}>
				{strSplit.map((word) => {
					return <li key={word} style={prepListStyle}>{word}</li>;
				})}
			</ol>
    }

		function formatPrep(drinkPrep) {
			if (drinkPrep && drinkPrep.length > 200) {
        const formatted = truncate(drinkPrep);
        const steps = formatIntoSteps(formatted);
        return steps;
      } if (drinkPrep) {
        const steps = formatIntoSteps(drinkPrep);
        return steps;
			} else {
				return <p>No preparation instructions available.</p>
			}
		}
		const preparation = formatPrep(drinkPrep);	

	return (
		<div className="card">
			<img src={`/${drinkImageName}.png`} height="200" width="210" className=""></img>
			<div className="card-wrapper">
				<h3>{drinkName}</h3>
				<h4>Ingredients</h4>
				<p>{drinkIngredients}</p>
				<h4>Preparation</h4>
				<div>
					{preparation}
				</div>
			</div>
		<style jsx>{`
			.card {
				display: flex;
        flex-grow: 1;
				flex-direction: column;
				flex-wrap: nowrap;
        margin: 20px;
			} 
			.card-wrapper {
				background-color: #ffffff;
				height: 250px;
				width: 170px;
				margin: 0;
				box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
				padding: 16px 20px;
			}
			h3 {
				font-family: 'Advent Pro', sans-serif;
				font-size: 16px;
				font-weight: 400;
				color: #222222;
				margin: 0;
				padding: 0px 0px 0px 0px;
			}
			h4 {
				font-family: 'Oxygen', sans-serif;
				font-size: 12px;
				font-weight: 700;
				color: #222222;
				margin: 8px 0px 6px 0px;
			}
			p, li {
				font-family: 'Oxygen', sans-serif;
				font-size: 12px;
				font-weight: 400;
				color: #222222;
				margin: 0;
			}
			ol {
				margin: 0;
				padding: 6px 10px;
				font-family: 'Oxygen', sans-serif;
				font-size: 12px;
			}
		`}</style>
		</div>
	)
	}
}

export default TallCard;