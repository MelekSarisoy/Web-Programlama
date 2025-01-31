<template>
  <div class="container-fluid mt-4 text-center">
    <p style="font-size: 24px; text-align: left;" class="mb-4">Sizin İçin Seçtiklerimiz</p>
    <div
      id="productCarousel"
      class="carousel mx-auto"
      width: 100%
    >
      <div class="carousel-inner">
        <!-- Her carousel-item içinde 5 ürün -->
        <div v-for="(chunk, index) in chunkedProducts" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
          <div class="row justify-content-center">
            <div
              v-for="(product, i) in chunk"
              :key="i"
              class="col-md-2 d-flex justify-content-center"
            >
              <div class="card text-center position-relative" style="width: 12rem">
                <a :href="product.link" target="_blank">
                  <img
                    :src="product.image"
                    class="card-img-top"
                    alt="product image"
                  />
                </a>
                <!-- İndirim Kutusu -->
                <div v-if="index === 0 && i === 0" class="discount-box">
                  -{{ product.discount }}%
                </div>
                <div class="card-body">
                  <!-- Marka İsmi -->
                  <h6 class="card-title fw-bold fs-6">{{ product.brand }}</h6>
                  <!-- Açıklama her üründe gösterilecek -->
                  <p class="card-text text-muted">{{ product.description }}</p>

                  <p class="card-text">
                    <span class="prices">
                      <!-- İlk ürün için eski fiyatı göster -->
                      <span v-if="index === 0 && i === 0" class="old-price"><del>{{ product.oldPrice }}</del></span>
                      <!-- Mevcut fiyat her zaman gösterilecek -->
                      <span class="current-price">{{ product.price }}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" @click="prevSlide">
        <i class="bi bi-chevron-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextSlide">
        <i class="bi bi-chevron-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Aktif sayfa indeksi
      products: [], // Ürün bilgileri kaldırıldı
    };
  },
  computed: {
    chunkedProducts() {
      const chunkSize = 5; // Her sayfada kaç ürün gösterilecek
      return this.products.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);
    },
  },
  methods: {
    nextSlide() {
      // Bir sonraki slayda geç
      this.currentIndex = (this.currentIndex + 1) % this.chunkedProducts.length;
    },
    prevSlide() {
      // Bir önceki slayda geç
      this.currentIndex =
        (this.currentIndex - 1 + this.chunkedProducts.length) % this.chunkedProducts.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
}

.card {
  margin: 0.5rem;
  border: 3px solid #ffffff;
  width: 250px;
  position: relative; /* Burada kartı relative yapıyoruz ki kutu buna göre konumlandırılabilsin */
}
.card-body {
  text-align: left;
}

.discount-box {
  background-color: orange;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  position: absolute;
  bottom: 10.5rem;
  left: 0.5rem;
  border-radius: 5px;
  z-index: 10;
}

.card-title {
  font-weight: bold;
  font-size: 1.1rem;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 2rem;
  width: 15%;
}

.prices {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 0.3rem;
}

.old-price {
  color: gray;
  font-size: 1rem;
}

.current-price {
  color: orange;
  font-size: 1.2rem;
  display: flex;
  align-items: baseline;
}

.current-price .currency {
  font-size: 1rem;
  margin-left: 0.1rem;
}
</style>



