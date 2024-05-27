"use client";

import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100 dark:bg-black">
      {isLogin ? (
        <Login setIsOpen={setIsLogin} />
      ) : (
        <Register setIsOpen={setIsLogin} />
      )}
    </div>
  );
};

export default AuthPage;
