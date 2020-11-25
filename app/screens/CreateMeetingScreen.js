import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function CreateMeetingScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Create new Meeting</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default CreateMeetingScreen;