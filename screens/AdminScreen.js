import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function AdminScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Administrativo</Text>
      <CustomButton title="Gerenciar Postagens" onPress={() => navigation.navigate('AdminPosts')} />
      <CustomButton title="Gerenciar Professores" onPress={() => navigation.navigate('Teachers')} />
      <CustomButton title="Gerenciar Estudantes" onPress={() => navigation.navigate('Students')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }
});
