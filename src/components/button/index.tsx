import { ReactNode } from "react";
import { mappedColors } from "../../theme";
import { StyledButton } from "./styles";

export function Button({
  color = "orange",
  children,
  className,
  onClick,
  ...props
}: Button.Props) {
  const themeColor = mappedColors[color];

  return (
    <StyledButton
      primary={themeColor.primary}
      secondary={themeColor.secondary}
      onClick={onClick}
      isWhite={color === "white"}
      className={className}
      {...props}
    >
      {children}
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
