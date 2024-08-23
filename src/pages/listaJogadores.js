import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ListaJogadores = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // não conheço
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'real-madrid'));
                const dataList = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        nascimento: data.nascimento ? new Date(data.nascimento.seconds * 1000).toLocaleDateString() : 'Data não disponível', // Convertendo Timestamp para string
                    };
                });
                setData(dataList);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    // não conheço

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id} NÃO CONHEÇO
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Nome: {item.nome}</Text>
                        <Text style={styles.itemText}>Camisa: {item.camisa}</Text>
                        <Text style={styles.itemText}>Altura: {item.altura}</Text>
                        <Text style={styles.itemText}>Nascimento: {item.nascimento}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        width: '100%',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ListaJogadores;
