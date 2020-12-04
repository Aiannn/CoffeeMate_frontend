import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

function SettingsScreen(props) {
    return (
        <SafeAreaView>
            <Text>Edit profile</Text>
            <Text>General</Text>
            <Text>Change theme</Text>
            <Text>About</Text>
            <Text>Sigh out</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default SettingsScreen;