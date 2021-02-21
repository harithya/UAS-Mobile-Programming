import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Container(props) {
    return (
        <View style={(props.padding) ? styles.padding : styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    padding: {
        width: '100%',
        flex: 1,
        paddingVertical: 10,
    },

})