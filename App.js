
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
//import Gamescreen from './screens/Gamescreen';
import Firstscreen from './screens/Firstscreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Gamescreen from './screens/Gamescreen';
export default function App() {
  var [usernumber, setUsernumber]=useState(0);
  function usernumberhandler(pickednumber){
    console.log(pickednumber)
    var temp=pickednumber;
    setUsernumber(usernumber=temp)
  }
  var screen=<Firstscreen onpick={usernumberhandler}/>
  if(usernumber){
    screen=<Gamescreen usernumber={usernumber}/>
  }
  return (
    <LinearGradient colors={['#702a09', '#d6aa1a']} style={styles.appcontainer}>
      <ImageBackground source={require('./assets/Puzzlepic.jpg')} resizeMode='cover' style={styles.appcontainer} imageStyle={styles.imagebg}>
      <SafeAreaView style={styles.appcontainer}>
        {screen}
    </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex: 1,
  },
  imagebg:{
    opacity: 0.2,
  }
});
