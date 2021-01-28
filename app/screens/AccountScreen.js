import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker'

function AccountScreen(props) {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('settings')}>
                <View style={styles.settings}>
                    <MaterialCommunityIcons name='settings' size={30} />
                </View>
            </TouchableOpacity>
            <View style={styles.card}>
                <Image source={require('../../assets/coffee-shop-1.jpg')} style={styles.image} />
                <Text>Name</Text>
                <Text>Age</Text>
                <Text>Sex</Text>
                <Text>Meetings:</Text>
                <Text>Rating:</Text>
                {/* <View>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                    <Button onPress={showTimepicker} title="Show time picker!" />
                </View> */}
                {show && (
                    <View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="spinner"
                            onChange={onChange}
                        />
                    </View>
                )}
                <Button title='Submit' onPress={() => console.log(marker)} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
    card: {
        borderWidth: 5,
        borderColor: 'green',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300
    },
    settings: {
        alignItems: 'flex-end'
    }
});

export default AccountScreen;