import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar, Animated } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { drinkList } from "./types";

export default function Drinks() {

    const scrollY = React.useRef(new Animated.Value(0)).current;

    const navigation = useNavigation();
    const [drinks, setDrinks] = useState(drinkList)
    const ITEM_SIZE = 70 + 20 * 3

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
                    <Animated.FlatList
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true }
                        )}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={drinks}
                        renderItem={({ item, index }) => {

                            const inputRange = [
                                -1,
                                0,
                                ITEM_SIZE * index,
                                ITEM_SIZE * (index + 2)
                            ]
                            const opacityInputRange = [
                                -1,
                                0,
                                ITEM_SIZE * index,
                                ITEM_SIZE * (index + 1)
                            ]
                            const scale = scrollY.interpolate({
                                inputRange,
                                outputRange: [1, 1, 1, 0]
                            })
                            const opacity = scrollY.interpolate({
                                inputRange: opacityInputRange,
                                outputRange: [1, 1, 1, 0]
                            })

                            return <Animated.View style={[styles.item, { opacity, transform: [{ scale }] }]}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.containerImage}>
                                            <Image
                                                source={item.image}
                                                style={styles.itemImage}
                                            />
                                        </View>
                                        <View style={styles.containerText}>
                                            <Text style={styles.itemName}>{item.name}</Text>
                                            <Text style={styles.itemDescricao}>{item.descricao}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        }}
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
        paddingEnd: '5%',
        paddingBottom: 24
    },
    item: {
        marginTop: 24,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 100,
        elevation: 3,
        backgroundColor: '#F5F5F5',
    },
    containerText: {
        marginVertical: 20,
        width: '75%',
        flexWrap: 'nowrap'
    },
    itemName: {
        fontSize: 22,
        fontWeight: '700'
    },
    itemDescricao: {
        fontSize: 17,
        opacity: .4,
    },
    containerImage: {
        marginVertical: 20,
        marginHorizontal: 10,
        width: 60,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    }
})