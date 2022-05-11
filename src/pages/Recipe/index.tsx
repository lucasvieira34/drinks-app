import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { drinkList } from "./types";

export default function Recipe() {

    const navigation = useNavigation();
    const [drinks, setDrinks] = useState(drinkList)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Text animation="fadeInLeft" delay={500} style={styles.headerMessage}>Opções</Animatable.Text>

                <View style={styles.headerImage}>
                    <Animatable.Image
                        animation="flipInY"
                        delay={600}
                        source={require('../../assets/drinks.png')}
                        style={{ width: '100%', marginLeft: '10%' }}
                        resizeMode="contain"
                    />
                </View>

            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.containerList}>

                <Animatable.View delay={700} animation="bounceInLeft">
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={drinks}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Drink', { item })}>
                                <Text>{item.name}</Text>
                                <Text>{item.descricao}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </Animatable.View>

            </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66CCFF'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '8%',
        paddingStart: '5%',
        height: '10%'
    },
    headerImage: {
        width: '45%'
    },
    headerMessage: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerList: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})