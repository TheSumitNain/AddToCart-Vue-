<template>
    <div class="product-details" v-if="product">
        <button class="back-btn" @click="$router.push('/')">⬅️ Back</button>
        <h1>{{ product.title }}</h1>
        <img :src="product.image" alt="Product Image" class="product-image" />
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">💰 Price: ${{ product.price.toFixed(2) }}</p>
        <button class="cart-btn" @click="cartStore.addToCart(product)">🛒 Add to Cart</button>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = computed(() => 
    productStore.product.find(p => p.id === Number(route.params.id))
);
</script>

<style scoped>
.product-details {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
}
.product-image {
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin: 20px 0;
}
.product-description {
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
}
.product-price {
    font-size: 22px;
    font-weight: bold;
    color: #27ae60;
}
.cart-btn, .back-btn {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px;
}
.cart-btn {
    background: #ff6b6b;
    color: white;
}
.cart-btn:hover {
    background: #d63031;
}
.back-btn {
    background: #6c757d;
    color: white;
}
.back-btn:hover {
    background: #495057;
}
</style>
