import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useApp } from '../context/AppContext';
import CustomButton from '../components/CustomButton';

export default function PostFormScreen({ navigation, route }) {
  const { posts, setPosts } = useApp();
  const editingPost = route.params?.post;

  const [title, setTitle] = useState(editingPost ? editingPost.title : '');
  const [author, setAuthor] = useState(editingPost ? editingPost.author : '');
  const [description, setDescription] = useState(editingPost ? editingPost.description : '');
  const [content, setContent] = useState(editingPost ? editingPost.content : '');

  const handleSave = () => {
    if (!title || !author || !description || !content) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? { ...p, title, author, description, content } : p));
      Alert.alert('Post atualizado com sucesso!');
    } else {
      const newPost = { id: String(posts.length + 1), title, author, description, content };
      setPosts([...posts, newPost]);
      Alert.alert('Post criado com sucesso!');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Autor</Text>
      <TextInput style={styles.input} value={author} onChangeText={setAuthor} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Conteúdo</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        value={content}
        onChangeText={setContent}
      />

      <CustomButton title={editingPost ? "Salvar Alterações" : "Criar Post"} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
  label: { marginBottom: 4, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: '#fff' }
});
