<template>
    <div class="product-list">
      <div v-if="loading" class="loading">Ürünler Yükleniyor...</div>
      <div v-else>
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="badge" v-if="product.kampanya">3 AL 2 ÖDE</div>
          <div class="new-season">Yeni Sezon</div>
  
          <div class="product-image">
            <img :src="product.image" :alt="product.brand + ' ' + product.category" />
          </div>
  
          <div class="product-info">
            <h4 class="product-brand">{{ product.brand }}</h4>
            <h5 class="product-title">{{ product.title }}</h5>
            <p class="product-category">{{ product.category }}</p>
  
            <div class="product-rating">
              ⭐⭐⭐⭐☆ ({{ product.reviews || 66 }})
            </div>
  
            <h3 class="product-price">{{ product.price.toLocaleString() }} TL</h3>
  
            <p v-if="product.indirimli > 0" class="product-discount">
              <span class="discount-price">{{ product.indirimli.toLocaleString() }} TL</span>
            </p>
  
            <button class="btn btn-dark w-100 mt-3" @click="addToCart(product)">
              SEPETE EKLE
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from "@/firebase" ;
  

  const products = ref<any[]>([]);
  const loading = ref(true);
  
  

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      products.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Ürünleri çekerken hata oluştu:", error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(fetchProducts);
  
  const addToCart = (product: any) => {
    console.log("Sepete eklendi:", product);
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    width: 300px;
    background-color: white;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 5px;
  }
  
  .new-season {
    position: absolute;
    top: 40px;
    left: 10px;
    background: black;
    color: white;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 3px;
  }
  
  .product-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .product-brand {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  
  .product-title {
    font-size: 16px;
    font-weight: bold;
  }
  
  .product-category {
    font-size: 14px;
    color: gray;
  }
  
  .product-price {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
  
  .product-discount .discount-price {
    font-size: 18px;
    color: brown;
    text-decoration: line-through;
  }
  
  .loading {
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  