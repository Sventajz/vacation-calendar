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

const LoginForm = () => {
  return (
    <LoginModal>
      <ModalWindow>
        <Wrapper>
          <FormLogin>
            <Credentials>
              <TitleLogin>PTO System</TitleLogin>
              <FormFields>
                <BaseLabelInputDivision>
                  <label htmlFor="username">USER NAME</label>
                  <input type="text" id="username" required />
                </BaseLabelInputDivision>
                <PasswordLabelInputDivision>
                  <label htmlFor="password">PASSWORD</label>
                  <div>
                    <input id="password" required />
                    <button type="button">
                      <FontAwesomeIcon />
                    </button>
                  </div>
                </PasswordLabelInputDivision>
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
