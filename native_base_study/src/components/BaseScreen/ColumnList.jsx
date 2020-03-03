import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
} from 'react-native'

import {
    Container,
    Content,
    Separator,
    Text,
} from 'native-base'

import { Actions } from 'react-native-router-flux'

import Carousel from 'react-native-snap-carousel'

import CommonSliderItem from '../common/CommonSliderItem'
import CommonColumnListItem from '../common/CommonColumnListItem'

import { getSliderList, getArchiveList } from '../../stub/SampleDataStub'

const {
    width: DEVICE_WIDTH,
} = Dimensions.get('window')

const sliderWidth = DEVICE_WIDTH
const sliderHeight = DEVICE_WIDTH / 2

const ColumnList = () => {

    const _getSlides = () => {
        return getSliderList().map((slider, index) => {
            return (
                <CommonSliderItem key={index} slider={slider} onPress={() => { console.log("_getSlides(): Work In Progress.") }} />
            )
        })
    }

    const _getArchives = () => {
        return getArchiveList().map((archive, index) => {
            return (
                <CommonColumnListItem key={index} archive={archive} onPress={() => { console.log("_getArchives(): Work In Progress") }} />
            )
        })
    }

    _getSlides()

    return (
        <Container style={styles.backgroundContainer}>
            <View style={styles.containerWrapperViewStyle}>
                {/* <Carousel
                    ref={(carousel) => { _carousel = carousel }}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    firstItem={0}
                    inactiveSlideScale={0.86}
                    inactiveSlideOpacity={0.38}
                    enableMomentum={false}
                    containerCustomStyle={styles.containerCustomStyle}
                    contentContainerCustomStyle={styles.contentContainerCustomStyle}
                    showsHorizontalScrollIndicator={false}
                    snapOnAndroid={true}
                >
                    {_getSlides()}
                </Carousel> */}
                <Carousel
                    data={_getSlides()}
                    renderItem={_getSlides}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    containerCustomStyle={styles.containerCustomStyle}
                    contentContainerCustomStyle={styles.contentContainerCustomStyle}
                    loop
                    autoplay
                    >
                </Carousel>
            </View>
            <ScrollView>
                <Content>
                    <Separator bordered>
                        <Text>過去のアーカイブ</Text>
                    </Separator>
                    {_getArchives()}
                </Content>
                <Separator bordered>
                    <Text>コラムについて</Text>
                </Separator>
                <Text style={styles.backgroundDescription}>
                    歴史がありながらも最近の発展やまちづくりにも目覚ましい下町情緒が溢れるあたたかな街、大塚。
                    オフィス街・地域のお祭り・ライブハウス・隠れ家的な名店等、様々な表情をこの街は見せてくれます。
                </Text>
            </ScrollView>
        </Container>
    )

}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#FFFFFF',
    },
    backgroundDescription: {
        color: '#666666',
        textAlign: 'left',
        fontSize: 14,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        lineHeight: 20,
    },
    buttonTextStyle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    containerWrapperViewStyle: {
        height: sliderHeight,
    },
    contentContainerCustomStyle: {
        height: sliderHeight,
    }
})

export default ColumnList