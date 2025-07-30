import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostDetailScreen({ route }) {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>Autor: {post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  author: { fontSize: 16, fontStyle: 'italic', marginBottom: 12, color: '#555' },
  content: { fontSize: 16 }
});
