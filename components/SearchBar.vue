<template>
  <header class="p-3 bg-light border-bottom">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="/">
          <img 
            src="https://www.instreet.com.tr/pub/assets/instreet-v2/images/instreet-logo-v2-black.svg" 
            alt="Logo" 
            width="200" 
          />
        </NuxtLink>
      </div>

      <!-- Arama Çubuğu -->
      <div class="search-bar flex-grow-1 mx-3 position-relative">
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-search"></i>
          </span>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Aradığınız ürün, marka veya kategoriyi yazınız"
            @focus="showSuggestions = true" 
            @blur="hideSuggestions"
          />
        </div>
        <!-- Arama Önerileri -->
        <div 
          v-if="showSuggestions" 
          class="search-suggestions bg-white border rounded shadow mt-1 p-2 overflow-auto"
          style="max-height: 300px"
        >
          <div class="mb-2"><strong>Popüler Aramalar</strong></div>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <a href="/search/nike" class="badge bg-light text-dark border no-underline">Nike</a>
            <a href="/search/puma" class="badge bg-light text-dark border no-underline">Puma</a>
            <a href="/search/adidas" class="badge bg-light text-dark border no-underline">Adidas</a>
            <a href="/search/reebok" class="badge bg-light text-dark border no-underline">Reebok</a>
            <a href="/search/krampon" class="badge bg-light text-dark border no-underline">Krampon</a>
            <a href="/search/vans" class="badge bg-light text-dark border no-underline">Vans</a>
            <a href="/search/bot" class="badge bg-light text-dark border no-underline">Bot</a>
            <a href="/search/court-sneaker-tarzi" class="badge bg-light text-dark border no-underline">Court Sneaker Tarzı</a>
            <a href="/search/mont" class="badge bg-light text-dark border no-underline">Mont</a>
            <a href="/search/lumberjack" class="badge bg-light text-dark border no-underline">Lumberjack</a>
          </div>
          <div class="mb-2"><strong>Son Baktığınız Ürünler</strong></div>
          <ul class="list-unstyled">
            <li class="mb-2 d-flex align-items-center">
              <a href="/product/101918152" class="d-flex align-items-center no-underline">
                <img src="https://floimages.mncdn.com/mncropresize/100/150/media/catalog/product/24-05/22/101918152_f2.jpg" alt="" class="me-2" />
                <div>
                  <strong>Reebok</strong> - SPEED REFLECT 3.2 Siyah Erkek Spor Ayakkabı<br>
                  <span class="text-muted text-decoration-line-through">2.399,99 TL</span>
                  <span class="text-orange fw-bold">1.699,99 TL</span>
                </div>
              </a>
            </li>
            <li class="mb-2 d-flex align-items-center">
              <a href="/product/101792764" class="d-flex align-items-center no-underline">
                <img src="https://floimages.mncdn.com/mncropresize/100/150/media/catalog/product/23-06/22/101792764_d2.jpeg" alt="" class="me-2" />
                <div>
                  <strong>Nike</strong> - COURT BOROUGH LOW RECRAFT Beyaz Unisex Sneaker<br>
                  <span class="text-muted text-decoration-line-through">3.499,99 TL</span>
                  <span class="text-orange fw-bold">2.799,99 TL</span>
                </div>
              </a>
            </li>
            <li class="mb-2 d-flex align-items-center">
              <a href="/product/102056221" class="d-flex align-items-center no-underline">
                <img src="https://floimages.mncdn.com/mncropresize/100/150/media/catalog/product/24-10/09/102056221_m1-1728464366.jpg" alt="" class="me-2" />
                <div>
                  <strong>Jack & Jones</strong> - JORVESTERBRO PUFFER JACKE Siyah Erkek Mont<br>
                  <span class="text-muted text-decoration-line-through">3.899,99 TL</span>
                  <span class="text-orange fw-bold">2.299,99 TL</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Butonlar -->
      <div class="buttons d-flex align-items-center gap">
        <!-- Giriş Yap -->
        <div 
          class="dropdown position-relative"
          @mouseover="showLoginDropdown = true" 
          @mouseleave="showLoginDropdown = false"
        >
          <button class="btn btn-outline-secondary d-flex align-items-center" type="button">
            <i class="bi bi-person me-2"></i> Giriş Yap
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
          <ul 
            v-if="showLoginDropdown" 
            class="dropdown-menu show position-absolute"
          >
            <li><button class="dropdown-item">Giriş Yap</button></li>
            <li><button class="dropdown-item">Üye Ol</button></li>
          </ul>
        </div>

        <!-- Sepetim -->
        <div class="dropdown position-relative">
          <button 
            class="btn btn-outline-secondary d-flex align-items-center" 
            @click="openCart"
          >
            <i class="bi bi-cart me-2"></i> Sepetim
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Sepetim Boş Sayfa -->
  <div v-if="cartOpen" class="empty-cart p-5 text-center">
    <h5>Sepetiniz şu an boş</h5>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSuggestions = ref(false);
const cartOpen = ref(false);
const showLoginDropdown = ref(false);

const hideSuggestions = () => {
  setTimeout(() => (showSuggestions.value = false), 200);
};

const openCart = () => {
  cartOpen.value = !cartOpen.value;
};
</script>

<style scoped>
.logo img {
  max-height: 50px;
}

.input-group-text {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-right: none;
}

.input-group .form-control {
  border-left: none;
  height: 55px;
  font-size: 17px;
}

.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  overflow-y: auto;
}

.text-orange {
  color: #fd7e14;
}

.text-decoration-line-through {
  text-decoration: line-through;
}

.dropdown-menu {
  top: 100%;
  left: 0;
  right: auto;
  margin-top: 5px;
  z-index: 1000;
}

.empty-cart {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-top: 20px;
}

.bi-chevron-down {
  font-size: 0.8rem;
  color: #6c757d;
}

.btn-outline-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-color: #ddd;
  background-color: #f9f9f9;
  height: 35px;
  padding: 0 10px;
  font-size: 14px;
}

.btn-outline-secondary:hover {
  background-color: #e6e6e6;
}

.dropdown-item {
  color: #333;
  font-size: 0.9rem;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

.no-underline {
  text-decoration: none;
  color: inherit;
}

.no-underline:hover {
  color: inherit;
}


.search-bar:focus-within {
  background-color: #fff; /* Tıklanıldığında beyaz arka plan */
  border-color: #fd7e14; /* Turuncu kenarlık */
  outline: none; /* Mavi kenarlığı kaldırır */
}
.input-group input:focus {
  outline: none; /* Giriş kutusunun mavi kenarlığını kaldırır */
  box-shadow: none; /* Tarayıcıların gölge efektini de kaldırır */
}

.input-group-text {
  background-color: transparent; /* Varsayılan (şeffaf) */
  border: none;
  color: #6c757d; /* Varsayılan simge rengi */
  transition: background-color 0.3s, color 0.3s; /* Animasyonlu geçiş */
}

.search-bar:focus-within .input-group-text {
  background-color: #fd7e14; /* Turuncu renk */
  color: #fff; /* Simge beyaz */
}

.search-bar:focus-within .input-group-text i {
  color: #fff; /* Simgenin beyaz olması */
}

</style>



          



