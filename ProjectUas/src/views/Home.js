import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Appbar from '../components/Appbar'
import FloatingButton from '../components/FloatingButton'
import Container from '../components/Container'
import List from '../components/List'
import Wrapper from '../components/Wrapper'
import axios from 'axios'
import { BASE_URL, Config } from '../config/Variable'
import { SwipeListView } from 'react-native-swipe-list-view';


export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.getMahasiswa()
        this.props.navigation.addListener('focus', () => {
            this.getMahasiswa()
        });
    }

    getMahasiswa = () => {
        this.setState({ isLoading: true })
        axios.get(BASE_URL + 'mahasiswa', Config)
            .then(res => this.setState({ mahasiswa: res.data.results, isLoading: false }))
            .catch(res => console.log(res.response))
    }

    destroyMahasiswa = (id) => {
        axios.delete(BASE_URL + 'mahasiswa/' + id, Config)
            .then(res => this.getMahasiswa())
            .catch(res => console.log(res.response))
    }

    render() {
        return (
            <Wrapper>
                <Appbar title="Mahasiswa" search={true} />
                <Container>
                    <View>
                        <SwipeListView
                            useFlatList
                            keyExtractor={(item, key) => { return key.toString() }}
                            data={this.state.mahasiswa}
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.getMahasiswa()}
                            renderItem={({ item }) => (
                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit', { id: item.id })}>
                                        <List mahasiswa={item} />
                                    </TouchableOpacity>
                                </View>
                            )}
                            disableRightSwipe={true}
                            rightOpenValue={-75}
                            renderHiddenItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.backRightBtn}
                                    onPress={() => this.destroyMahasiswa(item.id)}
                                >
                                    <Text style={styles.backTextWhite}>Delete</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <FloatingButton onPress={() => this.props.navigation.navigate("Add")} />
                </Container>
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: '#ea5455',
        right: 0,
    },
    backTextWhite: {
        color: 'white'
    },

})

export default Home
