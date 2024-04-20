export default function Notice({ chat }) {
  // chat = {
  //     type: "me", // me, other, notice
  //     content: "내가 작성한 메시지",
  //   },
  return <div className="notice">{chat.content}</div>;
}
