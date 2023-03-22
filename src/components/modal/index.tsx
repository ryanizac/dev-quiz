import styled from "styled-components";

type ModalProps = {
  center?: boolean;
  gapScale?: number;
};

export const Modal = styled.div.attrs({
  className: "modal",
})<ModalProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "auto")};
  background-color: #fffcf9;
  color: #202020;
  padding: 64px 32px;
  border-radius: 16px;
  gap: ${({ gapScale = 1 }) => gapScale * 32}px;
`;
