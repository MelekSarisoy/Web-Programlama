<template>
  <nav class="navbar">
    <ul class="menu">
      <li
        v-for="(kategori, index) in kategoriler"
        :key="kategori.id"
        :class="['menu-item', { 'with-separator': index > 0 }]"
      >
        <!-- Ana Kategori -->
        <NuxtLink :to="kategori.url" class="menu-link">{{ kategori.anaKategori }}</NuxtLink>

        <!-- Alt Kategoriler -->
        <div v-if="kategori.altKategoriler && kategori.altKategoriler.length" class="submenu">
          <ul>
            <li v-for="alt in kategori.altKategoriler" :key="alt.ad">
              <NuxtLink :to="alt.url" class="submenu-link">{{ alt.ad }}</NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      kategoriler: [
        {
          id: 1,
          anaKategori: "Giyim",
          url: "/giyim",
          altKategoriler: [
            { ad: "Kadın", url: "/giyim/kadin" },
            { ad: "Çok Satanlar", url: "/giyim/coksatanlar" },
            { ad: "En Yeniler", url: "/giyim/enyeniler" },
            { ad: "Sweatshirt", url: "/giyim/sweatshirt" },
            { ad: "Mont", url: "/giyim/mont" },
            { ad: "Ceket", url: "/giyim/ceket" },
            { ad: "Yağmurluk / Rüzgarlık", url: "/giyim/yagmurluk-ruzgarlik" },
            { ad: "Eşofman", url: "/giyim/esofman" },
            { ad: "Tayt", url: "/giyim/tayt" },
            { ad: "Jean Pantolon", url: "/giyim/jean-pantolon" },
            { ad: "Bra", url: "/giyim/bra" },
            { ad: "T-shirt", url: "/giyim/t-shirt" },
            { ad: "Şort", url: "/giyim/sort" },
          ],
        },
        {
          id: 2,
          anaKategori: "Kadın",
          url: "/kadin",
          altKategoriler: [
            { ad: "Çok Satanlar", url: "/kadin/coksatan" },
            { ad: "En Yeniler", url: "/kadin/enyeniler" },
            { ad: "Spor", url: "/kadin/spor" },
          ],
        },
        {
          id: 3,
          anaKategori: "Erkek",
          url: "/erkek",
          altKategoriler: [
            { ad: "Çok Satanlar", url: "/erkek/coksatan" },
            { ad: "En Yeniler", url: "/erkek/enyeniler" },
            { ad: "Spor", url: "/erkek/spor" },
          ],
        },
        {
          id: 4,
          anaKategori: "Çocuk",
          url: "/cocuk",
          altKategoriler: [
            { ad: "Çok Satanlar", url: "/cocuk/coksatan" },
            { ad: "En Yeniler", url: "/cocuk/enyeniler" },
            { ad: "Spor", url: "/cocuk/spor" },
          ],
        },
        {
          id: 5,
          anaKategori: "Spor",
          url: "/spor",
          altKategoriler: [
            { ad: "Çok Satanlar", url: "/spor/coksatan" },
            { ad: "En Yeniler", url: "/spor/enyeniler" },
            { ad: "Spor", url: "/spor/spor" },
          ],
        },
        {
          id: 6,
          anaKategori: "Çanta/Aksesuar",
          url: "/canta-aksesuar",
          altKategoriler: [
            { ad: "Çok Satanlar", url: "/canta-aksesuar/coksatan" },
            { ad: "En Yeniler", url: "/canta-aksesuar/enyeniler" },
            { ad: "Cüzdan", url: "/canta-aksesuar/cuzdan" },
          ],
        },
        {
          id: 7,
          anaKategori: "Outdoor",
          url: "/outdoor",
          altKategoriler: [
            { ad: "Bot", url: "/outdoor/bot" },
            { ad: "Mont", url: "/outdoor/mont" },
          ],
        },
        {
          id: 8,
          anaKategori: "Markalar",
          url: "/markalar",
          altKategoriler: [],
        },
        {
          id: 9,
          anaKategori: "Outlet",
          url: "/outlet",
          altKategoriler: [],
        },
        {
          id: 10,
          anaKategori: "Tüm Kategoriler",
          url: "/tum-kategoriler",
          altKategoriler: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
}

.menu-item.with-separator::before {
  content: '';
  height: 20px;
  width: 1px;
  background-color: #ddd;
  margin-right: 20px;
}

.menu-link {
  font-size: 16px;
  color: #000;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: #007bff;
}

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

.submenu-link {
  font-size: 14px;
  color: #000;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
}

.submenu-link:hover {
  color: #007bff;
  text-decoration: underline;
}

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
