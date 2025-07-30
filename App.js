import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/AppContext';
import LoginScreen from './screens/LoginScreen';
import PostListScreen from './screens/PostListScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import PostFormScreen from './screens/PostFormScreen';
import AdminScreen from './screens/AdminScreen';
import AdminPostsScreen from './screens/AdminPostsScreen';
import TeachersScreen from './screens/TeachersScreen';
import TeacherFormScreen from './screens/TeacherFormScreen';
import StudentsScreen from './screens/StudentsScreen';
import StudentFormScreen from './screens/StudentFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="Posts" component={PostListScreen} options={{ title: 'Lista de Posts' }} />
          <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: 'Detalhes do Post' }} />
          <Stack.Screen name="PostForm" component={PostFormScreen} options={{ title: 'Criar / Editar Post' }} />
          <Stack.Screen name="Admin" component={AdminScreen} options={{ title: 'Administração' }} />
          <Stack.Screen name="AdminPosts" component={AdminPostsScreen} options={{ title: 'Gerenciar Posts' }} />
          <Stack.Screen name="Teachers" component={TeachersScreen} options={{ title: 'Professores' }} />
          <Stack.Screen name="TeacherForm" component={TeacherFormScreen} options={{ title: 'Editar Professor' }} />
          <Stack.Screen name="Students" component={StudentsScreen} options={{ title: 'Estudantes' }} />
          <Stack.Screen name="StudentForm" component={StudentFormScreen} options={{ title: 'Editar Estudante' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

