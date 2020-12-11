import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View } from 'react-native';

/
class CreateMeetingScreen extends React.Component() {

    state = {
        Coffeeshop: '',
        Time: '',
        Duration: 0
    }

    handlePress = () => {
        alert.alert(this.state.Coffeeshop, this.state.Time, this.state.Duration)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.title]: e.target.value
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
                <Button title='Create' onPress={handlePress} />
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