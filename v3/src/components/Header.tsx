import { HStack, Image, Text, VStack } from "native-base";

export function Header() {
  return (
    <VStack safeArea>
      <Image source={require("../assets/img/capa.jpg")} alt="Capa" width="full" height={"200px"} />
      <HStack justifyContent="space-between" alignItems="center" margin={6}>
        <Text fontFamily="heading" fontSize="xl">
          DRINK
          <Text fontFamily="body">ONÉ</Text>
        </Text>
        <Text opacity={0.3}>by Lucas Teixeira</Text>
      </HStack>
    </VStack>
  );
}
