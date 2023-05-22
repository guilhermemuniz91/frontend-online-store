import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = { orders: [] };

  render() {
    const { orders } = this.state;
    return (
      <div>
        {
          orders.length > 0 ? <p>Tem pedido</p>
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        ;
      </div>
    );
  }
}
