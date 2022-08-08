function Toolbar(props) {
  return (
    <li>
      <a href="index.html">{props.filters.map(item => props.filters(item))}</a>
    </li>
  );
}

export default Toolbar;