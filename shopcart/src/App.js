import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayProducts from "./DisplayProducts";
import Navbar from "./Navbar";
import ProductModal from "./ProductModal";
import Cart from "./Cart";
import SignIn from "./SignIn";
import CheckOut from "./CheckOut";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
          ratings: "4.5",
        },
        {
          id: 1,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
          ratings: "4.8",
        },
        {
          id: 2,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
          ratings: "4.2",
        },
        {
          id: 3,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
          ratings: "4.7",
        },
      ],
      showModal: false,
      selectedProduct: null,
    };
  }

  addProduct = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id ? { ...product, value: product.value + 1 } : product
      ),
    }));
  };

  subtractProduct = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id && product.value > 0
          ? { ...product, value: product.value - 1 }
          : product
      ),
    }));
  };

  openModal = (product) => {
    this.setState({ showModal: true, selectedProduct: product });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedProduct: null });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar products={this.state.products} />
          <Routes>
            <Route path="/" element={
              <DisplayProducts
                products={this.state.products}
                addProduct={this.addProduct}
                subtractProduct={this.subtractProduct}
                openModal={this.openModal}
              />
            } />
            <Route path="/cart" element={
              <Cart products={this.state.products} />
            } />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          
          {this.state.showModal && (
            <ProductModal
              selectedProduct={this.state.selectedProduct}
              closeModal={this.closeModal}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;