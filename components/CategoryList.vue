<template>
  <nav class="navbar">
    <ul class="menu">
      <li v-for="(kategori, index) in kategoriler" :key="kategori.id" 
          :class="['menu-item', { 'with-separator': index > 0 }]">
        <!-- Ana Kategori -->
        <a :href="kategori.url" class="menu-link">{{ kategori.anaKategori }}</a>

        <!-- Alt Kategoriler -->
        <div v-if="kategori.altKategoriler.length" class="submenu">
          <ul>
            <li v-for="alt in kategori.altKategoriler" :key="alt.ad">
              <a :href="alt.url">{{ alt.ad }}</a>
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
         { ad: "Kadın" },
          { ad: "Çok Satanlar", url: "/giyim/çoksatanlar" },
          { ad: "En Yeniler", url: "/giyim/enyeniler" },
          { ad: "Sweatshirt", url: "/giyim/Sweatshirt" },
          { ad: "Mont", url: "/giyim/Mont" },
          { ad: "Ceket", url: "/giyim/Ceket" },
          { ad: "Yağmurluk / Rüzgarlık", url: "/giyim/YağmurlukRüzgarlık" },
          { ad: "Eşofman", url: "/giyim/esofman" },
          { ad: "Tayt", url: "/giyim/Tayt" },
          { ad: "Jean Pantolon", url: "/giyim/JeanPantolon" },
          { ad: "Bra", url: "/giyim/Bra" },
          { ad: "T-shirt", url: "/giyim/T-shirt" },
          { ad: "Şort", url: "/giyim/Şort" },
        ], 
      },
      {
        id: 2,
        anaKategori: "Kadın",
        url: "/kadin",
        altKategoriler: [
          { ad: "Çok Satanlar", url: "/kadin/çoksatan" },
          { ad: "En Yeniler", url: "/kadin/en yenii" },
          { ad: "Spor", url: "/kadin/spor" },
        ],
      },
      {
        id: 3,
        anaKategori: "Erkek",
        url: "/erkek",
        altKategoriler: [
          { ad: "Çok Satanlar", url: "/kadin/çoksatan" },
          { ad: "En Yeniler", url: "/kadin/en yenii" },
          { ad: "Spor", url: "/kadin/spor" },
        ],
      },
      {
        id: 4,
        anaKategori: "Çocuk",
        url: "/cocuk",
        altKategoriler: [
          { ad: "Çok Satanlar", url: "/kadin/çoksatan" },
          { ad: "En Yeniler", url: "/kadin/en yenii" },
          { ad: "Spor", url: "/kadin/spor" },
        ],
      },
      {
        id: 5,
        anaKategori: "Spor",
        url: "/spor",
        altKategoriler:  [
          { ad: "Çok Satanlar", url: "/kadin/çoksatan" },
          { ad: "En Yeniler", url: "/kadin/en yenii" },
          { ad: "Spor", url: "/kadin/spor" },
        ],
      },
      {
        id: 6,
        anaKategori: "Çanta/Aksesuar",
        url: "/canta-aksesuar",
        altKategoriler:  [
          { ad: "Çok Satanlar", url: "/kadin/çoksatan" },
          { ad: "En Yeniler", url: "/kadin/en yenii" },
          { ad: "cüzdan", url: "/kadin/cüzdan" },
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
/* Navbar Temel Tasarım */
.navbar {
background-color: #fff;
border-bottom: 1px solid #ddd;
display: flex;
justify-content: center;
font-family: Arial, sans-serif;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

/* Alt Menü */
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

.submenu li a {
font-size: 14px;
color: #000;
text-decoration: none;
display: block;
padding: 5px 10px;
}

.submenu li a:hover {
color: #007bff;
text-decoration: underline;
}

/* Responsive Tasarım */
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
