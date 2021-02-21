import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'


export default function Input(props) {
    return (
        <View>
            <TextInput
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                style={styles.input}
                value={props.value}
                placeholder={props.placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#dadde1',
        marginBottom: 0,
        height: 60,
        paddingHorizontal: 18,

    }
})

