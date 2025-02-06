<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-links" style="margin-right: 60px;">
        <ul>
          <li><a href="about:blank">Kampanyalar</a></li>
          <li><a href="about:blank">Teslimat ve İade</a></li>
          <li><a href="about:blank">Hediye</a></li>
          <li><a href="about:blank">Mağazalar</a></li>
          <li><a href="about:blank">Sipariş Takibi</a></li>
          <li><a href="about:blank">İşlem Rehberi</a></li>
        </ul>
        <ul>
          <li><a href="about:blank">İletişim</a></li>
          <li><a href="about:blank">Sıkça Sorulan Sorular</a></li>
          <li><a href="about:blank">Kişisel Verilerin Korunması</a></li>
          <li><a href="about:blank">Mobil Uygulamalarımız</a></li>
          <li><a href="about:blank">Kolay İade</a></li>
          <li><a href="about:blank">Çerez Ayarları</a></li>
        </ul>
      </div>
      <div class="social-media" style="margin-left: 25px;">
        <p>Sosyal Medyada Takip Edenler Kazanıyor.</p>
        <div class="line"></div>
        <div class="icons">
          <a href="about:blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="about:blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="about:blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="about:blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="about:blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
        </div>
        <div class="app-links">
          <a href="about:blank" class="app-button google-play" aria-label="Google Play">
            <i class="fab fa-google-play"></i> Google Play
          </a>
          <a href="about:blank" class="app-button app-store" aria-label="App Store">
            <i class="fab fa-apple"></i> App Store
          </a>
          <a href="about:blank" class="app-button app-gallery" aria-label="AppGallery">
            <i class="fas fa-store"></i> AppGallery
          </a>
        </div>
      </div>
    </div>
    <div class="footer-buttons">
      <div class="button-group">
        <div class="button-item">
          <i class="fas fa-lock"></i> Güvenli Alışveriş
        </div>
        <div class="button-item">
          <i class="fas fa-truck"></i> 2500 TL Üzeri Kargo Bedava
        </div>
        <div class="button-item">
          <i class="fas fa-store"></i> Tüm Instreet Mağazalarında İade ve Değişim Seçeneği
        </div>
      </div>
      <div class="button-group">
        <div class="button-item">
          <i class="fas fa-calendar"></i> 30 Gün İçinde İade Seçeneği
        </div>
        <div class="button-item">
          <i class="fas fa-credit-card"></i> Online Öde, Mağazadan Teslim Al
        </div>
        <div class="button-item">
          <i class="fas fa-check-circle"></i> %100 Orijinal Ürün Garantisi
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #fbf7f7;
  font-family: Arial, sans-serif;
  color: #333;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding: 30px 150px; /*birbirine bu şekil yaklaştırdım. */
}

.footer-links {
  display: flex;
  gap: 20px; /* seçenekler arası boşluğu ayarladım */
}

.footer-links ul {
  list-style: none;
  padding: 19px;
}

.footer-links ul li {
  margin-bottom: 8px;/* seçeneklerdeki yazıların üst alt çizgi arası mesafem */
  border-bottom: 1px solid #e6e3e3;
  padding-bottom: 3px;
}

.footer-links ul li a {
  text-decoration: none;
  color: #555555;
  font-size: 15px; /* seçeneklerin genişşliğini ayarladım */
}

.footer-links ul li a:hover {
  color: #878791;
}

.social-media {
  text-align: center;
}

.social-media p {
  margin-bottom: 0px;
  margin-right: 240px; /* yazıyı biraz sola kaydırdım. */
  margin-bottom: -25px;
  font-weight: normal;
  font-size: 15px; /* Sosyal Medyada Takip Edenler Kazanıyor. yazısının puntosunu yaptım*/
  color: #585858;
}

.social-media .line {
  width: 60%;
  height: 1px;
  background-color: #e6e3e3;
  margin: 40px 20px;
  margin-right: 90px;
}

.social-media .icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-right: 200px;
}

.social-media .icons a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #6a6a6a;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.social-media .icons a:hover {
  transform: scale(1.1);
  background-color: #b0aeae;
}

.social-media .app-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-right: 200px;
}

.social-media .app-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #6a6a6a;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-media .app-button:hover {
  background-color: #b0aeae;
}

.social-media .app-button i {
  font-size: 16px;
}

.footer-buttons {
  display: flex;
  flex-direction: column;
  gap: 25px; /* Butonlar arasındaki boşluk */
  padding: 6px 180px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 35px; /* Butonlar arasındaki boşluk */
}

.button-item {
  flex: 1;
  background-color: #fff;
  color: #6a6a6a;
  padding: 25px 25px; /* Butonları daha dar yapmak için padding ayarladım */
  border: none; /* Kenarlık kaldırdım */
  border-radius: 10px; /* Köşeler hafif ovalleştirdim */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif gölge ekledim */
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: default;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button-item i {
  font-size: 30px;
  color: #6a6a6a;
}

.button-item:hover {
  background-color: #f5f5f5;
  color: #333;
}
</style>