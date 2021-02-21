import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function Select(props) {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text style={(props.selectedValue == '') ? styles.placeholder : styles.value}>{
                (props.selectedValue == '')
                    ? 'Jurusan' :
                    (props.selectedValue == 1) ? 'S1 Teknik Informatika' : 'D3 Komputer Akuntansi'
            }</Text>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
                style={styles.select}
            >
                <Picker.Item label="Jurusan" value="" />
                <Picker.Item label="S1 Teknik Informatika" value="1" />
                <Picker.Item label="D3 Komputer Akuntansi" value="2" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#dadde1',
        marginBottom: 0,
        paddingHorizontal: 18,
        height: 66,
    },
    select: {
        color: 'transparent',
        marginTop: 5,
    },
    value: {
        color: '#505050',
        left: 18,
        top: 20,
        fontSize: 14,
        position: 'absolute',
    },
    placeholder: {
        color: '#969696',
        left: 18,
        fontSize: 14,
        top: 20,
        position: 'absolute',
    }
})
