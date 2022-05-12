import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Drink({ route, navigation }: any) {
    const { item } = route.params;

    function renderText(item: any) {
        return item.receita.map((value: string) => {
            return <Text key={value} style={styles.itemReceita}>{value}</Text>;
        });
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" style={styles.containerBox}>

                <View style={styles.containerImage}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {renderText(item)}
                </View>

            </Animatable.View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    containerBox: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        marginHorizontal: '5%',
        marginVertical: '10%',
        alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 100,
        elevation: 3,
    },
    containerImage: {
        width: '90%',
        height: '50%',
        marginVertical: 20,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    containerText: {
        flexWrap: 'nowrap',
        width: '90%',
        alignItems: 'center'
    },
    itemName: {
        marginTop: 10,
        marginBottom: 15,
        fontSize: 35,
        fontWeight: '700',
    },
    itemReceita: {
        color: 'gray',
        marginBottom: 10,
        fontWeight: '700',
        fontSize: 20,
    },
})