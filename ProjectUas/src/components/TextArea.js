import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function TextArea(props) {
    return (
        <View>
            <TextInput
                onChangeText={props.onChangeText}
                style={styles.input}
                multiline={true}
                value={props.value}
                numberOfLines={4}
                placeholder={props.placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#dadde1',
        marginBottom: 5,
        marginTop: 10,
        textAlignVertical: 'top',
        paddingHorizontal: 18,
    }
})
