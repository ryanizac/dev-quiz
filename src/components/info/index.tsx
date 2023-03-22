import styled from "styled-components";

export const Info = styled.div`
  border: 2px solid #202020;
  border-radius: 8px;
  color: #202020;
  font-size: 20px;
  text-align: center;
  height: 40px;
  min-width: 250px;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;
