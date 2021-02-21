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
import { Config, BASE_URL, PATH } from '../config/Variable'
import Loader from '../components/Loader'
import { ShowSnackbar } from '../config/Helper'

export class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            npm: '',
            nama: '',
            tempatLahir: '',
            jurusan: '',
            photo: '',
            alamat: '',
            isLoading: false,
            changePhoto: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        axios.get(BASE_URL + 'mahasiswa/' + this.props.route.params.id, Config)
            .then(res => {
                const mahasiswa = res.data.result
                this.setState({
                    npm: mahasiswa.npm,
                    nama: mahasiswa.nama,
                    tempatLahir: mahasiswa.tempat_lahir,
                    jurusan: mahasiswa.jurusan,
                    alamat: mahasiswa.alamat,
                    photo: mahasiswa.photo,
                    isLoading: false,
                })
            })
            .catch(res => console.log(res))
    }

    getInputImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (val) => {
            this.setState({ photo: val, changePhoto: true })
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
        if (this.state.changePhoto) {
            data.append('photo', {
                type: this.state.photo.type,
                uri: this.state.photo.uri,
                name: this.state.photo.fileName
            })
        }


        axios.post(BASE_URL + 'mahasiswa/' + this.props.route.params.id + '?_method=put', data, Config)
            .then(res => {
                this.setState({ isLoading: false })
                ShowSnackbar('Berhasil mengubah data')
            })
            .catch(res => {
                this.setState({ isLoading: false })
                ShowSnackbar("Opps gagal mengubah data")
                console.log(res.response)
            })
    }


    render() {
        return (
            <Wrapper>
                {(this.state.isLoading) ? (<Loader />) : null}
                <Appbar
                    title="Edit Mahasiswa"
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
                                    uri: (this.state.changePhoto) ?
                                        this.state.photo.uri :
                                        PATH + "/photo/" + this.state.photo,
                                }}>
                                <ButtonImage onPress={() => this.getInputImage()} />
                            </Avatar>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Input
                                value={this.state.npm}
                                keyboardType={'numeric'}
                                placeholder={"NPM"}
                                onChangeText={(val) => this.handleInput('npm', val)} />
                            <Input
                                value={this.state.nama}
                                placeholder={"Nama Lengkap"}
                                onChangeText={(val) => this.handleInput('nama', val)} />
                            <Input
                                value={this.state.tempatLahir}
                                placeholder={"Tempat Lahir"}
                                onChangeText={(val) => this.handleInput('tempatLahir', val)} />
                            <Select
                                selectedValue={this.state.jurusan}
                                onValueChange={(val) => this.setState({ jurusan: val })} />
                            <TextArea
                                placeholder={"Alamat"}
                                value={this.state.alamat}
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

export default Edit
