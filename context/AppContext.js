import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([
    { id: '1', title: 'Primeiro Post', author: 'Prof. A', description: 'Resumo do post 1', content: 'Conteúdo completo do post 1' },
    { id: '2', title: 'Segundo Post', author: 'Prof. B', description: 'Resumo do post 2', content: 'Conteúdo completo do post 2' },
  ]);
  const [teachers, setTeachers] = useState([{ id: '1', name: 'Professor A' }]);
  const [students, setStudents] = useState([{ id: '1', name: 'Aluno A' }]);

  return (
    <AppContext.Provider value={{ user, setUser, posts, setPosts, teachers, setTeachers, students, setStudents }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

