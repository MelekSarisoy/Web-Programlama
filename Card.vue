<template>
  <div class="product-cards-container">
    <!-- Çıkıntı başlık -->
    <div class="tab-header">
      <span class="header-text">Name It</span>
    </div>

    <!-- Gri arka planlı bölüm -->
    <div class="content-section">
      <div class="cards">
        <!-- Vans - Converse Kartı -->
        <div class="card" @click="navigateTo('/Name-it')">
          <img
              src="https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/tekli_06-nameit.jpg"
              alt="Name-It"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Sayfa yönlendirmesi
    },
  },
};
</script>

<style scoped>
.product-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 30px auto;
  border-radius: 8px; /* Kenar yuvarlatma */
}

/* Çıkıntı başlık stili */
.tab-header {
  background-color: #e8e8e8f3; /* Başlık arka planı beyaz */
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0; /* Yükseklik azaltıldı */
  border-radius: 8px 8px 0 0;
}

.header-text {
  color: #7a7878;
  font-size: 25px;
  font-weight: bold;
}

/* Gri arka planlı içerik */
.content-section {
  background-color: #e8e8e8f3;
; /* Açık gri */
  width: 100%; /* Tam genişlik */
  padding: 30px 0;
  border-radius: 0 0 8px 8px; /* Alt köşelerin yuvarlatılması */
}

/* Kartlar düzeni */
.cards {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.card {
  background: #e8e8e8f3; /* Kartların beyaz arka planı */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 1200px;
  height: 490px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
