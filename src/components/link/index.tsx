import { StyledLink } from "./styles";

export function Link(props: Link.Props) {
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
}

export namespace Link {
  export type Props = {
    to: string;
    children: string;
  };
}
