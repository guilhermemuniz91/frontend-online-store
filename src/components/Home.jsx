import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Search from './Search';
import ShoppingCart from './ShoppingCart';

export default class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">Seu Carrinho</Link>
        </div>
        <ShoppingCart />
        <Categories />
        <Search />
      </div>
    );
  }
}
