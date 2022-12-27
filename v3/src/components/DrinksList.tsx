import { Divider, FlatList, VStack } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { drinkList } from "../mocks/drinks";
import { DrinkModel } from "../types/DrinkModel";
import { Drink } from "./Drink";
import { DrinkDetailModal } from "./DrinkDetailModal";

export function DrinksList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<null | DrinkModel>(null);
  const [drinks, setDrinks] = useState<DrinkModel[]>(drinkList);

  function hadleOpenModal(drink: DrinkModel) {
    setIsModalVisible(true);
    setSelectedDrink(drink);
  }

  return (
    <VStack>
      <DrinkDetailModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} drink={selectedDrink} />
      <FlatList
        data={drinks}
        keyExtractor={(drink) => drink.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => (
          <Divider
            thickness={1}
            my={6}
            style={{
              backgroundColor: "rgba(204, 204, 204, 0.3)",
            }}
          />
        )}
        renderItem={({ item: drink }) => (
          <TouchableOpacity onPress={() => hadleOpenModal(drink)}>
            <Drink drink={drink} />
          </TouchableOpacity>
        )}
      />
    </VStack>
  );
}
