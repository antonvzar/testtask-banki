<template>
  <div class="card" :class="{ sold: product.sold }">
    <div @click="openModal(product)" class="image-container">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="text-content">
      <div class="name-artist-block" @click="openModal(product)">
        <h2>{{ product.name }}</h2>
        <h2>{{ product.artist }}</h2>
      </div>
      <div v-if="!product.sold">
        <div class="price-buy-block">
          <div class="prices">
            <h5 v-if="product.priceOld" class="old-price">
              {{ product.priceOld }}
            </h5>
            <h3 class="price">{{ product.priceNew }}</h3>
          </div>
          <button
            v-if="!product.sold"
            @click="handleBuy"
            :class="{
              active: product.inCart,
              processing: product.isProcessing,
            }"
            :disabled="product.isProcessing"
          >
            <span v-if="product.isProcessing" class="loader"></span>
            <span v-else-if="product.inCart" class="check-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_20219_57)">
                  <path
                    d="M16.5315 4.80937L7.63341 14.237L3.34814 10.1924"
                    stroke="#F4F6F9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20219_57">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>{{ buttonText }}</span>
          </button>
        </div>
      </div>
      <div v-else class="price-buy-block">Продана на аукционе</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  computed: {
    buttonText() {
      if (this.product.isProcessing) return "Обработка...";
      return this.product.inCart ? "В корзине" : "Купить";
    },
  },
  methods: {
    ...mapActions(["toggleCart", "openModal"]),
    handleBuy() {
      this.toggleCart(this.product.id);
    },
  },
};
</script>

<style scoped>
.card {
  width: 280px;
  height: 328px;
  border: 1px solid #e1e1e1;
  background-color: #f6f3f3;
}

.card img {
  width: 100%;
  height: 168px;
  object-fit: cover;
}

.text-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.name-artist-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name-artist-block h2 {
  margin: 0;
}

.price-buy-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  height: 48px;
}

.prices {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  margin: 0 0 0 0;
}

.price {
  font-weight: bold;
  margin: 0;
  align-self: center;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 118px;
  background: #3d2b1f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  gap: 6px;
}

button:hover {
  background: #776763;
}

button.active {
  background: #5b3a32;
  outline: none;
}

.sold {
  opacity: 0.5;
  pointer-events: none;
}

.check-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  cursor: pointer;
  transition: opacity 0.3s;
}

.image-container:hover {
  opacity: 0.9;
}

.loader {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top-color: rgba(255, 255, 255, 0.3);
  animation: spin 1s linear infinite;
  box-sizing: border-box;
  aspect-ratio: 1/1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.processing {
  opacity: 0.8;
  cursor: wait;
}
</style>
