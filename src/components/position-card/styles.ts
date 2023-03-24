import styled from "styled-components";
import { ColorKey, mappedColors } from "../../theme";

type ContainerProps = {
  color: ColorKey;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #${({ color }) => mappedColors[color].primary};
  color: #${mappedColors.white.primary};
  padding: 8px 32px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 20px;
  min-width: 300px;
`;

export const Points = styled.div`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
`;
