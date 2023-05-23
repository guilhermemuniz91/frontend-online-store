import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    this.productData();
  }

  productData = async () => {
    const { match: { params: { slug } } } = this.props;
    const response = await getProductById(slug);
    this.setState({ product: response });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <div data-testid="product">
          <p data-testid="product-detail-name">{product.title}</p>
          <img
            data-testid="product-detail-image"
            src={ product.thumbnail }
            alt={ product.title }
          />
          <p data-testid="product-detail-price">{product.price}</p>
          <button data-testid="shopping-cart-button">
            carrinho
          </button>
          <div>
            <Link
              to="/ShoppingCart"
              data-testid="shopping-cart-button"
            >
              Seu Carrinho

            </Link>
          </div>

        </div>
        <p>teste</p>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
