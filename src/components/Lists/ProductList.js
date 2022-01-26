import { faBowlingBall } from "@fortawesome/free-solid-svg-icons";

import ListWrapper from "./ListWrapper";
import ProductListItem from "./ProductListItem";

import { useEffect, useState } from "react";

/**
 * This will create a unsorted list of product and products in the cart
 *
 * @param {*} props
 * @returns
 */
export default function ProductList(props) {
  const [itemsLength, setItemsLength] = useState(
    props.listOfProducts.get("items")
  );
  useEffect(() => {
    setItemsLength(props.listOfProducts.size);
    // eslint-disable-next-line
  }, [props.listOfProducts.get("items")]);

  let productListItems = [];
  if (itemsLength > 0) {
    const productItr = props.listOfProducts.entries();
    while (true) {
      const nextValue = productItr.next().value;
      if (nextValue === undefined) {
        break;
      }

      if (nextValue[0] === "items") {
        continue;
      }

      const { id, title, desc, price, currency, quantity } = {
        ...nextValue[1],
      };
      productListItems.push(
        <ProductListItem
          key={id}
          productId={id}
          wrapperStyleClass="product-detail-wrapper"
          icon={faBowlingBall}
          showProductAddControl={true}
          productInfo={`${currency}${price}`}
          productInfoClass="product-amount"
          productQuantity={quantity}
          updateCart={props.updateCart}
        >
          <div className="list-product-name">{title}</div>
          <div className="list-product-desc">{desc}</div>
        </ProductListItem>
      );
    }
  }

  const getOverlayStyle = () => {
    const productListEle = document.getElementsByClassName("product-list")[0];

    return {
      width: `${productListEle.offsetWidth}px`,
      height: `${productListEle.offsetHeight}px`,
    };
  };

  return (
    <>
      <ListWrapper className="product-list">{productListItems}</ListWrapper>
      {props.cartVisible && (
        <div className="list-overlay center-all" style={getOverlayStyle()} />
      )}
    </>
  );
}
