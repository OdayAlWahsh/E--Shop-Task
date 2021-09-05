import React from 'react';
import './App.css';
import Header from './layout/header/header';
import Category from './component/add-category/category';
import AllProducts from './component/grid-products/grid-products';
import Product from './component/add-product/product';
import CarouselCategory from './component/carousel-category/carousel-category';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={CarouselCategory} exact />
          <Route path="/AddCategory" component={Category} exact />
          <Route path="/UpdateCategory/:idParams/:nameParams" component={Category} exact />
          <Route path="/AddProduct" component={Product} exact />
          <Route path="/UpdateProduct/:idParams/:nameParams" component={Product} exact />
          <Route path="/AllProduct/:idParams/:nameParams" component={AllProducts} exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
