import React from 'react';
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView, StyleSheet, Dimensions, Image, View, Button } from 'react-native';

let { height, width } = Dimensions.get('window')

let markers = [
    {
        title: 'Starbucks',
        coordinates: {
            latitude: 45.05540775,
            longitude: -93.32375697
        }
    },
    {
        title: 'Starbucks2',
        coordinates: {
            latitude: 45.09104156,
            longitude: -93.37689209
        }
    }
]

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
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinates}
                        title={marker.title}
                    />
                ))}
            </MapView>
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