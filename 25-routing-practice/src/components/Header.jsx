import { Link } from "react-router-dom";
import Student from "../pages/Student";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to={"/"} className="menu-itme">
          홈으로
        </Link>
        <Link to={"/students/allie"} className="menu-item">
          학생
        </Link>
        <Link to={"/students/codingon"} className="menu-item">
          코딩온
        </Link>
        <Link to={"/students/new?name=jisoo"} className="menu-item">
          query
        </Link>
      </div>
    </header>
  );
}
