import React, { Component } from "react";
import redCar from "../assets/img/red-car.jpg";
import blackCar from "../assets/img/black-car.jpg";
import silverCar from "../assets/img/silver-car.jpg";
import steelCar from "../assets/img/steel-car.jpg";
import styles from "./style.module.css";
import clsx from "clsx";

/**
 * 1. import 3 hình còn lại vào
 * 2. tạo state (carImg = redCard), gán vào thẻ img
 * 3. Khi nhấn nút , state lại carImg thành hình tương ứng
 */

export class ChangeCar extends Component {
  state = {
    carImg: redCar,
  };

  changeCar = (img) => {
    this.setState(
      {
        carImg: img,
      },
      () => {
        console.log(this.state.carImg);
      }
    );
  };

  render() {
    return (
      <div>
        <img
          style={{
            width: 500,
            backgroundColor: "red",
            transform: "rotate(30deg)",
            marginBottom: 120,
          }}
          src={this.state.carImg}
          alt=""
        />
        <div>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === redCar,
            })}
            onClick={() => this.changeCar(redCar)}
          >
            Red car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === blackCar,
            })}
            onClick={() => this.changeCar(blackCar)}
          >
            Black car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === silverCar,
            })}
            onClick={() => this.changeCar(silverCar)}
          >
            Silver car
          </button>
          <button
            className={clsx(styles.button, styles.text, styles.spacing, {
              [styles.active]: this.state.carImg === steelCar,
            })}
            onClick={() => this.changeCar(steelCar)}
          >
            Steel car
          </button>
        </div>
      </div>
    );
  }
}

export default ChangeCar;
