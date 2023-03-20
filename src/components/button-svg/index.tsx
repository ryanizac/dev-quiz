import { svg } from "../../data";
import { Button } from "../button";
import { SvgImage, StyledButton } from "./styles";

export function ButtonSVG(props: ButtonSVG.Props) {
  const svgSrc = svg[props.svg];

  return (
    <StyledButton color={props.color}>
      {props.children}
      <SvgImage src={svgSrc} />
    </StyledButton>
  );
}

export namespace ButtonSVG {
  export type Props = Button.Props & {
    children: string;
    svg: keyof typeof svg;
  };
}
