import { useState } from "react";

export default function MapPractice() {
  const [list, setList] = useState([
    { id: 1, name: "chusueyeon", email: "@.com" },
    { id: 2, name: "codee", email: "codde.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 실제 등록시켜주는 함수
  /*
  - list state를 변경시켜 재랜더링되도록
  - 빈값이 읿력되면 alert 띄우기
  - 등록후에 input 빈칸 만들기
  */
  const registerUser = () => {
    // 이름과 이메일 값 중 하나라도 안들어왔다면,
    console.log(name);
    console.log(email);
    if (name.length === 0 || email.length === 0) {
      return alert("이메일과 이름 모두 작성해주세요");
    }

    setList(
      list.concat({
        id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        name,
        email: email, //key랑 value값이 이렇게 같다면 name처럼 생략 가능
      })
    );

    setName("");
    setEmail("");
    console.log("name&email", name, email);
  };

  // 엔터로 등록시켜주는 함수
  // 두번째 input[type="email"]에 Enter 쳤을 때 등록되도록
  const enterRegister = (e) => {
    if (e.code === "Enter") registerUser();
  };

  // 더블클릭 했을 때 삭제되는 함수
  const deleteUser = (id) => {
    const newUserList = list.filter((user) => user.id !== id);
    setList(newUserList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onKeyDown={enterRegister}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button onClick={registerUser}>등록</button>
      </div>
      {list.map((user) => {
        return (
          <h4
            key={user.id}
            onDoubleClick={() => {
              deleteUser(user.id);
            }}
          >
            {user.name} : {user.email}
          </h4>
        );
      })}
    </div>
  );
}
