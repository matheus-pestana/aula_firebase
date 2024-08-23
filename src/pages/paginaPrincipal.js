import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const PaginaPrincipal = ({ navigation }) => {

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Tem certeza de que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => {
                        console.log('Logout realizado com sucesso!');
                        navigation.navigate('RealizarLogin');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (

        <View style={styles.container}>
            <Image
                style={styles.furina}
                source={{ uri: 'https://i.redd.it/nclie1y3vyzb1.gif' }}
            />
            <TouchableOpacity style={styles.sair} onPress={() => navigation.navigate('ListaJogadores')}>
                <Text style={styles.sairText}>Lista de jogadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sair} onPress={handleLogout}>
                <Text style={styles.sairText}>Sair</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
        borderRadius: 10,
        gap: 20,
    },

    oi: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
    },

    furina: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
    },

    sair: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
    },

    sairText: {
        color: 'white',
    }
})

export default PaginaPrincipal;