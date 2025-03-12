import { useState } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Button,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const usuarios = [
    { nome: 'Márcio', senha: '123456' },
    { nome: 'André', senha: 'abcdef' },
    { nome: 'Pedro', senha: 'admin123' },
  ];

  const login = () => {
    const usuarioValido = usuarios.find(
      (u) => u.nome === nome && u.senha === senha
    );
    setSucesso(!!usuarioValido);
  };

  const logout = () => {
    setSucesso(false);
    setNome('');
    setSenha('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {sucesso ? (
          <>
            <Text style={styles.successText}>Sucesso</Text>
            <Button title="Sair" onPress={logout} />
          </>
        ) : (
          <>
            <Image
              source={{
                uri: 'https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-erro-web-404-not-found.jpeg',
              }}
              style={styles.image}
            />
            <TextInput
              placeholder="Nome"
              onChangeText={setNome}
              value={nome}
              style={styles.input}
            />
            <TextInput
              placeholder="Senha"
              onChangeText={setSenha}
              value={senha}
              secureTextEntry
              style={styles.input}
            />
            <Button title="Entrar" onPress={login} />
          </>
        )}
      </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    marginBottom: 10,
    padding: 5,
    textAlign: 'center',
  },
});
