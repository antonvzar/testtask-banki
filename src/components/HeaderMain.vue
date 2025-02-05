<template>
  <header class="header">
    <!-- Десктопная версия -->
    <template v-if="!isMobile">
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
    </template>

    <!-- Мобильная версия -->
    <template v-else>
      <div class="header">
        <button class="menu-button" @click="toggleMenu">Меню</button>
        <button class="search-icon" @click="toggleSearch">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="7" stroke="black" stroke-width="2" />
            <line
              x1="16.5"
              y1="16.5"
              x2="22"
              y2="22"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>

      <transition name="fade">
        <nav v-if="menuOpen" class="nav">
          <ul class="nav-list">
            <li><a href="#" class="nav-link">Каталог</a></li>
            <li><a href="#" class="nav-link">Доставка</a></li>
            <li><a href="#" class="nav-link">Оплата</a></li>
            <li><a href="#" class="nav-link">Контакты</a></li>
            <li><a href="#" class="nav-link">О компании</a></li>
          </ul>
        </nav>
      </transition>

      <transition name="fade">
        <div v-if="searchOpen" class="search-mobile">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск..."
            @input="updateSearch"
            class="search-input"
          />
          <button class="search-button">Найти</button>
        </div>
      </transition>
    </template>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
      menuOpen: false,
      searchOpen: false,
      isMobile: window.innerWidth < 1200,
    };
  },
  computed: {
    ...mapState(["searchQuery"]),
  },
  watch: {
    searchQuery(newVal) {
      this.search = newVal;
    },
  },
  methods: {
    ...mapActions(["setSearchQuery"]),
    updateSearch() {
      this.setSearchQuery(this.search);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) this.searchOpen = false;
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      if (this.searchOpen) this.menuOpen = false;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 1200;
      if (!this.isMobile) {
        this.menuOpen = false;
        this.searchOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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

@media (max-width: 1200px) {
  .nav-list {
    display: none;
  }

  .search {
    display: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .menu-container {
    position: relative;
  }

  .menu-button {
    position: relative;
    left: 50px;
    background: #3d2b1f;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
  }

  .nav {
    position: absolute;
    z-index: 9999;
    top: 60px;
    left: 50px;
    width: 250px;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;
  }

  .nav .nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 0;
  }

  .search-container {
    position: relative;
  }

  .search-icon {
    position: relative;
    right: 50px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .search-mobile {
    position: absolute;
    z-index: 9999;
    top: 60px;
    right: 50px;
    width: 250px;
    padding: 12px;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-input {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #e1e1e1;
    background-color: #f6f3f3;
    font-size: 14px;
  }

  .search-button {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background: #3d2b1f;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  .search-button:hover {
    background: #4d3b2f;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
