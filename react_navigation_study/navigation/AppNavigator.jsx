import React from 'react'
import HomeScreen from '../components/screens/HomeScreen'
import SubScreen from '../components/screens/SubScreen'

import MenuList from '../components/organisms/MenuList'

import {
    createAppContainer
} from 'react-navigation'

import {
    createDrawerNavigator,
} from 'react-navigation-drawer'

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Sub: {
            screen: SubScreen,
        }
    },
    {
        contentComponent: (navigator) => {
            return (
                <MenuList {...navigator} />
            )
        }
    }
)

export default createAppContainer(DrawerNavigator)