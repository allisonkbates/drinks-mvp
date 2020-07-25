import React, { Component } from 'react';

class SingleDrink extends Component {	
	render() {
		const drink = this.props.drink;
		const drinkImageName = drink.fields["img-path"];
		const drinkName = drink.fields["cocktailName"];
		const drinkIngredients = drink.fields["ingredients"];
    const drinkPrep = drink.fields["preparation"];
    const drinkGlassware = drink.fields["glassware"];
    const drinkTags = drink.fields['tags']
    const drinkNotes = drink.fields['editorial-notes']
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

    function formatIntoSteps(str) {
      const strSplit = str.split('\n');
			return <ol style={orderedListStyle}>
				{strSplit.map((word) => {
					return <li key={word} style={prepListStyle}>{word}</li>;
				})}
			</ol>
    }

		function formatPrep(drinkPrep) {
     if (drinkPrep) {
        const steps = formatIntoSteps(drinkPrep);
        return steps;
			} else {
				return <p>No preparation instructions available.</p>
			}
		}
    const preparation = formatPrep(drinkPrep);
    
	return (
		<div className="card">
			<img src={`/${drinkImageName}.png`} height="194" width="210" className=""></img>
			<div className="card-wrapper">
				<h3>{drinkName}</h3>
				<h4>Ingredients</h4>
				<p>{drinkIngredients}</p>
				<h4>Preparation</h4>
				<div>
					{preparation}
				</div>
        <div>
          {drinkGlassware}
        </div>
        <div>
          {drinkTags}
        </div>
        <div>
          {drinkNotes}
        </div>
			</div>
		<style jsx>{`
			
		`}</style>
		</div>
	)
	}
}

export default SingleDrink;

/*.card {
				display: flex;
				margin: 12px 12px 12px 0px;
				flex-direction: column;
				flex-wrap: nowrap;
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
			}*/