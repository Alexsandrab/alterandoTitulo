import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <ImageBackground style={styles.container} source={require('../assets/tiedie.jpg')} />
      <View> 
  <Image style={styles.joinha} source={require('../assets/change.jpg')} />
</View>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    resizeMode: "cover",
    flexDirection: "column",
    position: 'relative',
    height: 800,
    width: 700,
    opacity: 0.7,
    left: -40,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  joinha: {
    alignItems: 'center',
    borderRadius:"50%",
    marginTop: -700,
    width: 200,
    height: 200,
    position: 'relative',
    left: -170
    }
 
});
