import { faBowlingBall } from "@fortawesome/free-solid-svg-icons";

import ListWrapper from "./ListWrapper";
import ProductListItem from "./ProductListItem";

import AppConstants from "../../helper/constants";

export default function ProductList(props) {
  console.log(props.listOfProducts);
  let productListItems = [];
  if (Array.isArray(props.listOfProducts) && props.listOfProducts.length > 0) {
    props.listOfProducts.map((i, j) => (
      <ProductListItem
        key={j}
        wrapperStyleClass="product-detail-wrapper"
        icon={faBowlingBall}
        showProductAddControl={true}
        productInfo={`${AppConstants.strings.currency}35`}
        productInfoClass="product-amount"
      >
        <div className="list-product-name">Product Name</div>
        <div className="list-product-desc">Product Description</div>
      </ProductListItem>
    ));
  }
  return <ListWrapper className="product-list">{productListItems}</ListWrapper>;
}
