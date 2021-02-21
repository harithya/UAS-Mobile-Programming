import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Wrapper(props) {
    return (
        <View style={styles.wrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})
