import React, { useState, useEffect, useReducer } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, Text, Button, TextInput, View, Alert, ScrollView } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker'

import MapView, { Marker, Callout } from 'react-native-maps'

let { height, width } = Dimensions.get('window')

function CreateMeetingScreen() {

    const [location, setLocation] = useState() //I should use location state to set up initial Region

    const getLocation = async () => {
        const { granted } = await Location.requestPermissionsAsync()
        if (!granted) return
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync()
        setLocation({ latitude, longitude })
    }

    useEffect(() => {
        getLocation()
    }, [])

    const [marker, setMarker] = useState()

    const handlePress = (e) => {
        setMarker(e.nativeEvent.coordinate)
    }

    const [time, setTime] = useState()
    const [duration, setDuration] = useState()

    // const submitHandler = () => {
    //     fetch('http://localhost:3000/meetings', {
    //         method: 'POST',
    //         headers: {
    //             'accept': 'application/json',
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             longitude: marker.longitude,
    //             latitude: marker.latitude,
    //             time: 
    //         })
    //     })
    // }

    //////DATETIMEPICKER BLOCK
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    ///////////


    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                onPress={handlePress}
                initialRegion={{
                    latitude: 40.730610,
                    longitude: -73.935242,
                    // latitude: location.latitude,
                    // longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                <Marker
                    coordinate={marker}
                    title='Meeting'
                >
                    <Callout style={{ flex: 1, position: 'relative', height: 400, width: 250 }}>
                        {/* <TextInput defaultValue={time} onChangeText={text => setTime(text)} placeholder='Time' title='Time' />
                        <TextInput defaultValue={duration} onChangeText={text => setDuration(text)} placeholder='Duration' title='Duration' /> */}
                        <View>
                            <View>
                                <Button onPress={showDatepicker} title="Show date picker!" />
                            </View>
                            <View>
                                <Button onPress={showTimepicker} title="Show time picker!" />
                            </View>
                            {show && (
                                // <ScrollView>
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={selectedDate => onChange(selectedDate)}
                                />
                                // </ScrollView>
                            )}
                            <Button title='Submit' onPress={() => console.log(marker)} />
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

export default CreateMeetingScreen;