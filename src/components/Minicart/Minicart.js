export default function Minicart(props) {
  return (
    <div className="cart-balloon">
      <div className="cart-upper-tick"></div>
      {props.children}
    </div>
  );
}
