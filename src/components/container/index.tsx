import styled from "styled-components";

type ContainerProps = {
  center?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  align-items: center;
  justify-content: ${({ center }) => (center ? "center" : "auto")};
  margin: 0 auto;
  padding: 32px;
`;
