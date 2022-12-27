import { VStack } from "native-base";
import { DrinksList } from "../components/DrinksList";
import { Header } from "../components/Header";

export function Menu() {
  return (
    <VStack>
      <Header />
      <DrinksList />
    </VStack>
  );
}
