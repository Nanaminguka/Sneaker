<template>
  <div id="app">
    <nav class="top-nav">
      <router-link to="/" @click="hideContent">Главная</router-link>
      <router-link to="/about" @click="hideContent">О магазине</router-link>
      <router-link to="/login" @click="hideContent">Вход</router-link>
    </nav>

    <div class="main-content">
      <div class="sidebar">
        <h3>Каталог</h3>
        <ul>
          <li @click="goToCategory('nike')">Кроссовки Nike Air Max</li>
          <li @click="goToCategory('adidas')">Adidas UltraBoost</li>
          <li @click="goToCategory('puma')">Puma RS-X</li>
          <li @click="goToCategory('reebok')">Reebok Classic</li>
        </ul>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideContent() {
      // Здесь можно добавить функциональность для скрытия контента, если это нужно
    },
    goToCategory(category) {
      this.$router.push(`/catalog?category=${category}`);
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('./assets/your-background-image.jpg') no-repeat center center fixed;
  background-size: cover;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
}

.top-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  z-index: 1000;
}

.top-nav a {
  margin: 0 20px;
  text-decoration: none;
  font-size: 24px;
  color: white;
}

.top-nav a:hover {
  text-decoration: underline;
}

.main-content {
  display: flex;
  margin-top: 60px; /* Отступ сверху для учёта высоты навигации */
  flex-grow: 1;
}

.sidebar {
  width: 200px; /* Ширина бокового меню */
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  height: calc(100vh - 60px); /* Высота с учётом верхнего меню */
}

.sidebar h3 {
  margin: 0;
  color: white;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 10px 0;
  cursor: pointer;
  color: white;
}

.sidebar li:hover {
  text-decoration: underline;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto; /* Прокрутка контента */
}
</style>
