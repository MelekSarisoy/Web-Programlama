<template>
  <div class="grid-container">



    <ImageSlider />
    <CategoryCircles />
    <BrandCards />
    <Card />
    <ProductCards1 />
    <ImageSlider2 />

  </div>
</template>

<script>



import ImageSlider2 from '@/components/ImageSlider2.vue'; // Bileşen dosyasını import et
import CategoryCircles from '@/components/CategoryCircles.vue';
import BrandCards from '@/components/BrandCards.vue';
import Card from '@/components/Card.vue';
import ProductCards1 from '@/components/ProductCards1.vue';




export default {
  components: {
    ImageSlider2,
    CategoryCircles,
    BrandCards,
    Card,
    ProductCards1,


  },
};
</script>


<style scoped>
.component-container > * {
  width: 100%; /* Componentlerin genişliğini %100 yaparak tam sığmasını sağla */
  max-width: 1200px; /* Her componentin max genişliğini sınırlayabilirsin */
  margin: 0 auto; /* Ortalanmasını sağla */
}
</style>
