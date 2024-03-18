export function FunctionProps(props) {
  const { title, author, price, type } = props;
  return (
    <div className="book">
      <h1>이번주 베스트셀러</h1>
      <img src="../src/img" alt="book" />
      <h5>{title}</h5>
      <h6>저자: {author}</h6>
      <h6>판매가: {price}</h6>
      <h6>구분: {type}</h6>
    </div>
  );
}
