/**
 * Higher order unsorted list component
 * @param {*} props
 * @returns
 */
export default function ListWrapper(props) {
  return <ul className={props.className}>{props.children}</ul>;
}
