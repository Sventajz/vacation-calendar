"use client";
import Modal from '../Modal/index.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase/config.js';

const LoginForm = () => {
  const handleLogin = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password);
    window.location.href = "/dashboard/welcome";
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