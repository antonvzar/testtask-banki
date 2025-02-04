<template>
  <div id="app">
    <HeaderMain />
    <main class="content">
      <MainContent />
    </main>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import MainContent from "./components/MainContent.vue";
import FooterMain from "./components/FooterMain.vue";

export default {
  components: {
    HeaderMain,
    MainContent,
    FooterMain,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Merriweather", serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Заполняем всю высоту экрана */
  background-color: #f6f3f3;
}

.content {
  flex: 1; /* Основное содержимое растягивается */
}

h1 {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
}

h2 {
  font-size: 18px;
  font-weight: normal;
  line-height: 27px;
}

h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
}

h4 {
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
}

h5 {
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
}

h6 {
  font-size: 14px;
  font-weight: lighter;
  line-height: 21px;
}

button,
input,
textarea {
  font-family: "Merriweather", serif;
}
</style>
