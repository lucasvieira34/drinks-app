import { HStack, Image, Text, VStack } from "native-base";
import { DrinkModel } from "../types/DrinkModel";

interface Props {
  drink: DrinkModel;
}

export function Drink({ drink }: Props) {
  return (
    <HStack>
      <Image source={drink.image} width={23} height={23} rounded="full" alt="Drink" />
      <VStack flex={1} marginLeft={4}>
        <Text fontSize="18px" fontFamily="medium">
          {drink.name}
        </Text>
        <Text fontSize={15} mt={1}>
          {drink.descricao}
        </Text>
      </VStack>
    </HStack>
  );
}
