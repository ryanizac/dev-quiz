import styled from "styled-components";

export const StyledButton = styled.button<StyledButton.Props>`
  background-color: #${(props) => props.primary};
  border: none;
  border-radius: 8px;
  color: #${({ isWhite }) => (isWhite ? "202020" : "fffcf9")};
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  width: 100%;
  box-shadow: 0px 6px 0px #${(props) => props.secondary};
  cursor: pointer;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export namespace StyledButton {
  export type Props = {
    primary: string;
    secondary: string;
    isWhite: boolean;
  };
}
