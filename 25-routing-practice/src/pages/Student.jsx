import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();
  const data = useParams();
  const [query, setQuery] = useSearchParams();
  //   console.log(data);
  //   console.log(query.get("name"));

  return (
    <>
      <p>
        학생 이름은 <span>{data.name}</span>입니다.
      </p>
      <p>
        {query.get("name") && `실제 학생 이름은 ${query.get("name")} 입니다.`}
      </p>

      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </>
  );
}
