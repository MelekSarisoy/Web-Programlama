<template>
  <client-only>
    <nav class="category-nav">
      <ul class="category-list">
        <li v-for="category in categories" :key="category.id" class="category-item">
          <NuxtLink :to="`/category/${category.id}`" class="category-link">{{ category.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: "CategoryList",
  components: {
    RouterLink
  },
  setup() {
    const categoryStore = useCategoryStore();

    onMounted(() => {
      categoryStore.fetchCategories();
    });

    const categories = computed(() => categoryStore.categories);

    return {
      categories,
    };
  },
});
</script>

<style scoped>
.category-nav {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
}

.category-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  font-size: 20px;
  gap: 15px;
}

.category-link {
  text-decoration: none;
  color: #212529;
  text-transform: uppercase;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
}

.category-link:hover {
  color: black;
}

/* Alt Menü */
.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  padding: 10px;
  z-index: 1000;
  min-width: 200px;
}

.menu-item:hover .submenu {
  display: block;
}

.submenu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.submenu li {
  margin-bottom: 5px;
}

.submenu li a {
  font-size: 14px;
  color: #000;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
}

.submenu li a:hover {
  color: #007bff;
  text-decoration: underline;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    align-items: center;
  }

  .menu-link {
    padding: 10px;
  }
}
</style>
