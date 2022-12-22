import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
//Creating a customized button
function PrimaryButton(props) {
  return (
    <View style={Styles.backouter}>
    <Pressable onPress={props.onclick} style={Styles.backinner} android_ripple={{color:'grey'}}>
        <Text style={Styles.innertext}>{props.children}</Text>
    </Pressable>
    </View>
  )
}
const Styles=StyleSheet.create({
  backouter:{
    margin: 5,
    height: 30,
    backgroundColor: 'maroon',
    shadowColor: 'white',
    borderRadius: 10,
  },
  backinner:{
    alignItems: 'center',
      elevation: 10,
        justifyContent: 'center',
      height: '100%',
      
    },
    innertext:{
      color: 'whitesmoke',
      fontSize: 20,
      fontFamily: 'sans-serif'
    }
    
})

export default PrimaryButton
