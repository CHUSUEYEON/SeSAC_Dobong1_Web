import React from "react";

interface Props {
  children: React.ReactNode; // children 요소의 타입!
}
export default function Container({ children }: Props) {
  return <div style={{ border: "1px dotted yellowgreen" }}>{children}</div>;
}
