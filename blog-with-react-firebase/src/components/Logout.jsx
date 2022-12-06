import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button
        onClick={logout}
        className="border-blue-400 border px-2 rounded hover:bg-blue-300"
      >
        ログアウト
      </button>
    </div>
  );
};

export default Logout;
