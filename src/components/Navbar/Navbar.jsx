import "./Navbar.css";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="header_text_color">Royalty</h1>

      <a
        href="https://github.com/neetukumari4858/address-book-manager"
        target="_blank"
        className="header_text_color"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};
export { Navbar };
