import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default function FloatingButton(props) {
    return (
        <View style={styles.button}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.container}>
                    <Icon
                        name='ios-pencil'
                        type='ionicon'
                        color='#fff'
                        size={20}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 55,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F89DC',

    }
})
