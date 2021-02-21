import React from 'react'
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import Right from '../assets/img/right.png'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <TouchableNativeFeedback onPress={props.onPress} >
                <View style={styles.flex}>
                    <View>
                        <Text style={styles.title}>Modul {props.data.id}</Text>
                        <Text style={styles.subttile}>{props.data.description}</Text>
                    </View>
                    <View>
                        <Image source={Right} style={styles.icon} />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    flex: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Lato-Regular'
    },
    subttile: {
        color: '#6c757d',
        fontFamily: 'Lato-Regular'
    },
    icon: {
        height: 13,
        width: 13,
        resizeMode: 'contain'
    }
})
