import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

function AccountScreen(props) {
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
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
    card: {
        borderWidth: 5,
        backgroundColor: 'brown',
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