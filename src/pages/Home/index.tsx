import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Menu Drink's</Text>
                <Text style={styles.subtitle}>Lucas Teixeira @ Copyright 2022</Text>

                <Animatable.View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Recipe')}>
                        <Text style={styles.buttonText}>Opções</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Recipe')}>
                        <Text style={styles.buttonText}>Receitas</Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Text style={styles.footer}>Lucas Teixeira @ Copyright 2022</Text>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA8021'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FA8021',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    subtitle: {
        color: '#A1A1A1',
    },
    footer: {
        color: '#A1A1A1',
        marginTop: '4%',
        alignSelf: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: '5%',
    },
    button: {
        backgroundColor: '#FA8021',
        margin: 5,
        borderRadius: 50,
        paddingStart: 8,
        width: '45%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})