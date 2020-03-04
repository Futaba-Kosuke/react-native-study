import React from 'react'

import {
    Text,
} from 'react-native'

import {
    Container,
    Content,
} from 'native-base'

import {
    DrawerActions
} from 'react-navigation-drawer'

import HeaderBar from '../organisms/HeaderBar'

const HomeScreen = ({ navigation }) => {

    console.log('HomeScreen')
    console.log(navigation)

    return (
        <Container>
            <HeaderBar screenTitle='ホーム' openDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <Content>
                <Text>ここがホームページだよ</Text>
            </Content>
        </Container>
    )
}

export default HomeScreen