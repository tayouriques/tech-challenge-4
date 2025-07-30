import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function StudentFormScreen({ navigation, route }) {
  const { students, setStudents } = useApp();
  const editingStudent = route.params?.student;
  const [name, setName] = useState(editingStudent ? editingStudent.name : '');

  const handleSave = () => {
    if (!name) {
      Alert.alert('Informe o nome do estudante');
      return;
    }
    if (editingStudent) {
      setStudents(students.map(s => s.id === editingStudent.id ? { ...s, name } : s));
      Alert.alert('Estudante atualizado com sucesso!');
    } else {
      setStudents([...students, { id: String(students.length + 1), name }]);
      Alert.alert('Estudante adicionado com sucesso!');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Estudante</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <CustomButton title={editingStudent ? "Salvar Alterações" : "Adicionar Estudante"} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  label: { marginBottom: 4, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: '#fff' }
});
