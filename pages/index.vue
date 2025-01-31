<template>
  <div class="grid-container">
    <Header />
    <SearchBar />
    <CategoryList />
    <ImageSlider />
    <CategoryCircles />
    <BrandCards />
    <Card />
    <ProductCards1 />
    <ImageSlider2 />
    <Footer />
  </div>
</template>

<style scoped>
.component-container > * {
  width: 100%; /* Componentlerin genişliğini %100 yaparak tam sığmasını sağla */
  max-width: 1200px; /* Her componentin max genişliğini sınırlayabilirsin */
  margin: 0 auto; /* Ortalanmasını sağla */
}

</style>
