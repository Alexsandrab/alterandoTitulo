import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

export default function App() {
   const [titulo, setTitulo] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <TextInput
          style = {styles.input}
        placeholder = "Mude o titulo da página"
        onChangeText={novoTitulo => setTitulo(novoTitulo)}
        defaultValue={titulo}
        />
        <Text style={{padding: 10, fontSize: 42}}>
        {titulo}
         </Text>
       
      <AssetExample />
    </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  input: {
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginTop: '50',
    color: 'black',
    padding: 10,
    fontSize: 10,
  },
  
});
