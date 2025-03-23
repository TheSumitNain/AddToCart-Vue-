import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const item = this.items.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeToCart(productId) {
      this.items = this.items.filter((p) => p.id !== productId);
    },
    incProduct(id) {
      const item = this.items.find((i) => i.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decProduct(id) {
      const item = this.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.items = this.items.filter((i) => i.id !== id);
      }
    },
    clearAll() {
      this.items = [];
    },
  },
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    discountAmount: (state) => {
      const total = state.totalPrice;
      return total > 100 ? (total * 10) / 100 : 0; // Example threshold: $100, discount: 10%
    },

    finalPrice: (state) => state.totalPrice - state.discountAmount,
  },

  persist: {
    enabled: true, // Enables persistence
    strategies: [
      {
        key: "cart-store",
        storage: localStorage, // Uses localStorage
      },
    ],
  },
});
