import React from 'react'

import {
    Text,
} from 'react-native'

import {
    Container,
    Content,
    List,
    ListItem,
} from 'native-base'

const menuItems = ['Home', 'Sub']

const MenuListOrganism = ({ navigation }) => {

    console.log('MenuList')
    console.log(navigation)

    return (
        <Container>
            <Content>
                <List
                    dataArray={menuItems}
                    renderRow={(menuItem) => {
                        return (
                            <ListItem
                                button
                                onPress={() => navigation.navigate(menuItem)}
                            >
                                <Text>{menuItem}</Text>
                            </ListItem>
                        )
                    }}
                />
            </Content>
        </Container>
    )
}

export default MenuListOrganism