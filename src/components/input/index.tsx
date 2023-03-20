import { StyledInput } from "./styles";

export function Input(props: Input.Props) {
  return (
    <StyledInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue?.(e.target.value)}
    />
  );
}

export namespace Input {
  export type Props = {
    placeholder?: string;
    value?: string;
    setValue?: (newValue: string) => void;
  };
}
