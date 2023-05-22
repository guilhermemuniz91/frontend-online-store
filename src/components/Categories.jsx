import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    productCategories: [],
  };

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const response = await getCategories();
    this.setState({
      productCategories: response,
    });
  };

  render() {
    const { productCategories } = this.state;
    console.log(productCategories);
    return (
      <div>
        {
          productCategories.map((categori) => (
            <button
              data-testid="category"
              type="button"
              key={ categori.id }
            >
              {categori.name}

            </button>))
        }

      </div>
    );
  }
}
