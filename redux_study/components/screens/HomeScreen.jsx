import React, {
    useState
} from 'react'

import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native'

import { connect } from 'react-redux'
import { clearText, setText } from '../../redux/actions'
import store from '../../redux/store'

const HomeScreen = (props) => {
    const [text, setText] = useState('')

    return (
        <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
            <View>
                <Text>この辺にstoreのtext: {props.text}</Text>
                <TextInput
                    style={{backgroundColor: 'gray'}}
                    onChangeText={(value) => setText(value)}
                    value={text}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button
                    onPress={() => props.setText(text)}
                    title='setText'
                />
                <Button
                    onPress={() => props.clearText()}
                    title='clearText'
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    text: state.text.text,
})

const mapDispatchToProps = {
    setText,
    clearText,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen)