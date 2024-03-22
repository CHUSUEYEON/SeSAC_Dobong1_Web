import { children } from "react";

export default function Container({ children }) {
  return (
    <>
      <header>POSTLIST 🤩</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
