import { CardWrapper, CardInformation, NumberStyle, TextStyle } from "./styled";

export default function PTOCard({ title, daysCounter, text }) {
  return (
    <CardWrapper>
      <img src="/userIcon.svg" />
      <CardInformation>
        <TextStyle>{title}</TextStyle>
        <TextStyle>
          <NumberStyle>{daysCounter} days</NumberStyle> {text}
        </TextStyle>
      </CardInformation>
    </CardWrapper>
  );
}
