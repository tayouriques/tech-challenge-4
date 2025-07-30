# 📱 Blog Educacional


Aplicativo desenvolvido como parte do **Tech Challenge – Fase 4 (Pós Tech em Desenvolvimento Fullstack da FIAP)**.  
---

## 🎯 Objetivos
O objetivo é oferecer uma plataforma simples para que **professores** e **alunos** possam visualizar e gerenciar postagens educacionais. Respeitando os seguintes requisitos:
- Permitir que **professores** criem, editem e excluam postagens;
- Permitir que **alunos** acessem postagens (visualização somente);
- Oferecer um painel administrativo para **gerenciar posts, professores e alunos**;
- Utilizar **React Native com Expo**, garantindo compatibilidade com Android e iOS.

---

## ⚙️ Funcionalidades
### Autenticação
- Login com dois perfis simulados:
  - **Professor:** `prof123`
  - **Aluno:** `aluno123`
- Controle de permissões:
  - **Professor** → pode criar, editar e excluir posts, professores e estudantes.
  - **Aluno** → pode apenas visualizar posts.

### Posts
- Listagem com **título, autor e descrição**.
- Busca por palavra-chave.
- Visualização completa do conteúdo.
- **Criação e edição** de posts (somente professores).
- Exclusão de posts (somente professores).

### Administração
- Tela administrativa com:
  - **Gerenciar Postagens**: editar e excluir posts existentes.
  - **Gerenciar Professores**: listar, adicionar, editar e excluir professores.
  - **Gerenciar Estudantes**: listar, adicionar, editar e excluir estudantes.

---

## 🛠️ Tecnologias utilizadas
- **React Native (Expo)**
- **Expo Go** para testes rápidos
- **React Navigation** para navegação entre telas
- **Context API** para gerenciamento de estado global
- **JavaScript (ES6+)**

---

## 📂 Estrutura de Pastas
```
.
├── App.js
├── context
│   └── AppContext.js
├── components
│   └── CustomButton.js
├── screens
│   ├── LoginScreen.js
│   ├── PostListScreen.js
│   ├── PostDetailScreen.js
│   ├── PostFormScreen.js
│   ├── AdminScreen.js
│   ├── AdminPostsScreen.js
│   ├── TeachersScreen.js
│   ├── TeacherFormScreen.js
│   ├── StudentsScreen.js
│   └── StudentFormScreen.js
```

---

## 🚀 Como rodar o projeto
### 1. Via Expo Go (recomendado)
1. Acesse [https://snack.expo.dev](https://snack.expo.dev) e importe o projeto.  
2. Clique em **"Run"** ou escaneie o QR Code com o app **Expo Go** no celular.  

### 2. Localmente
1. **Instale o Node.js (LTS)**: [https://nodejs.org/](https://nodejs.org/)  
2. **Instale o Expo CLI:**
   ```bash
   npm install -g expo-cli
   ```
3. **Clone o repositório:**
   ```bash
   git clone https://github.com/tayouriques/tech-challenge-4.git
   ```
4. **Instale as dependências:**
   ```bash
   npm install
   ```
5. **Rode o projeto:**
   ```bash
   npx expo start
   ```

---

## 📌 Observações
- Os dados (posts, professores e estudantes) estão **mockados** localmente.
- Pronto para integração com **back-end via API REST**.
---

## 👩‍💻 Autoria
Desenvolvido por **Taynara Ouriques**.
