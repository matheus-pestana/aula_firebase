import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tentarLogar = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('PaginaPrincipal')
            })
            .catch(error => {
                console.error('Erro no login:', error);
            });
    }

    return (

        <ImageBackground
            source={require('../assets/furina.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#aaa'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Senha'
                    placeholderTextColor='#aaa'
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={tentarLogar}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );

}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },

    container: {
        marginHorizontal: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        borderRadius: 10,
    },

    header: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    input: {
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        color: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#1e90ff',
    },

    button: {
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },

    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    },

})

export default RealizarLogin;