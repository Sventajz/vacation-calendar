"use client";

import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #5c36ff;
  color: #ffffff;
  height: 35px;
  width: 125px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  font-weight: bold;
  &:hover {
    background-color: #ffffff;
    transition: 0.5s;
    color: black;
    border: 1px solid #5c36ff;
  }
`;

export default function Button({ text }) {
  return <ButtonStyle>{text}</ButtonStyle>;
}
