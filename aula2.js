import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native'

import {useState} from 'react'

export default function App() {

  const [getNome, setNome] = useState("MarPed")

  const urlGatoBrue =
    'https://s2-techtudo.glbimg.com/BxHuS-pXB9wlzSOFnmRgxdzGIu0=/0x0:800x500/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/K/Z/L8vgxxRca0tnGX4vNPPA/gato-ou-corvo.jpg';

  return (
    <SafeAreaView style={styles.container}>

      <Text style={{ color: 'red', textAlign: 'center' }}>
        ola {getNome}, seja bem-vindo!
      </Text>

      <Text style={[styles.colorBlue, styles.textAlignCenter]}> </Text>

      <Image
        source={{ uri: urlGatoBrue }}
        style={{ width: 300, height: 300 }}
      />

      <Button
        title="Vai"
          onPress={() => {
          setNome('PedMar'); 
          console.log('Hello world!');
        }}
      />

      <Button
        title="Volta"
          onPress={() => {
          setNome('MarPed'); 
          console.log('Hello world!');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  colorBlue: {
    color: 'blue',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
