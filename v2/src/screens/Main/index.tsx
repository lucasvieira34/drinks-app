import { Drinks } from "../../components/Drinks";
import { Header } from "../../components/Header";
import { Container, DrinksContainer } from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <DrinksContainer>
          <Drinks />
        </DrinksContainer>
      </Container>
    </>
  );
}
