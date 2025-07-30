import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function TeachersScreen({ navigation }) {
  const { teachers, setTeachers } = useApp();

  const handleDelete = (id) => {
    Alert.alert('Confirmação', 'Deseja excluir este professor?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => setTeachers(teachers.filter(t => t.id !== id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professores</Text>
      <FlatList
        data={teachers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <CustomButton title="Editar" onPress={() => navigation.navigate('TeacherForm', { teacher: item })} />
            <CustomButton title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
      <CustomButton title="Adicionar Professor" onPress={() => navigation.navigate('TeacherForm')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' }
});
