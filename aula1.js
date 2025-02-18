import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {

  const nome = 'Lindos';

  const soma = (num1, num2) => {
    return num1 + num2;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}> Olá{nome}, sejam bem-vindos! </Text>
      <Text style={somaStyle.soma_paragraph}> {soma} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

const somaStyle = StyleSheet.create({
  soma_paragraph: {
    color: 'red',
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
;
