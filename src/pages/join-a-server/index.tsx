import { useState } from "react";
import {
  Button,
  Container,
  Footer,
  Form,
  Header,
  Input,
  Logo,
  Modal,
} from "../../components";
import { ButtonSVG } from "../../components/button-svg";

export function JoinAServerPage() {
  const [nickname, setNickname] = useState("");
  const [server, setServer] = useState("");

  return (
    <Container>
      <Header>
        <ButtonSVG color="white" svg="downloadSvg">
          Download Server
        </ButtonSVG>
      </Header>
      <Modal>
        <Logo />
        <Form>
          <Input
            placeholder="nickname"
            value={nickname}
            setValue={setNickname}
          />
          <Input placeholder="server" value={server} setValue={setServer} />
        </Form>
        <Button>Join</Button>
      </Modal>
      <Footer />
    </Container>
  );
}
