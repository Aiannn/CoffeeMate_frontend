import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function AccountScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Your Account Information</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AccountScreen;