<template>
  <div class="widget-title">Lotto - U.S. Polo Assn.</div>
  <div class="brand-cards">
    <div
      v-for="(brand, index) in brands"
      :key="index"
      class="brand-card"
      @click="goToLink(brand.link)"
    >
      <img :src="brand.image" :alt="brand.name" class="brand-logo" />
    </div>
  </div>
 
</template>

<script>
export default {
  name: "BrandCards",
  data() {
    return {
      brands: [
        {
          name: "Lotto",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/ikili_mob_03-lotto.jpg",
          link: "https://www.instreet.com.tr/marka/lotto",
        },
        {
          name: "U.S. Polo Assn.",
          image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/ikili_mob_04-uspa.jpg",
          link: "https://www.instreet.com.tr/marka/us-polo",
        },
      ],
    };
  },
  methods: {
    goToLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.brand-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
  background: #f5f5f5;
}

.brand-card {
  width: 540px; /* Kart genişliği */
  height: 480px; /* Kart yüksekliği */
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.brand-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.brand-logo {
  width: 100%; /* Resmi kart genişliğine göre ayarlar */
  height: 100%; /* Resmi kart yüksekliğine göre ayarlar */
  object-fit: cover; /* Resmi karta tam oturtur ve kırpma yapar */
  border-radius: 10px;
}

.widget-title {
  background-color: #f5f5f5; /* Gri arka plan */
  color: #555; /* Yazı rengi */
  font-weight: bold;
  text-align: center;
  padding: 20px 30px; /* İç boşluk */
  padding-top: 5px;
  border-radius: 8px; /* Kenar yuvarlatma */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge efekti */
  margin: 20px auto; /* Ortalama */
  max-width: 350px; /* Maksimum genişlik */
  max-height: 60px;
  margin-bottom: -45px;
  font-size: 27px;
}
</style>


