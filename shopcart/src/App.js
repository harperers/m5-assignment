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


  renderProducts(products) {
    return (
      <div>
        {products.map(productlist => 
             <div key={productlist.id}>
                 
             </div>)
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1></h1> {/* This is the title */}
          {this.renderProducts(this.state.products)}
      </div>
    );
  }
}

export default App;
