import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "«Рождение Венеры»",
        artist: "Сандро Боттичелли",
        priceOld: "2 000 000 $",
        priceNew: "1 000 000 $",
        image: require("@/assets/TheBirthOfTheVenus.jpg"),
        inCart: false,
        sold: false,
        description: "Знаменитая картина эпохи Возрождения, изображающая рождение богини Венеры.",
        images: [
          require("@/assets/TheBirthOfTheVenus.jpg"),
          // require("@/assets/TheBirthOfTheVenus_detail1.jpg"),
          // require("@/assets/TheBirthOfTheVenus_detail2.jpg"),
        ]
      },
      {
        id: 2,
        name: "«Тайная вечеря»",
        artist: "Леонардо да Винчи",
        priceOld: null,
        priceNew: "3 000 000 $",
        image: require("@/assets/TheLastSupper.jpg"),
        inCart: false,
        sold: false,
        description: "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа с учениками.",
        images: [
          require("@/assets/TheLastSupper.jpg"),
          // require("@/assets/TheLastSupper_detail1.jpg"),
          // require("@/assets/TheLastSupper_detail2.jpg"),
        ]
      },
      {
        id: 3,
        name: "«Сотворение Адама»",
        artist: "Микеланджело",
        priceOld: "6 000 000 $",
        priceNew: "5 000 000 $",
        image: require("@/assets/CreationOfAdam.jpg"),
        inCart: false,
        sold: false,
        description: "Фреска Микеланджело, являющаяся частью росписи потолка Сикстинской капеллы.",
        images: [
          require("@/assets/CreationOfAdam.jpg"),
          // require("@/assets/CreationOfAdam_detail1.jpg"),
          // require("@/assets/CreationOfAdam_detail2.jpg"),
        ]
      },
      {
        id: 4,
        name: "«Урок анатомии»",
        artist: "Рембрандт",
        priceOld: null,
        priceNew: "2 000 000 $",
        image: require("@/assets/AnatomyLesson.jpg"),
        inCart: false,
        sold: true,
        description: "Картина Рембрандта, изображающая публичное вскрытие, проводимое доктором Николасом Тульпом.",
        images: [
          require("@/assets/AnatomyLesson.jpg"),
          // require("@/assets/AnatomyLesson_detail1.jpg"),
          // require("@/assets/AnatomyLesson_detail2.jpg"),
        ]
      },
    ],
    searchQuery: '',
    modalProduct: null,
    currentImageIndex: 0
  },
  getters: {
    filteredProducts: (state) => {
      const query = state.searchQuery.toLowerCase().trim();
      return state.products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.artist.toLowerCase().includes(query)
      )
    }
  },
  mutations: {
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query
    },
    TOGGLE_CART(state, productId) {
      const product = state.products.find(p => p.id === productId)
      if (product) {
        Vue.set(product, 'inCart', !product.inCart)
      }
    },
    SET_PROCESSING(state, { productId, isProcessing }) {
      const product = state.products.find(p => p.id === productId)
      if (product) {
        Vue.set(product, 'isProcessing', isProcessing)
      }
    },
    SET_MODAL_PRODUCT(state, product) {
      state.modalProduct = product
    },
    SET_CURRENT_IMAGE_INDEX(state, index) {
      state.currentImageIndex = index
    },
    SET_CART_STATUS(state, { productId, inCart }) {
      const product = state.products.find(p => p.id === productId)
      if (product) {
        Vue.set(product, 'inCart', inCart)
      }
    },
  },
  actions: {
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query)
    },
    toggleCart({ commit, dispatch }, productId) {
      commit('SET_PROCESSING', { productId, isProcessing: true })
      setTimeout(() => {
        commit('TOGGLE_CART', productId)
        commit('SET_PROCESSING', { productId, isProcessing: false })
        dispatch('saveToLocalStorage')
      }, 2000)
    },
    openModal({ commit }, product) {
      commit('SET_MODAL_PRODUCT', product)
    },
    closeModal({ commit }) {
      commit('SET_MODAL_PRODUCT', null)
      commit('SET_CURRENT_IMAGE_INDEX', 0)
    },
    nextImage({ commit, state }) {
      if (state.modalProduct) {
        const newIndex = (state.currentImageIndex + 1) % state.modalProduct.images.length
        commit('SET_CURRENT_IMAGE_INDEX', newIndex)
      }
    },
    prevImage({ commit, state }) {
      if (state.modalProduct) {
        const newIndex = state.currentImageIndex === 0 
          ? state.modalProduct.images.length - 1 
          : state.currentImageIndex - 1
        commit('SET_CURRENT_IMAGE_INDEX', newIndex)
      }
    },
    saveToLocalStorage({ state }) {
      localStorage.setItem('cartState', JSON.stringify(
        state.products.map(p => ({ id: p.id, inCart: p.inCart }))
      ))
    },
    loadFromLocalStorage({ commit, state }) {
      const savedState = localStorage.getItem('cartState')
      if (savedState) {
        const cartState = JSON.parse(savedState)
        state.products.forEach(product => {
          const savedProduct = cartState.find(item => item.id === product.id)
          if (savedProduct) {
            commit('SET_CART_STATUS', { productId: product.id, inCart: savedProduct.inCart })
          }
        })
      }
    }
  }
})