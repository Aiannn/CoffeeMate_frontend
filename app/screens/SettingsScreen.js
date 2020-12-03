import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

function SettingsScreen(props) {
    return (
        <SafeAreaView>
            <Text>Setting 1</Text>
            <Text>Setting 2</Text>
            <Text>Setting 3</Text>
            <Text>Setting 4</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default SettingsScreen;