import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import {Shadow} from 'react-native-shadow-2'

function Firstscreen(){
  function newfun(){
    console.log("My new function")
  }
  var [text, setText]=useState('')
  var confirming=()=>{
    if(text){
      text=parseInt(text);
      if(text<0){
        Alert.alert(
          'Invalid!',
          'Number should be between 0 and 100',
          [{text: 'Got it!', style: 'cancel', onPress: ()=>{
            setText("")
          }}])
      }else{
        console.log("All Good")
      }
    }else{
      Alert.alert(
        'Invalid!',
        'Number should be between 0 and 100',
        [{text: 'Got it!', style: 'destructive', onPress: ()=>{
          setText("No way")
        }}])
    }
  }
  return (
    <View style={Styles.first}>
      <Shadow style={Styles.second} distance={11} >
        <TextInput style={Styles.text} maxLength={2} keyboardType="number-pad" onChangeText={(mytext)=>{setText(mytext)}} value={text}></TextInput>
        <PrimaryButton onclick={()=>setText("")}>Reset</PrimaryButton>
        <PrimaryButton onclick={confirming}>Confirm</PrimaryButton>
      </Shadow>
    </View>
  )
}
const Styles=StyleSheet.create({
    first:{
        marginTop: 100,
        backgroundColor: '#9c1717',
        border: 2,
        borderRadius: 8,
        margin: 20,
    },
    second:{
      width: '100%',
      padding: 20,
      borderRadius: 8,
    },
    text:{
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        color: 'yellow',
        width: '20%',
        fontWeight: 'bold',
        margin: 20,
        marginLeft: '40%',
        textAlign: 'center',
        fontSize: 30,

    }
})
export default Firstscreen