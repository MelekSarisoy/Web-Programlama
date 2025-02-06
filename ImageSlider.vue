<template>
  <div class="carousel">
    <div class="carousel-container">
      <!-- Carousel Items -->
      <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="carousel-item"
          :class="{ active: currentIndex === index }"
      >
        <img :src="item.image" alt="carousel image" class="carousel-image" />
      </div>
    </div>

    <!-- Left Arrow -->
    <button @click="prevSlide" class="carousel-nav prev">&#10094;</button>

    <!-- Right Arrow -->
    <button @click="nextSlide" class="carousel-nav next">&#10095;</button>

    <!-- Pagination Dots -->
    <div class="carousel-dots">
      <span
          v-for="(item, index) in carouselItems"
          :key="'dot-' + index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data() {
    return {
      currentIndex: 0,
      carouselItems: [
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_02-outdoor.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_03-jj.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_04_botfirsatlari.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_05-giyim.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_06-reebok.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_07-puma.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider_08-nike.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/28/slider-09-ck_tommy.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/02/1000-tl-indirim.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-12/02/slider.jpg" },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    prevSlide() {
      this.currentIndex =
          (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
}
</script>

<style scoped>
.carousel {
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.carousel-container {
  display: flex;
  width: 100%;
  position: relative;
}

.carousel-item {
  flex: 0 0 100%;
  width: 100%;
  display: none;
  position: relative;
}

.carousel-item.active {
  display: block;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 650px;
  object-fit: cover;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 50px; /* Butonun genişliği */
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  z-index: 10;
}

.carousel-nav.prev {
  left: 60px;
}

.carousel-nav.next {
  right: 60px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: gray;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dot.active {
  background-color: black;
}
</style>
