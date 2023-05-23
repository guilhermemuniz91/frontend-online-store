import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    this.test();
  }

  test = async () => {
    const { match: { params: { slug } } } = this.props;
    console.log(slug);
    const data = await getProductById(sulg);
    const response = await data.json();
    this.setState({ product: response });
  };

  render() {
    return (
      <div>ProductDetails</div>
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
