import React, {
    Component,
    PropTypes,
} from 'react'

import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
} from 'react-native'

import {
    Container,
    Button,
    Content,
    ListItem,
    Separator,
    Icon,
} from 'native-base'

const {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
} = Dimensions.get('window')

const MenuList = (props) => {

    const { closeDrawer } = props

    return (
        <Container style={styles.containerBackgroundStyle}>
            <View style={styles.containerHeaderStyle}>
                <Image style={styles.containerHeaderImageStyle} source={require('../../assets/otsuka_sample.jpg')} />
                <View>
                    <Text style={styles.overlayTextStyle}>大塚Deお買い物Menu</Text>
                </View>
            </View>
            <Content>
                <Separator bordered>
                    <Text>コンテンツ</Text>
                </Separator>
                <ListItem onPress={() => {closeDrawer("ShopList")}}>
                    <Icon ios='ios-pizza' android="md-pizza" style={{color: '#ffc125'}} />
                    <Text style={styles.menuTextStyle}>紹介お店一覧</Text>
                </ListItem>
                <ListItem onPress={() => {closeDrawer("ColumnList")}}>
                    <Icon ios='ios-book' android="ios-book" style={{color: '#ff6600'}} />
                    <Text style={styles.menuTextStyle}>コラム一覧</Text>
                </ListItem>
                <ListItem onPress={() => {closeDrawer("MyPurchase")}}>
                    <Icon ios='ios-cart' android="md-cart" style={{color: '#ff3333'}} />
                    <Text style={styles.menuTextStyle}>Myお買い物</Text>
                </ListItem>

                <Separator boardered>
                    <Text>このサンプルに関して</Text>
                </Separator>
                <ListItem onPress={() => {closeDrawer("GithubLink")}}>
                    <Icon ios='logo-octocat' android="logo-octcat" style={{color: '#333333'}} />
                    <Text style={styles.menuTextStyle}>Githubへのリンク</Text>
                </ListItem>
                <ListItem onPress={() => {closeDrawer("SlideshareLink")}}>
                    <Icon ios='logo-linkedin' android="logo-lonkedin" style={{color: '#0077b5'}} />
                    <Text style={styles.menuTextStyle}>SlideShareへのリンク</Text>
                </ListItem>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    containerHeaderStyle: {
        height: 160,
        backgroundColor: '#F5FCFF',
        position: 'relative',
    },
    containerHeaderImageStyle: {
        height: 160,
        width: DEVICE_WIDTH - 80,
    },
    overlayStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 24,
        paddingBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    overlayTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerBackgroundStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menuTextStyle: {
        paddingLeft: 8,
    }
})

export default MenuList