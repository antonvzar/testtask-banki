<template>
  <transition name="modal">
    <div v-if="modalProduct" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="carousel">
          <button class="carousel-button prev" @click="prevImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="image-container">
            <img :src="currentImage" :alt="modalProduct.name" />
          </div>
          <button class="carousel-button next" @click="nextImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div class="modal-info">
          <h2 class="modal-title">{{ modalProduct.name }}</h2>
          <p class="modal-artist">{{ modalProduct.artist }}</p>
          <p class="modal-description">{{ modalProduct.description }}</p>

          <div class="modal-price-section">
            <span v-if="modalProduct.priceOld" class="modal-old-price">{{
              modalProduct.priceOld
            }}</span>
            <span class="modal-price">{{ modalProduct.priceNew }}</span>
          </div>

          <button
            v-if="!modalProduct.sold"
            @click="addToCart"
            class="modal-buy-button"
            :class="{ 'in-cart': modalProduct.inCart }"
          >
            {{ modalProduct.inCart ? "В корзине" : "Купить" }}
          </button>
          <p v-else class="modal-sold">Продана на аукционе</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["modalProduct", "currentImageIndex"]),
    currentImage() {
      return this.modalProduct?.images[this.currentImageIndex];
    },
    buttonText() {
      if (this.product.isProcessing) return "Обработка...";
      return this.product.inCart ? "В корзине" : "Купить";
    },
  },
  methods: {
    ...mapActions(["closeModal", "prevImage", "nextImage", "toggleCart"]),
    addToCart() {
      this.toggleCart(this.modalProduct.id);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
}

.close-button {
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 5px;
  z-index: 1;
}

.close-button:hover {
  color: #000;
}

.carousel {
  position: relative;
  margin-bottom: 20px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-button.prev {
  left: 10px;
}
.carousel-button.next {
  right: 10px;
}

.modal-info {
  text-align: left;
}

.modal-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.modal-artist {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.modal-description {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
}

.modal-price-section {
  margin-bottom: 20px;
}

.modal-old-price {
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
}

.modal-price {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.modal-buy-button {
  background: #3d2b1f;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}

.modal-buy-button:hover {
  background: #4d3b2f;
}

.modal-buy-button.in-cart {
  background: #5b3a32;
}

.modal-sold {
  font-size: 18px;
  color: #999;
  font-style: italic;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 1200px) {
  .modal-content {
    padding: 20px;
  }

  .carousel {
    height: 300px;
  }

  .modal-title {
    font-size: 20px;
  }

  .modal-artist {
    font-size: 16px;
  }

  .modal-description {
    font-size: 14px;
  }

  .modal-price {
    font-size: 20px;
  }

  .modal-buy-button {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
