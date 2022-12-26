import { FlatList, Modal } from "react-native";
import { Drink } from "../../model/Drink";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { CloseButton, Header, Icon, Image, Item, ModalBody, ReceitaContainer, ReceitaHeader } from "./styles";

interface DetailsModalProps {
  visible: boolean;
  onClose: () => void;
  drink: null | Drink;
}

export function DetailsModal({ visible, onClose, drink }: DetailsModalProps) {
  if (!drink) return null;
  return (
    <>
      <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
        <Image source={drink.image}>
          <CloseButton onPress={onClose}>
            <Close />
          </CloseButton>
        </Image>

        <ModalBody>
          <Header>
            <Text size={24} weight="600">
              {drink.name}
            </Text>
            <Text color="#666" style={{ marginTop: 8 }}>
              {drink.descricao}
            </Text>
          </Header>

          {drink.receita.length > 0 && (
            <ReceitaContainer>
              <ReceitaHeader>
                <Text weight="600" color="#666">
                  Receita
                </Text>
                <Text weight="600" color="#666">
                  Taça:&nbsp;
                  <Text>{drink.taca}</Text>
                </Text>
              </ReceitaHeader>

              <FlatList
                data={drink.receita}
                keyExtractor={(receita) => receita.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 16 }}
                renderItem={({ item: receita }) => (
                  <Item>
                    <Icon source={receita.icon}></Icon>
                    <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                      {receita.name}
                    </Text>
                  </Item>
                )}
              />
            </ReceitaContainer>
          )}
        </ModalBody>
      </Modal>
    </>
  );
}
