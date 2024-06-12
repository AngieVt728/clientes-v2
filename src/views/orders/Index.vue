<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, name: 'Producto 1', price: 10, selected: false, quantity: 1 },
  { id: 2, name: 'Producto 2', price: 20, selected: false, quantity: 1 },
  { id: 3, name: 'Producto 3', price: 30, selected: false, quantity: 1 },
]);

const selectedProducts = computed(() => {
  return products.value.filter(product => product.selected);
});

const totalPrice = computed(() => {
  return selectedProducts.value.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
});

const toggleProductSelection = (product) => {
  product.selected = !product.selected;
};

const updateQuantity = (product, event) => {
  const quantity = parseInt(event.target.value, 10);
  if (!isNaN(quantity) && quantity > 0) {
    product.quantity = quantity;
  }
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Orders</h2>

    <div class="space-y-4">
      <div v-for="product in products" :key="product.id" class="flex items-center space-x-4">
        <input 
          type="checkbox" 
          :id="`product-${product.id}`" 
          v-model="product.selected"
          @change="toggleProductSelection(product)"
          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <label :for="`product-${product.id}`" class="text-lg">
          {{ product.name }} - ${{ product.price }}
        </label>
        <input 
          type="number" 
          min="1" 
          v-model.number="product.quantity" 
          @input="updateQuantity(product, $event)"
          class="form-input mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>

    <div class="mt-6">
      <h3 class="text-xl font-semibold mb-2">Resumen del Pedido</h3>
      <ul class="list-disc pl-5">
        <li v-for="product in selectedProducts" :key="product.id">
          {{ product.quantity }} x {{ product.name }} - ${{ product.price * product.quantity }}
        </li>
      </ul>
      <div class="mt-4 text-lg font-bold">
        Total: ${{ totalPrice }}
      </div>
    </div>
  </div>
</template>



