import React, {
    Component,
    useState,
} from 'react'

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native'

import {
    Spinner,
    Button,
} from 'native-base'

import CommonCard from '../common/CommonCard'

import { Actions } from 'react-native-router-flux'

import axios from 'axios'

const ShopList = () => {
    
    const [shops, setShops] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [modelVisible, setModelVisible] = useState(false)

    const fetchShopData = () => {
        axios.get('https://rocky-dusk-33235.herokuapp.com/shops.json')
        .then((response) => {
            setShops(response.data.shops.contents)
            setIsLoading(false)
        }).catch((error) => {
            setShops([])
            setIsLoading(false)
            setIsError(true)
        })
    }

    const reloadShops = () => {
        setShops([])
        setIsLoading(true)
        setIsError(false)
        fetchShopData()
    }

    const renderShops = () => {
        return shops.map((shop) => {
            <CommonCard key={shop.id} shop={shop} onPress={() => {Actions.ShopDetailContents({id: shop.id, title: "お店詳細"})}} />
        })
    }

    const UNSAFE_componentWillMount = () => {
        fetchShopData()
    }

    if (isLoading) {
        return (
            <View style={styles.spinnerWrapperStyle}>
                <Spinner color="#666666" />
                <Text style={styles.spinnerInnerTextStyle}>データ取得中…</Text>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={styles.spinnerWrapperStyle}>
                <Text style={styles.spinnerInnerTextStyle}>エラー: データを取得できませんでした</Text>
                <View>
                    <Button style={styles.buttonStyle} onPress={() => { reloadShops() }} dark>
                        <Text style={styles.buttonTextStyle}>再度データを取得する</Text>
                    </Button>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.backgroundContainer}>
            {renderShops()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#FFFFFF',
    },
    spinnerWrapperStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerInnerTextStyle: {
        fontSize: 13,
        textAlign: 'center',
        color: '#666666'
    },
    buttonStyle: {
        marginTop: 10,
        alignItems: 'center',
    },
    buttonTextStyle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF'
    },
})

export default ShopList