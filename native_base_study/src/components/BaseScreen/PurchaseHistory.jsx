import React, {
    Component,
} from 'react'

import {
    StyleSheet,
    Text,
} from 'react-native'

import {
    Container,
    Content,
} from 'native-base'


import { Actions } from 'react-native-router-flux'

// import Timeline from 'react-native-timeline-listview'

import {getPurchaseHistory } from '../../stub/SampleDataStub'

const PurchaseHistory = () => {
    return (
        <Container style={styles.backgroundContainer}>
            <Content style={styles.backgroundDescription}>
                {/* <Timeline
                    innnerCircle={'dot'}
                    timeStyle={styles.timeStyle}
                    descriptionStyle={styles.descriptionStyle}
                    data={getPurchaseHistory()}
                /> */}
                <Text>馬鹿め、TimeLineは死んだわ！</Text>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#FFFFFF',
    },
    backgroundDescription: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
    },
    timeStyle: {
        textAlign: 'center',
        backgroundColor: '#999999',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 5,
    },
    descriptionStyle: {
        color: '#666666',
        lineHeight: 18,
    }
})

export default PurchaseHistory