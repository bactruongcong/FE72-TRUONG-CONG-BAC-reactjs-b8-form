import React, { Component } from "react";

export class Cart extends Component {
  closeButtonRef = React.createRef();

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                ref={this.closeButtonRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123</td>
                    <td>Adidas ultra boost A15</td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>
                      <button className="btn btn-info">-</button>
                      <span>2</span>
                      <button className="btn btn-info">+</button>
                    </td>
                    <td>300$</td>
                    <td>600$</td>
                    <td>
                      <button
                        // onClick={() => this.props.deleteCartItem(id)}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.props.clearCart();
                  // nhấn nút close
                  this.closeButtonRef.current.click();
                }}
                type="button"
                className="btn btn-primary"
              >
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
