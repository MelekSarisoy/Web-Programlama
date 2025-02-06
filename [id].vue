<template>
  <div class="category-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">Kategori</h2>
      <ul class="category-list">
        <li v-for="category in allCategories" :key="category.id" class="category-item">
          <NuxtLink :to="`/category/${category.id}`" class="category-link">
            {{ category.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Filters -->
      <div class="filters">
        <div class="filter-group" v-for="filter in filters" :key="filter.title">
          <h3 class="filter-title" @click="toggleFilter(filter.title)">
            {{ filter.title }}
          </h3>
          <ul v-show="isFilterVisible(filter.title)" class="filter-options">
            <li v-for="option in filter.options" :key="option" class="filter-option">
              <input type="checkbox" :id="option" class="filter-checkbox" />
              <label :for="option">{{ option }}</label>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Product Section -->
    <main class="product-section">
      <h1 class="category-title">{{ categoryName }}</h1>

      <!-- Loading & Error Handling -->
      <p v-if="productStore.loading">Loading products...</p>
      <p v-if="productStore.error" class="error">{{ productStore.error }}</p>

      <ProductGrid v-if="!productStore.loading && productStore.products.length > 0" :products="productStore.products" />
      <p v-else-if="!productStore.loading && productStore.products.length === 0">
        No products available in this category.
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useCategoryStore } from "@/stores/categoryStore";
import ProductGrid from "@/components/ProductGrid.vue";

const route = useRoute();
const categoryStore = useCategoryStore();
const productStore = useProductStore();

const categoryName = ref<string>("Unknown Category");
const visibleFilters = ref<string[]>([]);

// Toggle filter visibility
const toggleFilter = (title: string) => {
  if (visibleFilters.value.includes(title)) {
    visibleFilters.value = visibleFilters.value.filter(filter => filter !== title);
  } else {
    visibleFilters.value.push(title);
  }
};

const isFilterVisible = (title: string) => visibleFilters.value.includes(title);

// Fetch category and products
watchEffect(async () => {
  const categoryId = route.params.id as string;
  if (!categoryId) return;

  await categoryStore.fetchCategories();
  const category = await categoryStore.fetchCategory(categoryId);

  categoryName.value = category ? category.name : "Unknown Category";

  await productStore.fetchProductsByCategory(categoryId);
});

const allCategories = computed(() => categoryStore.categories);
</script>

<style scoped>
.category-page {
  display: flex;
}

.sidebar {
  width: 250px;
  padding: 20px;
  background: #f8f9fa;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-item {
  margin-bottom: 10px;
}

.category-link {
  text-decoration: none;
  color: #007bff;
}

.category-link:hover {
  text-decoration: underline;
}

.filters {
  margin-top: 20px;
}

.filter-group {
  margin-bottom: 10px;
}

.filter-title {
  cursor: pointer;
  font-weight: bold;
}

.filter-options {
  list-style: none;
  padding: 0;
}

.filter-option {
  margin-bottom: 5px;
}

.filter-checkbox {
  margin-right: 5px;
}

.product-section {
  flex: 1;
  padding: 20px;
}

.error {
  color: red;
}
</style>
