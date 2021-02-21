import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Label from '../../components/Label'

export default function Modul3() {

    const [nim, setNim] = useState(0)
    const [name, setName] = useState(0)
    const [address, setAddress] = useState(0)
    const [active, setActive] = useState(false)

    return (
        <Container backgroundColor="white">
            <View style={styles.formGroup}>
                <Input
                    label="Nim"
                    onChangeText={(text) => setNim(text)}
                    placeholder="Masukan jawaban anda" />
            </View>
            <View style={styles.formGroup}>
                <Input
                    label="Nama Lengkap"
                    onChangeText={(text) => setName(text)}
                    placeholder="Masukan jawaban anda" />
            </View>
            <View style={styles.formGroup}>
                <Input
                    onChangeText={(text) => setAddress(text)}
                    label="Alamat"
                    placeholder="Masukan jawaban anda"
                    textarea={true} />
            </View>
            <View style={styles.flex}>
                <Button onPress={() => setActive(true)} style={{ marginRight: 16 }}>Simpan</Button>
                <Button style={{ marginRight: 16 }}>Hapus</Button>
                <Button style={{ marginRight: 16 }}>Keluar</Button>
            </View>

            {(active) ?
                <View style={styles.results}>
                    <Label style={styles.mb}>Nim : {nim}</Label>
                    <Label style={styles.mb}>Nama : {name}</Label>
                    <Label style={styles.mb}>Alamat : {address}</Label>
                </View>
                : null
            }




        </Container>
    )
}

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 20
    },
    flex: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'Lato-Regular'
    },
    mb: {
        marginBottom: 10
    },
    results: {
        backgroundColor: '#e7eaf5',
        padding: 15,
        borderRadius: 10,
        marginTop: 20
    }

})
