import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
