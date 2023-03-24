import { getColorByPosition } from "../../util";
import { Container, Points } from "./styles";

export function PositionCard(props: PositionCard.Props) {
  return (
    <Container color={getColorByPosition(props.position)}>
      {props.position}º {props.name} <Points>{props.points}pt</Points>
    </Container>
  );
}

export namespace PositionCard {
  export type Props = {
    position: number;
    points: number;
    name: string;
  };
}
