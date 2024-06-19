"use client";

import Modal from "../Modal/index.js";

import apiClient from "@/app/api/services.js";

const LoginForm = () => {
  const handleLogin = async (username, password) => {
    try {
      const res = await apiClient.post("/login", {
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
