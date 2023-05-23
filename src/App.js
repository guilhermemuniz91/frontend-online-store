import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route
          path="/:slug"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    </div>
  );
}

export default App;
