import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default function ButtonImage(props) {
    return (
        <View style={styles.button}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.container}>
                    <Icon
                        name='ios-pencil'
                        type='ionicon'
                        color='#fff'
                        size={14}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 35,
        width: 35,
        bottom: 0,
        right: 0,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'absolute',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F89DC',

    }
})
