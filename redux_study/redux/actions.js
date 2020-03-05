// actionCreatorの実装は普通の関数と変わらない
export const clearText = () => {
    return {
        type: 'CLEAR_TEXT',
        text: ''
    }
}

export const setText = (text) => {
    return {
        type: 'SET_TEXT',
        text: text,
    }
}

// ここに別のactionを定義してもヨシ