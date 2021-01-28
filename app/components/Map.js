import React, { useEffect, useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import * as Location from 'expo-location'

import { SafeAreaView, StyleSheet, Dimensions, View, Image, Text } from 'react-native'

let { height, width } = Dimensions.get('window')

let markerArray = [
    {
        latitude: 40.758896,
        longitude: -73.985130
    },
    {
        latitude: 40.748817,
        longitude: -73.985428
    },
    {
        latitude: 40.712742,
        longitude: -74.013382
    }
]
// It is all custom markers, I need to use Google/Apple coffeeshop markers!

export default function Map() {

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

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 40.730610,
                    longitude: -73.935242,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                {markerArray.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker}
                        title='Coffee'
                        description='Good coffee'
                    />
                )
                )}
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
})