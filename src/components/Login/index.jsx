"use client";
import ReusableModal from '../Modal/index.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase/config.js';

const LoginForm = () => {
  const handleLogin = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password);
    window.location.href = "/dashboard/welcome";
  };

  return (
    <ReusableModal
      isLogin={true}
      isPtoRequest={false}
      onSubmit={handleLogin}
      onClose={() => {}}
    />
  );
};

export default LoginForm;