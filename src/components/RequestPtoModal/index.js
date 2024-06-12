import styles from "./styles.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
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
  ExitButton
} from '../Login/styled_components.js';
 
const CalendarModal = ({ onClose }) => {
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
      // Logic for logging in
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => {
    // Close modal logic here
    onClose();
  };

  return (
    <LoginModal>
      <ModalWindow>
        <Wrapper>
          <FormLogin onSubmit={handleLogin}>
            <Credentials>
              <TitleLogin  $isInModal={true}>New PTO</TitleLogin>
              <ExitButton onClick={handleClose}>
                <FontAwesomeIcon icon={ faWindowClose } />
              </ExitButton>
              <FormFields>
                <BaseLabelInputDivision>
                  <label htmlFor="leave_type">LEAVE TYPE</label>
                  <select id="leave_type" required>
                    <option value="Godišnji_odmor">Godišnji odmor</option>
                    <option value="Bolovanje">Bolovanje</option>
                    <option value="Rodiljni dopust">Rodiljni dopust</option>
                    <option value="Komplikacije">Komplikacije</option>
                  </select>
                </BaseLabelInputDivision>
                <BaseLabelInputDivision>
                  <label htmlFor="date_start">PTO START</label>
                  <input
                    type="date"
                    id="date_start"
                    required
                  />
                </BaseLabelInputDivision>
                <BaseLabelInputDivision>
                  <label htmlFor="date_end">PTO END</label>
                  <input
                    type="date"
                    id="date_end"
                    required
                  />
                </BaseLabelInputDivision>
                <PasswordLabelInputDivision>
                  <label htmlFor="explanation">EXPLANATION (OPTIONAL)</label>
                    <input
                      type="text"
                      id="explanation"
                    />
                </PasswordLabelInputDivision>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </FormFields>
            </Credentials>
            <BtnLogin type="submit" $isInModal={true}>Request PTO</BtnLogin>
          </FormLogin>
        </Wrapper>
      </ModalWindow>
    </LoginModal>
  );
};

export default CalendarModal;
