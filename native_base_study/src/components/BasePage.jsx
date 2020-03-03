import React, {
    Component,
    PropTypes,
    useState,
} from 'react'

import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

import {
    Container,
    Drawer,
    Header,
    Left,
    Right,
    Title,
    Body,
    Button,
    Icon,
} from 'native-base'

import WebView from 'react-native-webview'

import CommonHeader from './common/CommonHeader'

import MenuList from './MenuList'

import ShopList from './BaseScreen/ShopList'
import ColumnList from './BaseScreen/ColumnList'
import PurchaseHistory from './BaseScreen/PurchaseHistory'

import { Actions } from 'react-native-router-flux'

const BasePage = () => {

    // 関数コンポーネントなのでコンストラクタの必要なし
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerDisabled, setDrawerDisables] = useState(false)
    const [itemSelected, setItemSelected] = useState('ShopList')

    // ドロワーメニューを閉じる
    const closeDrawer = (item) => {
        setItemSelected(item)
        console.log('遷移した也')
        _drawer._root.close()
    }

    // ドロワーメニューを開く
    const openDrawer = () => {
        _drawer._root.open()
    }

    // ドロワーメニューに対応したシーンの切り替え
    const _onItemSelected = (selected) => {
        switch (selected) {
            case "ShopList":
                return <ShopList />
            case "ColumnList":
                return <ColumnList />
            case "MyPurchase":
                return <PurchaseHistory />
            case "GithubLink":
                return <WebView source={{uri: 'https://github.com/fumiyasac/LikeCustomTransition'}} />
            case "SlideshareLink":
                return <WebView source={{uri: 'https://www.slideshare.net/fumiyasakai37/nativebaseui'}} />
            default:
                return <ShopList />
        }
    }

    // ドロワーメニューに対応したタイトルの切り替え
    const _onTitleSelected = (selected) => {
        switch (selected) {
            case "ShopList":
                return "紹介お店一覧"
              case "ColumnList":
                return "コラム一覧"
              case "MyPurchase":
                return "Myお買い物"
              case "GithubLink":
                return "リポジトリ"
              case "SlideshareLink":
                return "スライド"
              default:
                return "紹介お店一覧"
        }
    }

    return (
        <Drawer
            ref={(ref) => _drawer = ref}
            type={(Platform.OS === 'ios') ? "static" : "overlay"}
            content={
                <MenuList closeDrawer={(x) => {closeDrawer(x)}} />
            }
            onOpen={() => {
                setDrawerOpen(true)
            }}
            onClose={() => {
                setDrawerOpen(false)
            }}
            tweenHandler={(ratio) => {
                return {
                    mainOverlay: { opacity: ratio / 2, backgroundColor: 'black' }
                }
            }}
            captureGestures={true}
            tweenDurarion={200}
            disabled={drawerDisabled}
            openDrawerOffset={(viewport) => {
                return 80
            }}
            side={"left"}
            closedDrawerOffset={() => 0}
            panOpenMask={0.04}
            negotiatePan={true}
        >
            <CommonHeader title={_onTitleSelected(itemSelected)} icon={"menu"} onPress={() => openDrawer()} />
            <Container>
                {_onItemSelected(itemSelected)}
            </Container>
        </Drawer>
    )
}

const styles = {
    headerBackStyle: {
        backgroundColor: '#000',
    },
    titleStyle: {
        color: '#fff',
    },
    searchStyle: {
        color: '#fff',
    },
    subTitleStyle: {
        color: '#fff',
        fontSize: 11,
    },
    menuStyle: {
        color: '#fff',
    },
}

export default BasePage