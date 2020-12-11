import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View, Alert } from 'react-native';


class CreateMeetingScreen extends React.Component() {

    state = {
        Coffeeshop: '',
        Time: '',
        Duration: 0
    }
    //Something is not working!! refactor tomorrow
    handlePress = () => {
        Alert.alert(this.state.Coffeeshop)
    }

    handleChange = () => {
        this.setState({
            Coffeeshop: this.state.Coffeeshop
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Create new Meeting</Text>
                <View style={styles.form}>
                    <Text>Coffeeshop:</Text>
                    <TextInput value={this.state.Coffeeshop} title='Coffeeshop' placeholder='enter coffeeshop' onChangeText={this.handleChange} />
                    <Text>Time:</Text>
                    <TextInput value={this.state.Time} title='Time' placeholder='enter time' onChangeText={this.handleChange} />
                    <Text>duration:</Text>
                    <TextInput value={this.state.Duration} title='Duration' placeholder='enter duration' onChangeText={this.handleChange} />
                </View>
                <Button title='Create' onPress={this.handlePress} />
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