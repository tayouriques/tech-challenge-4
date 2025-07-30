import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function StudentsScreen({ navigation }) {
  const { students, setStudents } = useApp();

  const handleDelete = (id) => {
    Alert.alert('Confirmação', 'Deseja excluir este estudante?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => setStudents(students.filter(s => s.id !== id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudantes</Text>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <CustomButton title="Editar" onPress={() => navigation.navigate('StudentForm', { student: item })} />
            <CustomButton title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
      <CustomButton title="Adicionar Estudante" onPress={() => navigation.navigate('StudentForm')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' }
});
