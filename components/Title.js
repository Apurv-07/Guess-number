import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

function Title(props) {
  return (
    <View style={style.title}><Text style={style.text}>{props.children}</Text></View>
  )
}
var style=StyleSheet.create({
    title:{
        borderWidth: 2,
        borderColor: '#f2a813',
        alignItems: 'center',
        margin: '20%',
        padding: 10,
    },
    text:{
        color: '#f2a813',
        fontSize: 25,
    }
})
export default Title