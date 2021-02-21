import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Appbar from '../components/Appbar'
import Container from '../components/Container'
import { Avatar } from 'react-native-elements'
import Input from '../components/Input'
import Wrapper from '../components/Wrapper'
import Select from '../components/Select'
import TextArea from '../components/TextArea'
import ButtonImage from '../components/ButtonImage'
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios'
import { Config, BASE_URL } from '../config/Variable'
import Loader from '../components/Loader'
import { ShowSnackbar } from '../config/Helper'

export class Add extends Component {

    constructor(props) {
        super(props)

        this.state = {
            npm: '',
            nama: '',
            tempatLahir: '',
            jurusan: '',
            photo: '',
            alamat: '',
            isLoading: false
        }
    }

    getInputImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (val) => {
            this.setState({ photo: val })
        })
    }

    handleInput = (key, val) => {
        this.setState({ [key]: val })
    }

    storeMahasiswa = () => {
        this.setState({ isLoading: true })
        const data = new FormData();
        data.append('npm', this.state.npm)
        data.append('nama', this.state.nama)
        data.append('tempat_lahir', this.state.tempatLahir)
        data.append('jurusan', this.state.jurusan)
        data.append('alamat', this.state.alamat)
        data.append('photo', {
            type: this.state.photo.type,
            uri: this.state.photo.uri,
            name: this.state.photo.fileName
        })

        axios.post(BASE_URL + 'mahasiswa', data, Config)
            .then(res => {
                this.setState({
                    npm: '',
                    nama: '',
                    tempatLahir: '',
                    jurusan: '',
                    photo: '',
                    alamat: '',
                    isLoading: false
                })
                ShowSnackbar('Berhasil menambahkan data')
            })
            .catch(res => {
                this.setState({ isLoading: false })
                ShowSnackbar("Opps gagal menambahkan data")
                console.log(res.response.data)
            })
    }


    render() {
        return (
            <Wrapper>
                {(this.state.isLoading) ? (<Loader />) : null}
                <Appbar
                    title="Tambah Mahasiswa"
                    search={false}
                    save={() => this.storeMahasiswa()}
                    back={this.props.navigation.goBack} />
                <Container padding={true}>
                    <ScrollView>
                        <View style={styles.center}>
                            <Avatar
                                rounded
                                size={100}
                                source={{
                                    uri: (this.state.photo == '') ?
                                        'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' :
                                        this.state.photo.uri,
                                }}>
                                <ButtonImage onPress={() => this.getInputImage()} />
                            </Avatar>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Input
                                keyboardType={'numeric'}
                                placeholder={"NPM"}
                                onChangeText={(val) => this.handleInput('npm', val)} />
                            <Input
                                placeholder={"Nama Lengkap"}
                                onChangeText={(val) => this.handleInput('nama', val)} />
                            <Input
                                placeholder={"Tempat Lahir"}
                                onChangeText={(val) => this.handleInput('tempatLahir', val)} />
                            <Select
                                selectedValue={this.state.jurusan}
                                onValueChange={(val) => this.handleInput('jurusan', val)} />
                            <TextArea
                                placeholder={"Alamat"}
                                onChangeText={(val) => this.handleInput('alamat', val)} />
                        </View>
                    </ScrollView>
                </Container>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    }
})

export default Add
