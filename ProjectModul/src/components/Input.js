import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Input(props) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            {props.textarea ?
                <TextInput
                    value={props.value}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textarea}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder} />
                :
                <TextInput
                    value={props.value}
                    style={styles.input}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 20,
        borderRadius: 5,
        fontFamily: 'Lato-Regular',
    },
    textarea: {
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 20,
        borderRadius: 5,
        fontFamily: 'Lato-Regular',
        textAlignVertical: 'top',
        paddingTop: 18
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Lato-Regular'
    },
})
