//함수형 컴포넌트로 진행
export default function AnimalName() {
  const animal = "고양이";
  const name = "루";
  const a = 16;
  const b = 10;
  const title = "Be happy";

  return (
    <div>
      <div style={{ width: "400px", border: "4px dotted green" }}>
        <span>제 반려 동물의 이름은 {name}입니다.</span> <br />
        <span>
          {name}는 {animal}입니다.
        </span>
      </div>
      <div>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div>
      <div>{a > b && "a가 b보다 큽니다."}</div>
      <br />
      <br />
      <div className="title">{title}</div>
      <div>
        아이디: <input></input>
      </div>
      <div>
        비밀번호: <input></input>
      </div>
    </div>
  );
}
