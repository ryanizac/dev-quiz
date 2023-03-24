import { useNavigate } from "react-router-dom";
import { Button, ButtonArea, List, Modal, Title } from "../../components";
import { PositionCard } from "../../components/position-card";
import { StyledContainer } from "./styles";

export function RankingPage() {
  const navigate = useNavigate();

  function exit() {
    navigate("/");
  }

  return (
    <StyledContainer center>
      <Modal>
        <Title>👑 Ranking</Title>
        <List>
          <PositionCard position={1} name="Ryan" points={2120812} />
          <PositionCard position={2} name="Lucas" points={1120812} />
          <PositionCard position={3} name="Gabriela" points={120812} />
        </List>
        <ButtonArea gapScale={1} wrap={false}>
          <Button>Show all</Button>
          <Button color="black" onClick={exit}>
            Exit
          </Button>
        </ButtonArea>
      </Modal>
    </StyledContainer>
  );
}
