import React from "react";
import cartEmptyImg from "../../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>Корзина пустая</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link class="button button--black" to="/">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
