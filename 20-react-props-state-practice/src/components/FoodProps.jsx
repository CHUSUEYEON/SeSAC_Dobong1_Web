export function FoodProps(props) {
  return (
    <div>
      <div style={{ color: "red" }}></div>
      <h4>제가 좋아하는 음식은 {props.food}입니다.</h4>
    </div>
  );
}

FoodProps.defaultProps = {
  food: "치킨",
};
