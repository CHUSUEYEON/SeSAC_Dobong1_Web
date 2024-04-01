import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { reset } from "../store/modules/mbti";

const Header = styled.header`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const MbtiResult = styled.p`
  font-size: 2rem;
`;
const Additional = styled.p`
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translate(-35px);
`;

export default function Show() {
  const mbtiResult = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector(
    (state) => state.mbti.explanations[mbtiResult]
  );
  //   const result = explanation[mbtiResult];
  const dispatch = useDispatch();
  console.log(mbtiResult);
  console.log(explanation); //{text, img}

  return (
    <>
      <Header>결과 페이지 입니다!</Header>
      <Explanation>{explanation.text}</Explanation>
      <MbtiResult>{mbtiResult}</MbtiResult>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg
        src={`${process.env.PUBLIC_URL}${explanation.img}`}
        alt="mbti 설명 이미지"
      />
      <PinkButton
        text="다시 검사하기"
        clickEvent={() => dispatch(reset())}
      ></PinkButton>
    </>
  );
}
