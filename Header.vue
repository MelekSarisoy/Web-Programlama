<template>
  <header class="header">
    <div class="header-top">
      <div class="promo">
        <span class="promo-title">EN TARZ KASIM</span>
        <span class="promo-info">300 TL ve üzeri alışverişlerde</span>
        <span class="promo-highlight">KARGO BEDAVA</span>
        <span class="promo-note">Sınırlı süre için geçerlidir.</span>
      </div>
    </div>
    <div class="header-bottom">
      <a href="about:blank" class="link black">
        Mobil Uygulamayı <span class="bold underline">Hemen İndir</span>
      </a>
      <nav class="nav-links">
        <a href="/favorilerim" class="link nav-item">Favorilerim</a>
        <span class="separator">|</span>
        <a href="/siparislerim" class="link nav-item">Siparişlerim</a>
        <span class="separator">|</span>
        <a href="/yardim-destek" class="link nav-item">Yardım ve Destek</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  font-family: Arial, sans-serif;
}

/* Üst bölüm stili */
.header-top {
  background: linear-gradient(to right, #5e0000, #000);
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.promo {
  text-align: center;
}

.promo-title {
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
}

.promo-info {
  background: #fff;
  color: #5e0000;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  margin-right: 10px;
}

.promo-highlight {
  font-weight: bold;
  font-size: 16px;
}

.promo-note {
  font-size: 12px;
  margin-left: 10px;
}

/* Alt bölüm stili */
.header-bottom {
  background-color: #ff6600;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  text-decoration: none;
  margin-right: 15px;
}

.link.black {
  color: #000;
}

.link.nav-item {
  color: #000;
  font-size: 14px;
}

.link:hover {
  text-decoration: underline;
}

.bold {
  font-weight: bold;
}

.underline {
  text-decoration: underline;
  text-decoration-color: #000; /* Siyah alt çizgi */
}

.nav-links {
  display: flex;
  align-items: center;
}

.separator {
  color: #000;
  margin: 0 10px;
}
</style>
