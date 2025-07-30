import React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function AdminPostsScreen({ navigation }) {
  const { posts, setPosts } = useApp();

  const handleDelete = (id) => {
    Alert.alert('Confirmação', 'Deseja excluir este post?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => setPosts(posts.filter(p => p.id !== id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Postagens</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postSubtitle}>{item.author}</Text>
            <CustomButton title="Editar" onPress={() => navigation.navigate('PostForm', { post: item })} />
            <CustomButton title="Excluir" color="red" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  postTitle: { fontSize: 18, fontWeight: 'bold' },
  postSubtitle: { color: '#555', marginBottom: 8 }
});

