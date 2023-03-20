import { Link } from "../link";
import { Container, LinkArea, Message } from "./styles";

export function Footer() {
  return (
    <Container>
      <Message>Connect to the server and play with your friends now!</Message>
      <LinkArea>
        <Link to="/terms">Terms</Link>
        {" | "}
        <Link to="/privacy">Privacy</Link>
      </LinkArea>
    </Container>
  );
}
