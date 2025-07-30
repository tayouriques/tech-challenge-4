import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const { setUser } = useApp();
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = () => {
    if (username === 'prof123') {
      setUser({ name: 'Professor', role: 'professor' });
      navigation.replace('Posts');
    } else if (username === 'aluno123') {
      setUser({ name: 'Aluno', role: 'aluno' });
      navigation.replace('Posts');
    } else {
      Alert.alert('Erro', 'Usuário inválido!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <TextInput
        ref={inputRef}
        placeholder="Digite prof123 ou aluno123"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
        autoCapitalize="none"
      />
      <CustomButton title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 28, marginBottom: 16, textAlign: 'center', fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16, backgroundColor: '#fff' }
});

