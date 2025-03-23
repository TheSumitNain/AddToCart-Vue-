import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Cart from "./components/Cart.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: '/product/:id', component: ProductDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
