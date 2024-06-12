"use client";
import { ButtonStyle } from "./styled";

export default function Button({ text, onClick }) {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}
