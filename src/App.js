import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/Lists/ProductList";
import apiHelper from "./helper/api";
import AppConstants from "./helper/constants";

/**
 *
 * @returns Main application
 */
function App() {
  const [appProducts, setAppProducts] = useState(new Map().set("items", 0));
  const [trigCartUpdate, setTrigCartUpdate] = useState(true);
  const [cartVisible, setCartVisible] = useState(null);

  const LOCAL_STORAGE_KEY = AppConstants.constants.LOCAL_STORE_KEY;

  /**
   * This effect will run only once after mount. We will call the api and setup the application
   * for the first time.
   */
  useEffect(() => {
    apiHelper.getProductList((data) => {
      // create a map with id as key and initial quantity = 1
      // also check for items quantity in local storage. if found, those quantity will take precedence
      let countInStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (countInStorage) {
        countInStorage = JSON.parse(countInStorage);
      }

      const productMap = appProducts;
      let countStore = {};
      data.forEach((element) => {
        let qty =
          countInStorage && countInStorage[element.id] !== undefined
            ? countInStorage[element.id]
            : 1;
        productMap.set(element.id, {
          ...element,
          quantity: qty,
        });

        countStore[element.id] = qty;
      });

      productMap.set("items", 2);

      setAppProducts(productMap);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(countStore));
      setTrigCartUpdate((t) => !trigCartUpdate);
    });
    // eslint-disable-next-line
  }, []);

  /**
   * update the items in the cart on event of various events. Cart will update on click of
   * + and - sign. Cart will also update when product gets deleted from cart.
   * @param {*} productId: id of the product to be updated
   * @param {*} productQuantity: quantity of product
   */
  const updateCart = (productId, productQuantity) => {
    appProducts.set(productId, {
      ...appProducts.get(productId),
      quantity: productQuantity,
    });

    const prodItr = appProducts.entries();
    let countStore = {};
    while (true) {
      const nextValue = prodItr.next().value;
      if (nextValue === undefined) {
        break;
      }

      if (nextValue === "items") {
        continue;
      }

      countStore[nextValue[0]] = nextValue[1].quantity;
    }

    // store the latest data in local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(countStore));
    setAppProducts(appProducts);
    setTrigCartUpdate(!trigCartUpdate);
  };

  return (
    <div className="app center-all">
      <div className="app-screen" style={{ width: 400 }}>
        <Header
          productsInCart={appProducts}
          trigCartUpdate={trigCartUpdate}
          updateCart={updateCart}
          toggleCart={(visibility) => {
            setCartVisible(visibility);
          }}
        />
        <ProductList
          listOfProducts={appProducts}
          updateCart={updateCart}
          cartVisible={cartVisible}
        />
      </div>
    </div>
  );
}

export default App;
