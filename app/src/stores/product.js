import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: [],
    loading: true,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.product = response.data;
      } catch (err) {
        console.log("err");
      }finally{
        this.loading = false;
      }
    },
  },
});
