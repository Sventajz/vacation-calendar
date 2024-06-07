import { CardWrapper, CardInformation } from "./styled";

export default function PTOCard({ title, daysCounter }) {
  return (
    <CardWrapper>
      <img src="/userIcon.svg" />
      <CardInformation>
        <p>{title}</p>
        <p>{daysCounter} (from last year)</p>
      </CardInformation>
    </CardWrapper>
  );
}
