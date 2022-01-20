import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSortDown,
  faBowlingBall,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const lists = new Array(2).fill(0).map((i, j) => (
    <li key={j} className="product-detail-wrapper">
      <div className="product-thumbnail center-all">
        <FontAwesomeIcon icon={faBowlingBall} />
      </div>
      <div className="product-name-desc">
        <div className="list-product-name">Product Name</div>
        <div className="list-product-desc">Product Description</div>
      </div>
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
      <div className="product-amount">$1235</div>
    </li>
  ));

  return (
    <div className="app center-all">
      <div className="app-screen" style={{ width: 400 }}>
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
          </div>
        </div>
        <ul className="product-list">{lists}</ul>
      </div>
    </div>
  );
}

export default App;
