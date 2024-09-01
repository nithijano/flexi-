import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground
} from 'react-native';

const image = {uri: '../assets/backone.png'};

const Onboard = ({navigation}) => {
  return (
   
        <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> "Move with  </Text>
      <Text style={styles.text}> Comfort Step, </Text>
      <Text style={styles.text}> With Confidenece"</Text>
     
    
      <View style={styles.Mybutton}>
      <Button
          title="Next"
          color="#3792cb"
          onPress={() => navigation.navigate('Home')} 
        />
        </View>
    </ImageBackground>
    
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  image: {
    flex: 1,
  
    position:'relative',
     
  },

  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    padding: 20,
   fontFamily:'abhayalibre'
    
  },
  Mybutton:{
    width:100,
    position:'absolute',
    bottom:20,
    right:20,
  }
});

export default Onboard;