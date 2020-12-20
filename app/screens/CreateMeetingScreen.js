import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View, Alert } from 'react-native';

// import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree'

class CreateMeetingScreen extends React.Component {

    state = {
        Coffeeshop: '',
        Time: '',
        Duration: 0
    }
    //Something is not working!! refactor tomorrow
    handlePress = () => {
        Alert.alert(this.state.Coffeeshop, this.state.Time, this.state.Duration)
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.title]: e.currentTarget.value
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
                    <TextInput title='Time' placeholder='enter time' />
                    <Text>duration:</Text>
                    <TextInput title='Duration' placeholder='enter duration' />
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