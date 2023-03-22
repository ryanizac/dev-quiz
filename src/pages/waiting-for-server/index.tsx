import { Container, Info, List, Modal, Title } from "../../components";

export function WaitingForServerPage() {
  return (
    <Container center>
      <Modal center>
        <Title>👨‍💻 Players</Title>
        <List>
          <Info>Ryan</Info>
          <Info>Lucas</Info>
          <Info>Gabriela</Info>
        </List>
      </Modal>
    </Container>
  );
}
