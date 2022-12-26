import { Text } from "../Text";
import { Container, Image, Title, Author } from "./styles";

export function Header() {
  return (
    <>
      <Image source={require("../../assets/img/capa.jpg")} resizeMode="cover"></Image>
      <Container>
        <Title>
          <Text size={24} weight="700">
            DRINK
            <Text size={24}>ONÉ</Text>
          </Text>
        </Title>
        <Author>
          <Text size={14} opacity={0.5}>
            by Lucas Teixeira
          </Text>
        </Author>
      </Container>
    </>
  );
}
