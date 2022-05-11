import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar } from "react-native";
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
                            <View style={styles.item}>
                                <TouchableOpacity onPress={() => navigation.navigate('Drink', { item })}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{ width: 70, height: 70, borderRadius: 70, marginRight: 10 }}
                                        />
                                        <View>
                                            <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 18, opacity: .7 }}>{item.descricao}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white'
    }
})