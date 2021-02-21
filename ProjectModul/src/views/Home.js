import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Container from '../components/Container'
import Card from '../components/Card'

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modules: [
                { id: 1, description: 'Menampilkan text pada layar' },
                { id: 2, description: 'Memberikan warna background pada layar' },
                { id: 3, description: 'Penggunaan text view, plain text dan button' },
                { id: 4, description: 'Penggunaan radio button' },
                { id: 5, description: 'Penggunaan checkbox' },
                { id: 6, description: 'Membuat aplikasi perhitungan sederhana' }
            ]
        }
    }

    render() {
        return (
            <Container>
                <Text style={styles.title}>Modul Mobile Programming</Text>
                <Text style={styles.textMuted}>Menampilkan modul dari yang ke 1 sampai ke 6</Text>
                <ScrollView style={{ marginTop: 20 }}>
                    {this.state.modules.map(val => (
                        <Card
                            key={val.id}
                            data={val}
                            onPress={() => this.props.navigation.navigate(`Modul${val.id}`)}
                        />
                    ))}
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Lato-Bold',
        color: '#212529',
    },
    textMuted: {
        color: '#6c757d',
        fontFamily: 'Lato-Regular',
    }
})

export default Home
