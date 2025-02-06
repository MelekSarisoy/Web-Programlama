<template>
  <div class="register-container">
    <h2>Merhaba,</h2>
    <p>Giriş yap veya Hesap Oluştur, fırsatları kaçırma!</p>

    <!-- Tabs for Login & Register -->
    <div class="tabs">
      <button @click="toggleTab('login')" :class="{ active: selectedTab === 'login' }"><router-link to="/login">Giriş Yap</router-link></button>
      <button @click="toggleTab('register')" :class="{ active: selectedTab === 'register' }"><router-link to="/Register">Üye Ol</router-link></button>
    </div>

    <div v-if="selectedTab === 'register'" class="register-form">
      <p class="offer-text">Üye Ol, 2000 TL ve Üzeri Alışverişe 250 TL İndirim Kazan!</p>

      <form @submit.prevent="signup">
        <!-- Phone Number -->
        <input v-model="phone" type="text" placeholder="(0 _ _) _ _ _  _ _  _ _" required />

        <!-- Email -->
        <input v-model="email" type="email" placeholder="E-Posta Adresi" required />

        <!-- Password -->
        <div class="password-container">
          <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Şifre" required />
          <button type="button" @click="showPassword = !showPassword">👁️</button>
        </div>

        <!-- Success Message -->
        <p v-if="successMessage" class="success">{{ successMessage }}</p>

        <!-- Error Message -->
        <p v-if="authStore.error" class="error">{{ authStore.error }}</p>

        <div class="gender-selection">
          <button type="button" :class="{ active: userType === 'individual' }" @click="userType = 'individual'">
            KADIN
          </button>
          <button type="button" :class="{ active: userType === 'company' }" @click="userType = 'company'">
            ERKEK
          </button>
        </div>

        <!-- Subscription Preferences -->
        <label class="checkbox-container">
          <input type="checkbox" v-model="subscribePromotions" />
          Ürün tanıtım ve kampanyalardan haberdar olmak için elektronik ileti almak istiyorum.
        </label>

        <label class="checkbox-container">
          <input type="checkbox" v-model="subscribeRecommendations" />
          Tercihlerime özel ürün önerilmesini ve tanıtılmasını kabul ediyorum.
        </label>

        <p class="agreement-text">
          Kişisel verileriniz <a href="#">Aydınlatma Metni</a> uyarınca işlenecektir. "Üye Ol" butonuna basarak
          <a href="#">Üyelik Sözleşmesi</a>'ni kabul ediyorsunuz.
        </p>

        <!-- Signup Button -->
        <button type="submit" :disabled="authStore.loading" class="register-btn">
          ÜYE OL
        </button>

        <!-- Social Login Options -->
        <div class="social-login">
          <button @click.prevent="socialSignup('google')">Google ile Kayıt Ol</button>
          <button @click.prevent="socialSignup('apple')">Apple ile Kayıt Ol</button>
          <button @click.prevent="socialSignup('facebook')">Facebook ile Kayıt Ol</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const selectedTab = ref("register");
const phone = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const successMessage = ref("");

const toggleTab = (tab: string) => {
  selectedTab.value = tab;
  successMessage.value = "";
};

const signup = async () => {
  try {
    await authStore.register({
      email: email.value,
      password: password.value,
      userType: "individual",
      name: "New User",
      phone: phone.value,
      promotions: false,
    });
    successMessage.value = "✅ Kayıt başarılı! Şimdi giriş yapabilirsiniz.";
  } catch (error) {
    console.error("❌ Signup error:", error);
    successMessage.value = "";
  }
};
</script>

<style scoped>
.register-container {
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: bold;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.tabs button {
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.tabs button.active {
  border-bottom: 2px solid red;
  font-weight: bold;
}

.register-form {
  padding: 20px;
}

.offer-text {
  color: green;
  font-size: 14px;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
}

.password-container {
  display: flex;
  align-items: center;
}

.password-container button {
  background: none;
  border: none;
  cursor: pointer;
}

.password-info {
  font-size: 12px;
  color: gray;
}

.gender-selection {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}

.gender-selection button {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.gender-selection button.active {
  background-color: red;
  color: white;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin: 5px 0;
}

.agreement-text {
  font-size: 12px;
  margin-top: 10px;
}

.register-btn {
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.social-login button {
  padding: 10px;
  background: #ddd;
  border: none;
  cursor: pointer;
}
</style>
