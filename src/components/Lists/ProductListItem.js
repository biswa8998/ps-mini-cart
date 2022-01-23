import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
export default function ProductListItem(props) {
  return (
    <li className={props.wrapperStyleClass}>
      {/* "cart-product-wrapper" */}
      <div className={`${props.iconStyleClass} center-all`}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="product-name-desc">{props.children}</div>
      {props.showProductAddControl && (
        <div className="product-quantity center-all">
          <span>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span>
            <input type="number" min={1} />
          </span>
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      )}
      <div className={`product-info center-all`}>{props.productInfo}</div>
    </li>
  );
}
