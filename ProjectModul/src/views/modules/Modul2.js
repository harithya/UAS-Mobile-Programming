import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Modul2() {
    return (
        <View style={styles.flex}>
            <Text style={styles.title}>Modul 2</Text>
            <Text style={styles.subTitle}>merubah background dengan warna pink</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Lato-Regular'
    },
    flex: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        flex: 1,
    },
    subTitle: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Lato-Regular'
    }
})
