import React, { Component } from 'react';
import Link from 'next/link';

class ShortCard extends Component {
  render() {
    const drink = this.props.drink;
    const drinkImageName = drink.fields["img-path"];
    const drinkName = drink.fields["cocktailName"];
    const drinkIngredients = drink.fields["ingredients-short"];
  return (
    <div className="card">
			<Link href={`/drinks/[id]`} as={`/drinks/${drink.id}`}>
				<div className="clickable">
				<img src={`/${drinkImageName}.png`} height="194" width="210"></img>
				<div className="card-wrapper">
					<h3>{drinkName}</h3>
					<p>{drinkIngredients}</p>
				</div>
				</div>
			</Link>
    <style jsx>{`
      .card {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .card-wrapper {
        background-color: #ffffff;
        height: 80px;
        width: 210px;
        margin: 0;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      }
			.clickable {
				cursor: pointer;
			}
      h3 {
        font-family: 'Advent Pro', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #222222;
        margin: 0;
        padding: 12px 20px 0px 20px;
      }
      p {
        font-family: 'Oxygen', sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: #222222;
        padding: 8px 20px;
        margin: 0;
      }
    `}</style>
    </div>
  )
  }
}

export default ShortCard;