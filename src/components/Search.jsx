import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  state = {
    productQuery: [],
    queryInput: '',
  };

  getProducts = async (queryInput) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${queryInput}`);
    const data = await response.json();
    this.setState((prev) => ({ ...prev, productQuery: data.results }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prev) => ({ ...prev, [name]: value }));
  };

  addProductToCart = (product) => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    if (!localStorageCart) {
      localStorageCart = [];
    }

    if (!localStorageCart.some((item) => item.id === product.id)) {
      product.quantity = 1;
      localStorageCart.push(product);
      localStorage.setItem('cart', JSON.stringify(localStorageCart));
    }
  };

  render() {
    const { queryInput, productQuery } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            name="queryInput"
            value={ queryInput }
            id="search"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            onClick={ () => this.getProducts(queryInput) }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </label>
        <div>
          {productQuery.length === 0 ? (
            <p>Nenhum produto foi encontrado</p>
          ) : (
            productQuery.map((product) => (
              <div key={ product.id } data-testid="product">
                <p>{product.title}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
                <button
                  data-testid="product-add-to-cart"
                  onClick={ () => this.addProductToCart(product) }
                >
                  Adicionar ao carrinho
                </button>
                <Link
                  data-testid="product-detail-link"
                  to={ `/productdetails/${product.id}` }
                >
                  Detalhes

                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
