import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Label from '../../components/Label'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Container from '../../components/Container'

export class Modul4 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            options: [
                { label: 'Rendang', value: 'Rendang' },
                { label: 'Ayam Gorang', value: 'Ayam Goreng' },
                { label: 'Mie Tektek', value: 'Mie Tektek' }
            ],
            selected: '',
        }
    }


    render() {
        return (
            <Container>
                <Label>Kira kira kamu paling suka makanan yang mana ya ? coba di pilih dong salah satu</Label>
                <View style={{ marginTop: 20 }}>
                    <RadioForm
                        radio_props={this.state.options}
                        initial={"Rendang"}
                        onPress={(value) => { this.setState({ selected: value }) }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    {(this.state.selected) ? <Label>Kamu memilih {this.state.selected}</Label> : null}
                </View>
            </Container>
        )
    }
}

export default Modul4
