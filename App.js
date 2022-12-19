
import { ImageBackground, StyleSheet } from 'react-native';
//import Gamescreen from './screens/Gamescreen';
import Firstscreen from './screens/Firstscreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={['#702a09', '#d6aa1a']} style={styles.appcontainer}>
      <ImageBackground source={require('./assets/Puzzlepic.jpg')} resizeMode='cover' style={styles.appcontainer} imageStyle={styles.imagebg}>
        <Firstscreen />
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
