import Button from "./Button";
export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#f9c4d2"
      subColor="#b18597"
      hoverColor="#ffe9e9"
    />
  );
}
