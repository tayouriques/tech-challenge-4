import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function TeacherFormScreen({ navigation, route }) {
  const { teachers, setTeachers } = useApp();
  const editingTeacher = route.params?.teacher;
  const [name, setName] = useState(editingTeacher ? editingTeacher.name : '');

  const handleSave = () => {
    if (!name) {
      Alert.alert('Informe o nome do professor');
      return;
    }
    if (editingTeacher) {
      setTeachers(teachers.map(t => t.id === editingTeacher.id ? { ...t, name } : t));
      Alert.alert('Professor atualizado com sucesso!');
    } else {
      setTeachers([...teachers, { id: String(teachers.length + 1), name }]);
      Alert.alert('Professor adicionado com sucesso!');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Professor</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <CustomButton title={editingTeacher ? "Salvar Alterações" : "Adicionar Professor"} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  label: { marginBottom: 4, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: '#fff' }
});
