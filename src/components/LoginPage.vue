<template>
  <div class="login-container">
    <h2>Вход в систему</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      if (this.username === 'admin' && this.password === 'password') {
        this.login();
        this.$router.push('/');
      } else {
        this.errorMessage = 'Неправильное имя пользователя или пароль';
      }
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: absolute; /* Задаем абсолютное положение */
  top: 50%; /* Центрируем по вертикали */
  left: 50%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%); /* Используем трансформацию для точного центрирования */
  width: 300px; /* Ширина контейнера */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 10px 0 5px;
}

input {
  margin-bottom: 20px;
  padding: 10px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #388e3c;
}
</style>
