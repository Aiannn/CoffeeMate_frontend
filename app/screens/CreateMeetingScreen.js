import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View } from 'react-native';

function CreateMeetingScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Create new Meeting</Text>
            <View style={styles.form}>
                <Text>Coffeeshop:</Text>
                <TextInput title='Coffeeshop' placeholder='enter coffeeshop' />
                <Text>Time:</Text>
                <TextInput title='Time' placeholder='enter time' />
                <Text>duration:</Text>
                <TextInput title='Duration' placeholder='enter duration' />
            </View>
            <Button title='Create' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    form: {
        marginTop: 50
    }
});

export default CreateMeetingScreen;