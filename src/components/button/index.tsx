import { ReactNode } from "react";
import { mappedColors } from "../../theme";
import { StyledButton } from "./styles";

export function Button({ color = "orange", ...props }: Button.Props) {
  const themeColor = mappedColors[color];

  return (
    <StyledButton
      primary={themeColor.primary}
      secondary={themeColor.secondary}
      onClick={props.onClick}
      isWhite={color === "white"}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
}

export namespace Button {
  export type Props = {
    children: ReactNode | ReactNode[];
    color?: keyof typeof mappedColors;
    onClick?: () => void;
    className?: string;
  };
}
