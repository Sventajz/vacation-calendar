import styled, {css} from 'styled-components';

export const LoginModal = styled.div`
  display: flex; 
  overflow-y: auto; 
  overflow-x: hidden; 
  position: fixed; 
  top: 0; 
  right: 0; 
  left: 0; 
  z-index: 5; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 100%;
`;

export const ModalWindow = styled.div`
  position: relative; 
  min-width: 36%;
  max-width: 90vw;
  height: auto;
`;

export const Wrapper = styled.div`
  border-radius: 24px; 
  width: 100%; 
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  gap: 8px;
  padding: 6px 30px 14px 30px;
`;

export const TitleLogin = styled.h1`
  color: #151A20;
  font-size: 38px;
  line-height: 38px; 
  font-weight: 700;
  margin-bottom: 14px;
  ${({ $isInModal }) =>
    $isInModal &&
    css`
      text-align: center;
    `}
`;

export const FormLogin = styled.form`
  display: grid;
  margin-top: 1rem;
  padding: 1.5rem; 
  gap: 24px;
`;

export const Credentials = styled.div`
  display: grid;
  gap: 10px;
`;

export const FormFields = styled.div`
  display: grid;
  gap: 20px;
`;

export const BtnLogin = styled.button`
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
  ${({ $isInModal }) =>
    $isInModal &&
    css`
      width: 177px;
      margin-left: auto;
    `}
`;

export const BaseLabelInputDivision = styled.div`
  display: grid;
  gap: 4px;
  label {
    font-size: 15px;
    line-height: 20px; 
    font-weight: 700; 
    color: #566875; 
    padding-left: 16px;
  }
  input, select, textarea {
    height: 40px; 
    padding-left: 12px; 
    border-radius: 12px; 
    border-width: 1px; 
    border-color: #BBC6CF;
    border-style: solid;
    width: 100%; 
    color: #566875; 
    background-color: #FFFFFF;
    font-size: 18px;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }
  ${({ $isInModal }) =>
    $isInModal &&
    css`
    background-color: green;
      height: 100px;
    `}
`;

export const PasswordLabelInputDivision = styled(BaseLabelInputDivision)`
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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const ExitButton = styled.button`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #4A4A4A; /* Dark grey color */

  :hover {
  color: #111827; 
  }
`;

export const BackgroundOverlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;