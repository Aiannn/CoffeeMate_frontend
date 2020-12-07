import React from 'react';
import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View } from 'react-native';

const handlePress = () => {
    alert(CoffeeShop)
}
//need to refactor tomorrow
function CreateMeetingScreen(props) {

    const [CoffeeShop, setCoffeeShop] = useState()
    const [Time, setTime] = useState()
    const [Duration, setDuration] = useState()

    return (
        <SafeAreaView style={styles.container}>
            <Text>Create new Meeting</Text>
            <View style={styles.form}>
                <Text>Coffeeshop:</Text>
                <TextInput value={CoffeeShop} title='Coffeeshop' placeholder='enter coffeeshop' onChangeText={setCoffeeShop()} />
                <Text>Time:</Text>
                <TextInput title='Time' placeholder='enter time' />
                <Text>duration:</Text>
                <TextInput title='Duration' placeholder='enter duration' />
            </View>
            <Button title='Create' onPress={handlePress} />
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