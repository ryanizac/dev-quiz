import styled, { keyframes } from "styled-components";
import { mappedColors } from "../../theme";

const animation = keyframes`
  from {
    top: 0;
  }

  to {
    top: 100%;
  }
`;

type ContainerProps = {
  run?: boolean;
  value?: number;
};

export const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #${mappedColors.orange.secondary};
  border: 6px solid #${mappedColors.orange.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(25%, -25%);
  color: white;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #${mappedColors.orange.primary};
    animation: ${({ run }) => (run ? animation : "none")};
    animation-duration: ${({ value = 0 }) => value}s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;
