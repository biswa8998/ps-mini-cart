import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSortDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ListWrapper from "../Lists/ListWrapper";
import Minicart from "../Minicart/Minicart";
import ProductListItem from "../Lists/ProductListItem";

export default function Header(props) {
  const cartLists = new Array(2).fill(0).map((i, j) => (
    <ProductListItem
      key={j}
      wrapperStyleClass="cart-product-wrapper"
      iconStyleClass="delete-product"
      icon={faTimes}
      showProductAddControl={false}
      productInfo="Qty 888881"
    >
      <div className="cart-list-product-name">Product Name</div>
      <div className="cart-list-product-amount">$35</div>
    </ProductListItem>
  ));

  return (
    <div className="header-wrapper">
      <div className="mini-cart-wrapper">
        <div className="total-and-count center-all">
          <div className="amount-total">$78</div>
          <div className="items-total">
            2 Items
            <span>
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </div>
        </div>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <Minicart>
          <ListWrapper className="cart-balloon-product-list">
            {cartLists}
          </ListWrapper>
        </Minicart>
      </div>
    </div>
  );
}
