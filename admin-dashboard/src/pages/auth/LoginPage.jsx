import React, { useEffect } from "react";
import LoginForm from "../../components/Auth/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 min-h-screen">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
