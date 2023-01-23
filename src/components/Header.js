import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={100} height={100} alt="logo" src="/img/logo.jpg" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={20} height={20} alt="cart" src="/img/cart.svg" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              width={20}
              height={20}
              alt="favorite"
              src="/img/heart.svg"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} alt="user" src="/img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
