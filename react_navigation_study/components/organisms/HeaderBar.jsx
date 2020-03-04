import React from 'react'

import {
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title,
    Button,
} from 'native-base'

const HeaderBarOrganism = ({ screenTitle, openDrawer }) => {

    console.log('HeaderBar')
    console.log(openDrawer)

    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => openDrawer()}
                >
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{screenTitle}</Title>
            </Body>
            <Right />
        </Header>
    )
}

export default HeaderBarOrganism