import React from 'react'

import {
    StyleSheet,
    Image,
} from 'react-native'

import {
    Content,
    Card,
    CardItem,
    Left,
    Body,
    Text,
    Button,
    Icon,
    Thumbnail,
} from 'native-base'

const CommonCard = ({ shop, onPress }) => {
    
    const { id, title, category, kcpy, detail, image_url } = shop

    return (
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>{title}</Text>
                        <Text style={styles.noteStyle}>カテゴリー : {category}</Text>
                        <Text note>{kcpy}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image style={styles.imageStyle} source={{ uri: image_url }} />
                </CardItem>
                <CardItem content>
                    <Text style={styles.cardContentTextStyle}>{detail}</Text>
                </CardItem>
                <CardItem style={styles.cardBottomStyle}>
                    <Text style={styles.cardBottomTextStyle}>更新日 : 2017/04/17</Text>
                    <Button onPress={onPress} transparent>
                        <Icon active name="chatbubbles" />
                        <Text style={styles.cardBottomTextStyle}>詳細情報を見る</Text>
                    </Button>
                </CardItem>
            </Card>
        </Content>
    )
}

const styles = {
    noteStyle: {
        marginTop: 5,
    },
    imageStyle: {
        marginLeft: 15,
        marginRight: 15,
        height: 240,
        flex: 1,
    },
    cardContentTextStyle: {
        fontsize: 14,
        lineHeight: 22,
    },
    cardBottomStyle: {
        justifyContent: 'space-around',
    },
    cardBottomTextStyle: {
        fontSize: 13,
    }
}

export default CommonCard