import React, { Component } from "react";
import products from "../assets/products.json";

export class ProductList extends Component {
  // [{}, {}, {}, {}] => [div,div,div,div]
  renderProducts = () => {
    const productHTMLs = products.map((item) => {
      return (
        <div key={item.id} className="col-4">
          <div className="item card">
            <img src={item.img} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });

    return productHTMLs;
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

export default ProductList;
