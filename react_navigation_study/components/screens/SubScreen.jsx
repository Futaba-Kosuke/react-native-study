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

const SubScreen = ({ navigation }) => {
    
    console.log('SubScreen')
    console.log(navigator)

    return (
        <Container>
            <HeaderBar screenTitle='サブ' openDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
            <Content>
                <Text>ここがサブページだよ</Text>
            </Content>
        </Container>
    )
}

export default SubScreen