import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default function Button(props) {
    return (
        <View style={props.style}>
            <View style={styles.button}>
                <TouchableNativeFeedback onPress={props.onPress}>
                    <View>
                        <Text style={styles.title}>{props.children}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#ea5455',
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        textAlign: 'center',
        fontSize: 15,
        width: '100%',
        color: 'white',
        fontFamily: 'Lato-Regular'
    }
})
