<template>
  <div class="category-circles">
    <div
        v-for="(category, index) in categories"
        :key="index"
        class="circle"
        :style="{ backgroundImage: `url(${category.image})` }"
    >
      <span class="circle-text">{{ category.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCircles",
  data() {
    return {
      categories: [
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-10/31/saan-ozel.gif" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-10/30/1encokindirimegirenler.gif" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/20/3superfiyat.gif" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/20/4_30_40_50.gif" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/20/5coksatanlar-1732091549.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-10/30/7mont.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-10/30/8sweat.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/18/5botfirsatlari.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-10/30/6sugecirmezler.jpg" },
        { image: "https://floimages.mncdn.com/media/catalog/product/img/banners/24-11/17/atki-bere-eldiven.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.category-circles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.circle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.circle-text {
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  text-align: center;
}
</style>