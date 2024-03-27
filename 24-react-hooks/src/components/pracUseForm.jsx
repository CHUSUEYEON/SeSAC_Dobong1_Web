import { useForm } from "react-hook-form";

export default function Practice() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onvalid = (data) => {
    console.log("valid", data);
  };
  const onInvalid = (data) => {
    console.log("invalid", data);
  };

  console.log("entire info", watch());
  console.log(errors.age?.message);

  return (
    <>
      <h1>과제</h1>
      <form onSubmit={handleSubmit(onvalid, onInvalid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이를 입력해주세요.",
            validate: {
              rangeAge: (value) => {
                return (
                  value.includes(value >= 0) ||
                  "0 이상의 숫자만 입력 가능합니다."
                );
              },
            },
          })}
        />{" "}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
