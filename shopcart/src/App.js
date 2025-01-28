import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0

        },
        {
          id: 3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0
        }
      ],
    };

    
  }


  renderProductslist(products) {
    return (
      <div className="product">
        {products.map(product => (
             <div key={product.id} className="item">
                <h3>{product.desc}</h3>
                <img src={product.image} className="image" />
                <span>Quantity: <input
                  value={product.value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    this.setState(prevState => ({
                      products: prevState.products.map(p => 
                        p.id === product.id ? { ...p, value: newValue } : p
                      )
                    }));
                  }}
                /></span>
             </div>)
        )}
      </div>
    );
  }

  renderTotal(products) {
    const total = products.reduce((acc, product) => acc + parseInt(product.value || 0), 0);
    return (
      <div className="header">
        <h1>Shop To React</h1>
        <div>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> {total} Items
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderTotal(this.state.products)}
        {this.renderProductslist(this.state.products)}
      </div>
    );
  }
}

export default App;
