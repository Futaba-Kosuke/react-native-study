import React from 'react'

import {
    ListItem,
    Left,
    Body,
    Right,
    Text,
    Thumbnail
} from 'native-base'

const CommonComment = ({ comment }) => {

    const { id, title, description, image_url, time } = comment

    return (
        <ListItem avater>
            <Left>
                <Thumbnail source={image_url} />
            </Left>
            <Body>
                <Text>{title}</Text>
                <Text style={styles.commentTextStyle} note>{description}</Text>
            </Body>
            <Right>
                <Text note>{time}</Text>
            </Right>
        </ListItem>
    )
}

const styles = {
    commentTextStyle: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 18,
    }
}

export default CommonComment