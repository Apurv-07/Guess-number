import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

function Nextscreen(props) {
    function Rendering(){
        if(props.check){
          return <Text>Won</Text>
        }else{
          return <Text>Lose</Text>
        }
    }
  return (
    <View style={Styles.game}>
        <Title>Opponent's Guess</Title>
        <Text>{props.usernumber}</Text>
        <Text>{props.current}</Text>
        <PrimaryButton onclick={props.compare}>Check Result</PrimaryButton>
        <Rendering />
    </View>
  )
}
const Styles=StyleSheet.create({
    game: {
        marginTop: 100,
    
    }
})

export default Nextscreen