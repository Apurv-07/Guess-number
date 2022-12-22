import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Gamescreen(props) {
  var [current, setCurrent]=useState(0)
  var [count, setCount]=useState(0)
  var [check, setCheck]=useState();
  function compare(){
    var random=getRandomArbitrary(25, 30);
    setCurrent(random);
    setCount(count+1);
    console.log(count)
  }
  useEffect(()=>{
    console.log("useEffect loading")
    if(props.usernumber==current && count<10){
      setCheck(true)
      console.log(check)
    }else{
      setCheck(false)
    }
  }, [current, check])
  function Rendering(){
    if(check){
      return <Text>Won</Text>
    }else{
      return <Text>Lose</Text>
    }
  }
  return (
    <View>
      {(count>10||check)?((check)?<Text>Nice bro!</Text>:<Text>Nikal lode</Text>):<View style={Styles.game}>
        <Title>Opponent's Guess</Title>
        <Text>{props.usernumber}</Text>
        <Text>{current}</Text>
        <PrimaryButton onclick={compare}>Check Result</PrimaryButton>
        <Rendering />
    </View>}
    </View>
  )
}
const Styles=StyleSheet.create({
  game: {
    marginTop: 100,

  }
})

export default Gamescreen