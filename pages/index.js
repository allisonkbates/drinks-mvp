import React, { Component } from 'react';
import Header from '../components/Header';
import DrinkList from '../components/DrinkList';

class Index extends Component {
  render() {
    return (
      <div> 
        <Header />
        <DrinkList />
      </div>
    )
  }
}

export default Index;
