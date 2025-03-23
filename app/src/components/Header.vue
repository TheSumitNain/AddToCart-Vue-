<template>
    <div class="header_div">
        <div class="logo">MyShop</div>
        <div class="cart" @click="$router.push('/cart')">
            <i class="fas fa-shopping-cart"></i>
            <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from './../stores/cart';

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.totalItems);
</script>

<style scoped>
.header_div {
    height: 60px;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.logo {
    font-size: 22px;
    font-weight: bold;
    color: #222;
    cursor: pointer;
}

.cart {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
}

.cart > i {
    font-size: 28px;
    color: #444;
    transition: color 0.3s;
}

.cart:hover > i {
    color: #ff5c5c;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #ff5c5c;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: 2px solid #fff;
}
</style>
