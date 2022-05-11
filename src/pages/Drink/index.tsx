import { View, Text, TouchableOpacity } from "react-native";

export default function Drink({ route, navigation }: any) {
    const { item } = route.params;
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.receita}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}