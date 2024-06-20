"use client";

import Modal from "../Modal/index.js";
import axios from "axios";

const LoginForm = () => {
  const handleLogin = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: username,
        password_hashed: password,
      });
      console.log(res);
      window.location.href = "/dashboard/welcome";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isLogin={true}
      isPtoRequest={false}
      onSubmit={handleLogin}
      onClose={() => {}}
    />
  );
};

export default LoginForm;
