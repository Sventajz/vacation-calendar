'use client'
import { useState } from 'react';
// import { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase/config.js';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      // Redirect to welcome page or dashboard after successful login
      window.location.href = '/welcome';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <LoginModal>
      <ModalWindow>
        <Wrapper>
          <FormLogin onSubmit={handleLogin}>
            <Credentials>
              <TitleLogin>PTO System</TitleLogin>
              <FormFields>
                <BaseLabelInputDivision>
                  <label htmlFor="username">USER NAME</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </BaseLabelInputDivision>
                <PasswordLabelInputDivision>
                  <label htmlFor="password">PASSWORD</label>
                  <div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="button" onClick={handlePasswordToggle}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </PasswordLabelInputDivision>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </FormFields>
            </Credentials>
            <BtnLogin type="submit">Log in</BtnLogin>
          </FormLogin>
        </Wrapper>
      </ModalWindow>
    </LoginModal>
  );
};

export default LoginForm;

// Styled-components
const LoginModal = styled.div`
  display: flex; 
  overflow-y: auto; 
  overflow-x: hidden; 
  position: fixed; 
  top: 0; 
  right: 0; 
  left: 0; 
  z-index: 50; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 100%;
`;

const ModalWindow = styled.div`
  position: relative; 
  min-width: 36%;
  max-width: 90vw;
  height: auto;
`;

const Wrapper = styled.div`
  border-radius: 24px; 
  width: 100%; 
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  gap: 8px;
  padding: 6px 30px 14px 30px;
`;

const TitleLogin = styled.h1`
  color: #151A20;
  font-size: 40px;
  line-height: 40px; 
  font-weight: 700;
`;

const FormLogin = styled.form`
  display: grid;
  margin-top: 1rem;
  padding: 1.5rem; 
  gap: 24px;
`;

const Credentials = styled.div`
  display: grid;
  gap: 10px;
`;

const FormFields = styled.div`
  display: grid;
  gap: 20px;
`;

const BtnLogin = styled.button`
  padding: 13px 32px;
  border-radius: 16px; 
  width: 100%; 
  font-size: 15px;
  line-height: 20px; 
  font-weight: 700;
  text-align: center; 
  color: #ffffff;
  background-color: #5C36FF;
  border-style: solid;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4a2fb5;
  }
`;

const BaseLabelInputDivision = styled.div`
  display: grid;
  gap: 4px;
  label {
    font-size: 15px;
    line-height: 20px; 
    font-weight: 700; 
    color: #566875; 
    padding-left: 16px;
  }
  input {
    height: 40px; 
    padding: 12px; 
    border-radius: 12px; 
    border-width: 1px; 
    border-color: #BBC6CF;
    border-style: solid;
    width: 100%; 
    color: #566875; 
    background-color: #FFFFFF;
    font-size: 18px;
  }
`;

const PasswordLabelInputDivision = styled(BaseLabelInputDivision)`
  position: relative;
  div {
    position: relative;
  }
  input {
    padding-right: 40px; /* Ensure space for the button */
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #4A4A4A; /* Dark grey color */
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
