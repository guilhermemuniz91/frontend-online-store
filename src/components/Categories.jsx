import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    productCategories: [],
    resultsCategories: [],
    cart: [],
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
    const { productCategories, resultsCategories, cart } = this.state;
    console.log(cart);
    return (
      <div>
        {productCategories.map((category) => (
          <button
            data-testid="category"
            type="button"
            key={ category.id }
            onClick={ () => this.productsByCategories(category.id) }
          >
            {category.name}
          </button>
        ))}
        <div>
          {resultsCategories.map((product) => (
            <div key={ product.id } data-testid="product" name={ product.id }>
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
          ))}
        </div>
      </div>
    );
  }
}
