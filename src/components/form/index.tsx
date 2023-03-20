import { ReactNode } from "react";
import { Container } from "./styles";

export function Form(props: Form.Props) {
  return <Container>{props.children}</Container>;
}

export namespace Form {
  export type Props = {
    children?: ReactNode | ReactNode[];
  };
}
