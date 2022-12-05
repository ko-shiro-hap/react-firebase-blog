import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center h-12 bg-yellow-600 gap-11 text-white">
      <Link to="/" className="hover:text-blue-400">
        ホーム
      </Link>
      <Link to="/createpost" className="hover:text-blue-400">
        記事投稿
      </Link>
      <Link to="/login" className="hover:text-blue-400">
        ログイン
      </Link>
    </nav>
  );
};

export default Navbar;
