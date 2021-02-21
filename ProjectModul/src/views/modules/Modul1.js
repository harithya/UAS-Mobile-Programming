import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Container from '../../components/Container'

export default function Modul1() {
    return (
        <Container>
            <View style={styles.flex}>
                <Text style={styles.title}>Hello world</Text>
                <Text style={styles.subTitle}>Ini adalah program pertama</Text>
            </View>
        </Container>
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
        flex: 1,
    },
    subTitle: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Lato-Regular'
    }
})
