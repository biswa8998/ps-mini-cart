import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSortDown,
  faTimes,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import ListWrapper from "../Lists/ListWrapper";
import Minicart from "../Minicart/Minicart";
import ProductListItem from "../Lists/ProductListItem";
import AppConstants from "../../helper/constants";

export default function Header(props) {
  const [cartAmount, setCartAmount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartLists, setCartLists] = useState([]);

  const updateItemAmount = () => {
    if (props.productsInCart.size > 0) {
      const productItr = props.productsInCart.entries();

      let items = 0,
        amount = 0;

      while (true) {
        const nextValue = productItr.next().value;
        if (nextValue === undefined) {
          break;
        }

        const { id, price, quantity } = {
          ...nextValue[1],
        };

        if (quantity > 0) {
          items += quantity;
          amount = amount + quantity * price;
        }
      }

      setCartAmount(amount);
      setItemsCount(items);
    }
  };

  useEffect(() => {
    updateItemAmount();
  }, []);

  useEffect(() => {
    updateItemAmount();
    createCartList();
  }, [props.trigCartUpdate]);

  const createCartList = () => {
    const productItr = props.productsInCart.entries();
    const newCartLists = [];
    while (true) {
      const nextValue = productItr.next().value;
      if (nextValue === undefined) {
        break;
      }

      if (nextValue[0] === "items") {
        continue;
      }

      const { id, title, price, quantity, currency } = {
        ...nextValue[1],
      };

      if (quantity > 0) {
        const prod = (
          <ProductListItem
            key={id}
            wrapperStyleClass="cart-product-wrapper"
            iconStyleClass="delete-product"
            icon={faTimes}
            showProductAddControl={false}
            productInfo={`Qty ${quantity}`}
            onIconClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              props.updateCart(id, 0);
            }}
          >
            <div className="cart-list-product-name">{title}</div>
            <div className="cart-list-product-amount">{`${currency}${
              quantity * price
            }`}</div>
          </ProductListItem>
        );

        newCartLists.push(prod);
      }
    }

    setCartLists(newCartLists);
  };

  const showCart = () => {
    if (!cartVisible) {
      createCartList();
    }

    const cv = !cartVisible;
    setCartVisible(cv);
    props.toggleCart(cv);
  };

  return (
    <div className="header-wrapper">
      {cartVisible && (
        <Minicart>
          <ListWrapper className="cart-balloon-product-list">
            {cartLists.length > 0 ? (
              cartLists
            ) : (
              <ProductListItem
                key="empty-cart"
                wrapperStyleClass="cart-product-wrapper"
                iconStyleClass="delete-product"
                showProductAddControl={false}
                productInfo=""
                icon={faBan}
              >
                <div className="cart-list-product-name">
                  {AppConstants.strings.emptyCart}
                </div>
              </ProductListItem>
            )}
          </ListWrapper>
        </Minicart>
      )}
      <div className="mini-cart-wrapper">
        <div className="total-and-count center-all">
          <div className="amount-total">{cartAmount}</div>
          <div className="items-total">
            {`${itemsCount} Items`}
            <span onClick={showCart}>
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </div>
        </div>
        <div className="cart-icon" onClick={showCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
}
