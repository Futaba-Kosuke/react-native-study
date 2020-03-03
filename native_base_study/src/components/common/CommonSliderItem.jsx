import React from 'react'

import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native'

const {
    width: DEVICE_WIDTH,
} = Dimensions.get('window')

const sliderWidth = DEVICE_WIDTH
const sliderHight = DEVICE_WIDTH / 2

const CommonSliderItem = ({ slider, onPress }) => {

    const { id, title, image_url } = slider

    return (
        <View>
            <Image style={styles.slideThumbnailStyle} source={{ uri: image_url }} />
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.overlayStyle}>
                    <Text style={styles.overlayTitleStyle}>{title}</Text>
                    <Text style={styles.overlayCategoryStyle}>▶ 記事詳細へ</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

}

const styles = StyleSheet.create({
    slideThumbnailContainerStyle: {
        height: sliderHight,
        backgroundColor: '#F5FCFF',
        position: 'relative',
    },
    slideThumbnailStyle: {
        width: sliderWidth,
        height: sliderHight,
        backgroundColor: '#EEEEEE',
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    overlayTitleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    overlayCategoryStyle: {
        marginTop: 5,
        fontSize: 12,
        color: '#FFFFFF',
    },
})

export default CommonSliderItem