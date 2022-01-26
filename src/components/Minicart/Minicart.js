/**
 * Minicart: A higher order component which will help to render list of products inside mini cart
 * @param {*} props
 * @returns
 */
export default function Minicart(props) {
  return (
    <div className="cart-balloon">
      <div className="cart-upper-tick"></div>
      {props.children}
    </div>
  );
}
