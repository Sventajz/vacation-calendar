import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
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
  ExitButton,
  BackgroundOverlay,
} from "./styled.js";

const ReusableModal = ({ isLogin, isPtoRequest, onClose, onSubmit }) => {
  const [leaveType, setLeaveType] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [explanation, setExplanation] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(username, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <BackgroundOverlay $isVisible={isPtoRequest} />
      <LoginModal>
        <ModalWindow>
          <Wrapper>
            <FormLogin onSubmit={isLogin ? handleLoginSubmit : handlePtoSubmit}>
              <Credentials>
                <TitleLogin>{isLogin ? "PTO System" : "New PTO"}</TitleLogin>
                {isPtoRequest && (
                  <ExitButton onClick={onClose}>
                    <FontAwesomeIcon icon={faWindowClose} />
                  </ExitButton>
                )}
                <FormFields>
                  {isLogin ? (
                    <>
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
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                            />
                          </button>
                        </div>
                      </PasswordLabelInputDivision>
                    </>
                  ) : (
                    <>
                      <BaseLabelInputDivision>
                        <label htmlFor="leave_type">LEAVE TYPE</label>
                        <select
                          id="leave_type"
                          value={leaveType}
                          onChange={(e) => setLeaveType(e.target.value)}
                          required
                        >
                          <option value="">Select leave type</option>
                          <option value="Godišnji_odmor">Godišnji odmor</option>
                          <option value="Bolovanje">Bolovanje</option>
                          <option value="Rodiljni dopust">
                            Rodiljni dopust
                          </option>
                          <option value="Komplikacije">Komplikacije</option>
                        </select>
                      </BaseLabelInputDivision>
                      <BaseLabelInputDivision>
                        <label htmlFor="date_start">PTO START</label>
                        <input
                          type="date"
                          id="date_start"
                          value={dateStart}
                          onChange={(e) => setDateStart(e.target.value)}
                          required
                        />
                      </BaseLabelInputDivision>
                      <BaseLabelInputDivision>
                        <label htmlFor="date_end">PTO END</label>
                        <input
                          type="date"
                          id="date_end"
                          value={dateEnd}
                          onChange={(e) => setDateEnd(e.target.value)}
                          required
                        />
                      </BaseLabelInputDivision>
                      <BaseLabelInputDivision>
                        <label htmlFor="explanation">
                          EXPLANATION (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          id="explanation"
                          value={explanation}
                          onChange={(e) => setExplanation(e.target.value)}
                        />
                      </BaseLabelInputDivision>
                    </>
                  )}
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </FormFields>
              </Credentials>
              <BtnLogin type="submit" $isInModal={isPtoRequest}>
                {isLogin ? "Log in" : "Request PTO"}
              </BtnLogin>
            </FormLogin>
          </Wrapper>
        </ModalWindow>
      </LoginModal>
    </>
  );
};

export default ReusableModal;
