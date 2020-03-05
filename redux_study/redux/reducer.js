import { combineReducers } from 'redux'

const INITIAL_TEXT = {
    text: '',
}

// text関連のreducerを全て一括で管理するので命名はtext
const text = (state = INITIAL_TEXT, action) => {

    switch (action.type) {
        //stateの変更用
        case 'CLEAR_TEXT':
            console.log('text/CLEAR_TEXT')
            return {
                text: action.text,
            }
        case 'SET_TEXT':
            console.log('text/SET_TEXT')
            return {
                text: action.text,
            }
        // stateの読み取り用
        default:
            console.log('text/default')
            return state
    }
}

// この辺に新しいreducerを定義してもヨシ。

// 上で定義したreducerを纏めるcombineReducers
// combine: 結合する
export default combineReducers({
    text: text,
})