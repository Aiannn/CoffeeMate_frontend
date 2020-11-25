import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';


function OpeningScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>CoffeeMate</Text>
            <TextInput
                placeholder='Email' />
            <TextInput
                placeholder='Password' />
            <Button title='Log In' onPress={() => navigation.navigate('Register')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});

export default OpeningScreen;