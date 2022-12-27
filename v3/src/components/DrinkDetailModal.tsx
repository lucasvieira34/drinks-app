import { FlatList, HStack, Text, VStack } from "native-base";
import { ImageBackground, Modal, TouchableOpacity } from "react-native";
import { DrinkModel } from "../types/DrinkModel";
import { CloseIcon } from "./CloseIcon";

interface DrinkDetailModalProps {
  visible: boolean;
  onClose: () => void;
  drink: null | DrinkModel;
}

export function DrinkDetailModal({ visible, onClose, drink }: DrinkDetailModalProps) {
  if (!drink) return null;
  return (
    <Modal
      animationType="slide"
      visible={visible}
      presentationStyle="pageSheet"
      onRequestClose={onClose}
      transparent={false}
    >
      <HStack>
        <ImageBackground
          source={drink?.image}
          style={{
            width: "100%",
            height: 250,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={onClose}
            style={{
              width: 32,
              height: 32,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              margin: 24,
            }}
          >
            <CloseIcon />
          </TouchableOpacity>
        </ImageBackground>
      </HStack>
      <VStack flex={1} paddingTop={8} px={6}>
        <Text fontSize={24} fontFamily="medium">
          {drink?.name}
        </Text>
        <Text color="#666" mt={2} fontSize={15}>
          {drink?.descricao}
        </Text>

        {drink?.receita.length > 0 && (
          <>
            <HStack justifyContent="space-between" mt={6}>
              <Text fontFamily="medium" color="#666" fontSize={16}>
                Receita
              </Text>
              <Text fontFamily="medium" color="#666" fontSize={16}>
                Taça:&nbsp;
                <Text fontFamily="body" color="#fff">
                  {drink.taca}
                </Text>
              </Text>
            </HStack>

            <FlatList
              data={drink.receita}
              keyExtractor={(receita) => receita.id.toString()}
              showsVerticalScrollIndicator={false}
              mt={4}
              renderItem={({ item: receita }) => (
                <VStack
                  p={4}
                  mb={1}
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="rgba(204, 204, 204, 0.3)"
                  borderRadius={10}
                >
                  <HStack alignItems="center">
                    <ImageBackground source={receita.icon} style={{ width: 25, height: 25 }} />
                    <Text fontSize={14} color="#666" ml={5}>
                      {receita.name}
                    </Text>
                  </HStack>
                </VStack>
              )}
            />
          </>
        )}
      </VStack>
    </Modal>
  );
}
