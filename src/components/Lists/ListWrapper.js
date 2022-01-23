export default function ListWrapper(props) {
  return <ul className={props.className}>{props.children}</ul>;
}
