"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LoginModal,
  ModalWindow,
  Wrapper,
  FormLogin,
  Credentials,
  TitleLogin,
  FormFields,
  BaseLabelInputDivision,
  PasswordLabelInputDivision,
  BtnLogin,
  ErrorMessage,
} from "./styled_components.js";
import { useState } from "react";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      window.location.href = "/dashboard/welcome";
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
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="button" onClick={handlePasswordToggle}>
                      <FontAwesomeIcon />
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
