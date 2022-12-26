import { useState } from "react";
import { FlatList } from "react-native";
import { Drink } from "../../model/Drink";
import { drinkList } from "../../types/drinks";
import { DetailsModal } from "../DetailsModal";
import { Text } from "../Text";
import { DrinkContainer, Image, DrinkDetails, Separator } from "./styles";

export function Drinks() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [selectedDrink, setSelectedDrink] = useState<null | Drink>(null);
  const [drinks, setDrinks] = useState<Drink[]>(drinkList);

  function hadleOpenModal(drink: any) {
    setIsModalVisible(true);
    setSelectedDrink(drink);
  }

  return (
    <>
      <DetailsModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} drink={selectedDrink} />
      <FlatList
        data={drinks}
        keyExtractor={(drink) => drink.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item: drink }) => (
          <DrinkContainer onPress={() => hadleOpenModal(drink)}>
            <Image source={drink.image}></Image>
            <DrinkDetails>
              <Text size={18} weight="600">
                {drink.name}
              </Text>
              <Text size={15} style={{ marginTop: 5 }}>
                {drink.descricao}
              </Text>
            </DrinkDetails>
          </DrinkContainer>
        )}
      />
    </>
  );
}
