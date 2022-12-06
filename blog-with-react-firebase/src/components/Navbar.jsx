import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center h-12 bg-yellow-600 gap-11 text-white">
      <Link to="/" className="hover:text-blue-400">
        <FontAwesomeIcon icon={faHouse} className="mr-1" />
        ホーム
      </Link>
      <Link to="/createpost" className="hover:text-blue-400">
        <FontAwesomeIcon icon={faFilePen} className="mr-1" />
        記事投稿
      </Link>
      <Link to="/login" className="hover:text-blue-400">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-1" />
        ログイン
      </Link>
    </nav>
  );
};

export default Navbar;
