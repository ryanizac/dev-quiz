import styled from "styled-components";

type ButtonAreaProps = {
  wrap?: boolean;
  gapScale?: number;
};

export const ButtonArea = styled.div<ButtonAreaProps>`
  flex: 1;
  display: flex;
  flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "no-wrap")};
  gap: ${({ gapScale = 2 }) => gapScale * 16}px;
`;
