import React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <TextInput placeholder='Username' />
            <TextInput placeholder='Password' />
            <Button title='Register' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default RegisterScreen;