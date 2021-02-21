import React from 'react'
import { View, StatusBar } from 'react-native'

export default function Container(props) {
    return (
        <View style={{ padding: 16, backgroundColor: props.backgroundColor ?? '#F4F4F4', height: '100%' }}>
            <StatusBar barStyle='dark-content' backgroundColor='#F4F4F4' />
            {props.children}
        </View>
    )
}
