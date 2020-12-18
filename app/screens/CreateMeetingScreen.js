import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View, Alert } from 'react-native';


class CreateMeetingScreen extends React.Component {

    state = {
        Coffeeshop: '',
        Time: '',
        Duration: 0
    }
    //Something is not working!! refactor tomorrow
    // handlePress = () => {
    //     Alert.alert(this.state.Coffeeshop)
    // }

    // handleChange = () => {
    //     this.setState({
    //         Coffeeshop: this.state.Coffeeshop
    //         //[e.target.title]: e.target.value  || what is event analogy in React Native
    //     })
    // }
    render() {
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
        )
    }
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