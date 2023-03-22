import styled from "styled-components";

type ModalProps = {
  center?: boolean;
};

export const Modal = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "auto")};
  background-color: #fffcf9;
  color: #202020;
  padding: 64px 32px;
  border-radius: 16px;
  gap: 32px;
`;
