import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    productCategories: [],
    resultsCategories: [],
  };

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const response = await getCategories();
    this.setState((prev) => ({ ...prev, productCategories: response }));
  };

  productsByCategories = async (id) => {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
    const response = await data.json();
    console.log(response);
    this.setState((prev) => ({ ...prev, resultsCategories: response.results }));
  };

  render() {
    const { productCategories, resultsCategories } = this.state;

    return (
      <div>
        {
          productCategories.map((categori) => (
            <button
              data-testid="category"
              type="button"
              key={ categori.id }
              onClick={ () => this.productsByCategories(categori.id) }
            >
              {categori.name}
            </button>))
        }
        <div>
          {
            resultsCategories.map((product) => (
              <div key={ product.id } data-testid="product">
                <p>{product.title}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
              </div>
            ))
          }
        </div>

      </div>
    );
  }
}
