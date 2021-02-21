import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function Loader() {
    return (
        <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999999, top: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='gray' size='large' />
        </View>
    )
}
