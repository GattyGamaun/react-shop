import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import ProductDetail from './pages/productDetail';
import About from './pages/about';
import Contacts from './pages/contacts';
import NotFound from './pages/notFound/';
import ListOfProducts from './components/listOfProducts';
import { allProducts } from './data';
import './App.css';

class App extends Component {
  state = {
    products: [...allProducts],
    totalPrice: 0,
  };

  incrementCount = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].quantity >= 10) return null;
    const currentQuantity = ++products[index].quantity;
    products[index].total = currentQuantity * products[index].price;
    this.setState({ products });
  };

  decrementCount = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].quantity <= 0) return null;
    const currentQuantity = --products[index].quantity;
    products[index].total = currentQuantity * products[index].price;
    this.setState({ products });
  };

  resetCount = () => {
    const products = this.state.products.map(product => {
      product.quantity = 0;
      product.total = 0;
      return product;
    });
    this.setState({ products });
  };

  calculateTotalPrice = () => {
    let totalPrice = 0;
    this.state.products.map(product => {
      totalPrice += product.total;
      return product;
    });
    return totalPrice;
  };

  render() {
    return (
      <div className="App">
        <Header
          onReset={this.resetCount}
          totalPrice={this.calculateTotalPrice()}
        />
        <main role="main" className="container">
          <Switch>
            <Route
              path="/product/:id"
              render={this.getProduct}
            />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route
              path="/catalog"
              render={props => (
                <ListOfProducts
                  products={this.state.products}
                  onIncrement={this.incrementCount}
                  onDecrement={this.decrementCount}
                  {...props}
                />
              )}
            />
            <Route
              path="/home"
              render={props => (
                <Home
                  products={this.state.products}
                  onIncrement={this.incrementCount}
                  onDecrement={this.decrementCount}
                  {...props}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

  getProduct = ({match, history}) => {
    const id = Number.parseInt(match.params.id);
    const [product] = this.state.products.filter(item => item.id === id);
    return <ProductDetail product={product} history={history}/>
  }
}

export default App;
