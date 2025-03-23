<template>
    <div class="product_main_div">
        <div v-if="productStore.loading" class="skeleton_container">
            <h1 class="product_heading">🛍️ Product List</h1>
            <div class="skeleton_card_container">
                <div v-for="n in 14" :key="n" class="skeleton_card">
                    <div class="skeleton_img"></div>
                    <div class="skeleton_text title"></div>
                    <div class="skeleton_text price"></div>
                    <div class="skeleton_button"></div>
                </div>
            </div>
        </div>
        <div v-else>
            <h1 class="product_heading">🛍️ Product List</h1>
            <ul class="products">
                <li v-for="product in productStore.product" :key="product.id" class="product_div">
                    <div>
                        <router-link :to="'/product/' + product.id">
                            <img class="product_img" :src="product.image" alt="Product Image" />
                        </router-link>
                        <h3 class="product_title">{{ truncateLength(product.title) }}</h3>
                        <p class="product_price">💰 Price: <span>${{ product.price.toFixed(2) }}</span></p>
                        <button class="cart_btn" @click="cartStore.addToCart(product)">🛒 Add to Cart</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(productStore.fetchProducts);

function truncateLength(title, length = 30) {
    return title.length > length ? title.substring(0, length) + "..." : title;
}
</script>

<style scoped>
/* Main Container */
.product_main_div {
    padding: 30px 50px;
    text-align: center;
    background: #f8f9fa;
}

/* Product Heading */
.product_heading {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* Product List */
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    justify-content: center;
}

/* Product Card */
.product_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    border: 1px solid #ddd;
}

.product_div:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Product Image */
.product_img {
    height: 160px;
    width: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* Product Title */
.product_title {
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 5px;
}

/* Product Price */
.product_price {
    font-size: 16px;
    font-weight: bold;
    color: #27ae60;
}

.product_price span {
    font-size: 18px;
    font-weight: bold;
}

/* Add to Cart Button */
.cart_btn {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background: #ff6b6b;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    transition: 0.3s;
}

.cart_btn:hover {
    background: #d63031;
    transform: scale(1.05);
}

/* Skeleton Loader */
.skeleton_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Skeleton Cards Container */
.skeleton_card_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    justify-content: center;
    width: 100%;
}

/* Skeleton Card */
.skeleton_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
}

/* Skeleton Elements */
.skeleton_img {
    height: 160px;
    width: 160px;
    background: #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
    animation: pulse 1.5s infinite ease-in-out;
}

.skeleton_text {
    height: 16px;
    width: 80%;
    background: #e0e0e0;
    border-radius: 4px;
    margin-bottom: 10px;
    animation: pulse 1.5s infinite ease-in-out;
}

.title {
    width: 60%;
    height: 18px;
}

.price {
    width: 40%;
    height: 18px;
}

.skeleton_button {
    width: 80%;
    height: 30px;
    background: #e0e0e0;
    border-radius: 5px;
    margin-top: 10px;
    animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
    0% {
        background-color: #e0e0e0;
    }

    50% {
        background-color: #f0f0f0;
    }

    100% {
        background-color: #e0e0e0;
    }
}
</style>