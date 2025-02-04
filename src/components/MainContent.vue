<template>
  <main class="content">
    <div class="gallery-wrapper">
      <h1 class="section-title">Картины эпохи Возрождения</h1>
      <div class="gallery">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <ProductModal />
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "./ProductCard.vue";
import ProductModal from "./ProductModal.vue";

export default {
  components: {
    ProductCard,
    ProductModal,
  },
  computed: {
    ...mapGetters(["filteredProducts"]),
  },
  methods: {
    ...mapActions(["setProducts", "loadFromLocalStorage"]),
  },
  created() {
    this.setProducts(this.products);
    this.loadFromLocalStorage();
  },
};
</script>

<style scoped>
.content {
  display: flex;
  padding: 20px;
  justify-content: center;
}

.gallery-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
}

.section-title {
  margin-bottom: 20px;
  margin-left: 0;
}

.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
