import React, { Component } from 'react';
import Glider from 'glider-js';
import ListHeading from '../components/ListHeading';
import ShortCard from '../components/ShortCard';

class GinList extends Component {
  constructor(props){
    super(props);
    this.gliderRef = React.createRef();
  }
  componentDidMount() {
    new Glider(this.gliderRef.current, {
      slidesToScroll: 3,
      slidesToShow: 4.75,
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  }
  
  render() {
    const drinks = this.props.drinks;
    const showRecDrinks = drinks.map((drink) => {
      if (drink.fields["alcohol-tag"] === "Gin") {
        return <ShortCard key={drink.id} drink={drink} />
      } else {
        return null;
      }
     });
    return (
      <div className="gin-list">
        <h2>Gin Cocktails</h2>
        <div className="glider-contain">
          <div className="glider" ref={this.gliderRef}>
            {showRecDrinks}
          </div>
          <button aria-label="Previous" className="glider-prev">«</button>
          <button aria-label="Next" className="glider-next">»</button>
          <div role="tablist" className="dots"></div>
        </div>
        <style jsx>{`
        h2 {
          font-family: 'Advent Pro', sans-serif;
          font-size: 32px;
          font-weight: 400;
          margin: 16px 0px 16px 0px;
        }

        .gin-list {
          padding: 80px;
        }
        .glider-next {
          
        }

      `}</style>
      </div>
    )
  }
}

export default GinList;

/*
<div class="glider-contain">
  <div class="glider">
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
		<div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
		<div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
    <div>your content here</div>
  </div>
  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>*/