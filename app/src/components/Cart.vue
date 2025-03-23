<template>
    <div class="cart-container">
        <h2>🛒 Your Cart</h2>

        <div v-if="cartStore.items.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartStore.items" :key="item.id">
                        <td>{{ truncateLength(item.title) }}</td>
                        <td>₹{{ item.price.toFixed(1) }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>₹{{ (item.price * item.quantity).toFixed(1) }}</td>
                        <td>
                            <button @click="cartStore.incProduct(item.id)">➕</button>
                            <button @click="cartStore.decProduct(item.id)">➖</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Styled Cart Summary -->
            <div class="cart-summary">
                <p><strong>Total Items:</strong> <span class="highlight">{{ cartStore.totalItems }}</span></p>
                <p><strong>Total Price:</strong> <span class="price">₹{{ cartStore.totalPrice.toFixed(2) }}</span></p>
                <p v-if="cartStore.discountAmount > 0">
                    <strong>Discount (10% off):</strong> 
                    <span class="discount">-₹{{ cartStore.discountAmount.toFixed(2) }}</span>
                </p>
                <p><strong>Final Price:</strong> <span class="final-price">₹{{ cartStore.finalPrice.toFixed(2) }}</span></p>
            </div>

            <!-- Styled Clear All Button -->
            <button class="clear-btn" @click="cartStore.clearAll()">🗑️ Clear All</button>
        </div>

        <div v-else>
            <p>Your cart is empty. 🛍️</p>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from './../stores/cart'; 

const cartStore = useCartStore();

function truncateLength(title, length = 30) {
    return title.length > length ? title.substring(0, length) + "..." : title;
}
</script>

<style scoped>
.cart-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}

th {
    background: #f4f4f4;
}

button {
    margin: 5px;
    padding: 8px;
    cursor: pointer;
    border: none;
    background: #3498db;
    color: white;
    border-radius: 4px;
    transition: 0.3s;
    font-size: 14px;
}

button:hover {
    background: #2980b9;
}

/* Styled Cart Summary */
.cart-summary {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
}

.highlight {
    color: #2c3e50;
    font-weight: bold;
}

.price {
    color: #27ae60;
    font-size: 20px;
    font-weight: bold;
}

.discount {
    color: #e74c3c;
    font-size: 18px;
}

.final-price {
    color: #d35400;
    font-size: 22px;
    font-weight: bold;
}

/* Clear All Button */
.clear-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: #e74c3c;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 6px;
    text-align: center;
    margin-top: 15px;
    transition: 0.3s;
}

.clear-btn:hover {
    background: #c0392b;
}
</style>
