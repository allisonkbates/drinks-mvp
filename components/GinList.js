import React, { Component } from 'react';
import Glider from 'glider-js';
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
      const tags = drink.fields.tags;
     if (tags && tags.includes("gin")) {
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