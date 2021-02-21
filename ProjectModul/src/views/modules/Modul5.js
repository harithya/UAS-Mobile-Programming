import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import Container from '../../components/Container'
import Label from '../../components/Label'

export class Modul5 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rendang: false,
            sotoAyam: false,
            nasiGoreng: false,
            mieTektek: false
        }
    }

    checkBoxHandle = (key, val) => {
        this.setState({ [key]: val })
    }


    render() {
        return (
            <Container>
                <Label>Pilih beberapa makanan yang kamu suka yuk</Label>
                <View style={styles.flex}>
                    <CheckBox
                        disabled={false}
                        value={this.state.rendang}
                        onValueChange={(val) => this.checkBoxHandle('rendang', val)}
                    />
                    <Label>Rendang</Label>
                </View>
                <View style={styles.flex}>
                    <CheckBox
                        disabled={false}
                        value={this.state.sotoAyam}
                        onValueChange={(val) => this.checkBoxHandle('sotoAyam', val)}
                    />
                    <Label>Soto Ayam</Label>
                </View>
                <View style={styles.flex}>
                    <CheckBox
                        disabled={false}
                        value={this.state.nasiGoreng}
                        onValueChange={(val) => this.checkBoxHandle('nasiGoreng', val)}
                    />
                    <Label>Nasi Goreng</Label>
                </View>
                <View style={styles.flex}>
                    <CheckBox
                        disabled={false}
                        value={this.state.mieTektek}
                        onValueChange={(val) => this.checkBoxHandle('mieTektek', val)}
                    />
                    <Label>Mie Tektek</Label>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Label style={{ marginBottom: 20 }}>Pilihan makanan mu yaitu :</Label>
                    {(this.state.rendang) ? <Label style={styles.mb}>- Rendang</Label> : null}
                    {(this.state.sotoAyam) ? <Label style={styles.mb}>- sotoAyam</Label> : null}
                    {(this.state.nasiGoreng) ? <Label style={styles.mb}>- nasiGoreng</Label> : null}
                    {(this.state.mieTektek) ? <Label style={styles.mb}>- mieTektek</Label> : null}
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    mb: {
        marginBottom: 10
    }
})

export default Modul5
