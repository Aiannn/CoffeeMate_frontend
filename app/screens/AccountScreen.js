import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

function AccountScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/coffee-shop-1.jpg')} style={styles.image} />
                <Text>Name</Text>
                <Text>Age</Text>
                <Text>Sex</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
    card: {
        borderWidth: 5,
        backgroundColor: 'brown',
        borderColor: 'green',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300
    }
});

export default AccountScreen;