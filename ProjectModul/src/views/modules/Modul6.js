import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../../components/Input'
import Container from '../../components/Container'
import Buton from '../../components/Button'

export class Modul6 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            panjang: 0,
            lebar: 0
        }
    }

    handleButton = () => {
        alert('luas nya adalah ' + this.state.panjang * this.state.lebar)
    }


    render() {
        return (
            <Container backgroundColor="white">
                <View style={styles.formGroup}>
                    <Text style={styles.title}>Hitung Luas Persegi Panjang</Text>
                    <Input
                        onChangeText={(text) => this.setState({ panjang: text })}
                        value={this.state.panjang}
                        label="Panjang"
                        placeholder="Masukan jawaban anda" />
                </View>
                <View style={styles.formGroup}>
                    <Input
                        onChangeText={(text) => this.setState({ lebar: text })}
                        value={this.state.lebar}
                        label="Lebar"
                        placeholder="Masukan jawaban anda" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Buton
                        onPress={() => this.handleButton()}
                        style={{ alignSelf: 'flex-start' }}>
                        Hitung Sekarang
                    </Buton>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 20
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 50,
        textAlign: 'center'
    }
})

export default Modul6
