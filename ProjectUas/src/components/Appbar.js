import React from 'react'
import { Header } from 'react-native-elements'

export default function Appbar(props) {
    return (
        <Header
            leftComponent={
                (!props.back) ?
                    { icon: 'menu', color: '#fff', onPress: () => null, size: 28 }
                    :
                    { icon: 'chevron-back-outline', type: 'ionicon', color: '#fff', onPress: props.back, size: 28 }
            }
            centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 17, marginTop: 3, textAlignVertical: 'center' } }}
            rightComponent={
                (props.search) ?
                    { icon: 'search', size: 28, color: '#fff', onPress: () => null }
                    :
                    { icon: 'check', size: 28, color: '#fff', onPress: props.save }
            }
        />
    )
}
