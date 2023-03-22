import styled from "styled-components";
import { Container } from "../../components";

export const StyledContainer = styled(Container)`
  .modal {
    position: relative;
    gap: 64px;
    padding: 64px;
  }

  h1 {
    max-width: 85%;
  }

  button {
    flex: calc(50% - 16px);
    width: auto;
    max-width: 50%;
    height: 60px;
    position: relative;
  }

  button[data-correct-alternative]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    transform: translate(25%, -25%);
  }

  button[data-correct-alternative="true"]::after {
    content: "V";
    background-color: #1fd948;
  }

  button[data-correct-alternative="false"]::after {
    content: "F";
    background-color: #ff5733;
  }
`;
