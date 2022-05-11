import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Recipe() {

    const navigation = useNavigation();
    const [drinks, setDrinks] = useState([
        {
            id: '1',
            name: 'Bramble',
            descricao: 'gin, açúcar, limão siciliano e licor de amora.',
            receita: '50ml gin, 25ml açúcar, 25ml limão siciliano, 20ml licor de amora.'
        },
        {
            id: '2',
            name: 'Lagoa Azul',
            descricao: 'vodka, curaçau blue, limão, açúcar e sprite.',
            receita: '50ml vodka, 25ml curaçau blue, 25ml limão, 10ml açúcar e 60ml sprite.'
        },
        {
            id: '3',
            name: 'Lagoa Verde',
            descricao: 'vodka, limão siciliano, suco de abacaxi e licor de menta.',
            receita: '60ml vodka, 20ml limão siciliano, 150ml suco de abacaxi e 20ml licor de menta.'
        },
        {
            id: '4',
            name: 'Alexander',
            descricao: 'conhaque, creme de leite e creme de cacau.',
            receita: '30 ml conhaque, 30ml creme de leite e 30ml creme de cacau.'
        },
    ])

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

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={drinks}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Drink', { item })}>
                            <Text style={styles.item}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />

            </Animatable.View>
        </View>
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
    list: {
        backgroundColor: 'gray',
        marginTop: '10%'
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    },
    modalToggle: {
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modal: {
        flex: 1
    }
})