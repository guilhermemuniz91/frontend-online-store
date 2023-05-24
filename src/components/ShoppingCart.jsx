import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = { orders: [] };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState((prev) => ({ ...prev, orders: cart }));
  };

  render() {
    const { orders } = this.state;
    console.log(orders);
    return (
      <div>
        {
          orders.length > 0 ? (
            orders.map((order) => (
              <div key={ order.id }>
                <p data-testid="shopping-cart-product-name">{order.title}</p>
                <img src={ order.thumbnail } alt={ order.title } />
                <p>{order.price}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {' '}
                  Quantidade:
                  {order.quantity}
                </p>
              </div>
            ))
          )
            : (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
        }
        ;
      </div>
    );
  }
}
