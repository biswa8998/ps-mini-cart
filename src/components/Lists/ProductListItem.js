import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NumberInput from "../Input/NumberInput";

export default function ProductListItem(props) {
  const updateCart = (productId, productQuantity) => {
    props.updateCart(productId, productQuantity);
  };

  const onIconClick = (e) => {
    if (props.onIconClick) {
      props.onIconClick(e);
    }
  };

  return (
    <li className={props.wrapperStyleClass}>
      <div
        className={`${props.iconStyleClass} center-all`}
        onClick={onIconClick}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="product-name-desc">{props.children}</div>
      {props.showProductAddControl && (
        <NumberInput
          wrapperStyleClass="product-quantity"
          minimum={0}
          inputValue={props.productQuantity}
          onChangeCallback={(value) => {
            updateCart(props.productId, value);
          }}
        />
      )}
      <div className={`product-info center-all`}>{props.productInfo}</div>
    </li>
  );
}
