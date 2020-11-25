import React from 'react';
import MapView from 'react-native-maps'
import { SafeAreaView, StyleSheet, Dimensions, Image, View, Button } from 'react-native';

let { height, width } = Dimensions.get('window')

function CoffeeMeetingsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 40.730610,
                    longitude: -73.935242,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </SafeAreaView>
    );
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

export default CoffeeMeetingsScreen;