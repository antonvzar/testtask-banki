<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li><a href="#" class="nav-link">Каталог</a></li>
        <li><a href="#" class="nav-link">Доставка</a></li>
        <li><a href="#" class="nav-link">Оплата</a></li>
        <li><a href="#" class="nav-link">Контакты</a></li>
        <li><a href="#" class="nav-link">О компании</a></li>
      </ul>
    </nav>
    <div class="search">
      <input
        v-model="search"
        type="text"
        placeholder="Поиск по названию картины"
        @input="updateSearch"
        class="search-input"
      />
      <button class="search-button">Найти</button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      search: "", // Локальная переменная для двустороннего связывания
    };
  },
  computed: {
    ...mapState(["searchQuery"]), // Доступ к текущему поисковому запросу
  },
  watch: {
    searchQuery(newVal) {
      this.search = newVal; // Обновляем локальное поле при изменении Vuex
    },
  },
  methods: {
    ...mapActions(["setSearchQuery"]),
    updateSearch() {
      this.setSearchQuery(this.search);
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #f6f3f3;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  height: 60px;
  border-bottom: 1px solid #e1e1e1;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.nav-link:hover {
  text-decoration: underline;
}

.search {
  display: flex;
}

.search-input {
  width: 416px;
  height: 48px;
  padding: 0 12px;
  border: 1px solid #e1e1e1;
  background-color: #f6f3f3;
  font-size: 14px;
}

.search-input::placeholder {
  color: #9f9f9f;
}

.search-button {
  height: 48px;
  width: 122px;
  padding: 0 20px;
  background: #3d2b1f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.search-button:hover {
  background: #4d3b2f;
}
</style>
