import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
