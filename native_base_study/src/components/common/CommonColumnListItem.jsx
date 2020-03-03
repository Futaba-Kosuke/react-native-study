import React from 'react'

import {
    ListItem,
    Left,
    Body,
    Right,
    Text,
    Button,
    Thumbnail
} from 'native-base'

const CommonColumnListItem = ({ archive, onPress }) => {
    
    const { id, title, catchcopy, image_url } = archive

    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square size={80} source={image_url} />
            </Left>
            <Body>
                <Text>{title}</Text>
                <Text note>{catchcopy}</Text>
            </Body>
            <Right>
                <Button transparent onPress={onPress}>
                    <Text>詳細</Text>
                </Button>
            </Right>
        </ListItem>
    )
}

export default CommonColumnListItem