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
        // backgroundColor: '#FFF',
        backgroundColor: 'gray'
    },
    containerBox: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginHorizontal: '5%',
        marginVertical: '10%',
        alignItems: 'center'
    },
    containerImage: {
        // backgroundColor: 'red',
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
        // backgroundColor: 'blue',
        flexWrap: 'nowrap',
        width: '90%',
        alignItems: 'center'
    },
    itemName: {
        // backgroundColor: 'green',
        marginVertical: 10,
        fontSize: 35,
        fontWeight: '700',
    },
    itemReceita: {
        // backgroundColor: 'yellow',
        color: 'gray',
        marginTop: 10,
        fontWeight: '700',
        fontSize: 20,
    },
})