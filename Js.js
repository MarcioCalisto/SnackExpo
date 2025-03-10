import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [imagem, setImagem] = useState('https://source.unsplash.com/random/300x200');

  const usuarios = [
    { email: 'teste@email.com', senha: '123456' },
    { email: 'user@email.com', senha: 'abcdef' },
    { email: 'admin@email.com', senha: 'admin123' },
  ];

  function handleLogin() {
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if (user) {
      setImagem('https://cdn-icons-png.flaticon.com/512/190/190411.png'); // Imagem de sucesso
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos!');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: imagem }} style={{ width: 200, height: 150, marginBottom: 20 }} />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
