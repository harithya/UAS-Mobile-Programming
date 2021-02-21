import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Label(props) {
    return (
        <View style={props.style}>
            <Text style={styles.font}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Lato-Regular',
        fontSize: 16
    }
})


