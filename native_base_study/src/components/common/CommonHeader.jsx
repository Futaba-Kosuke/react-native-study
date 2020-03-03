import React from 'react'

import {
    StyleSheet
} from 'react-native'

import {
    Header,
    Left,
    Right,
    Body,
    Title,
    Button,
    Icon,
} from 'native-base'

const CommonHeader = ({ title, icon, onPress }) => {

    return (
        <Header ios="light-content" style={styles.headerBackStyle} hasTabs>
            <Left>
                <Button transparent onPress={onPress}>
                    <Icon style={styles.backStyle} name={icon || "arrow-back"} />
                </Button>
            </Left>
            <Body>
                <Title style={styles.titleStyle}>{title}</Title>
            </Body>
            <Right />
        </Header>
    )

}

const styles = StyleSheet.create({
    headerBackStyle: {
        backgroundColor: '#000000',
    },
    backStyle: {
        color: '#ffffff',
    },
    titleStyle: {
        color: '#ffffff',
    },
})

export default CommonHeader