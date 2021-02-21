import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { PATH } from '../config/Variable'

export default function List(props) {
    return (
        <ListItem key={props.mahasiswa.id} onPress={props.onPress} bottomDivider>
            <Avatar
                rounded
                size={45}
                source={{ uri: PATH + 'photo/' + props.mahasiswa.photo }} />
            <ListItem.Content>
                <ListItem.Title>{props.mahasiswa.nama}</ListItem.Title>
                <ListItem.Subtitle>{props.mahasiswa.npm}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}
