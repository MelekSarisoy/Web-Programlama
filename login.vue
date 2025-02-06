<template>
  <div class="login-container">
    <h2>Merhaba,</h2>
    <p>Giriş yap veya Hesap Oluştur, fırsatları kaçırma!</p>

    <!-- Tabs for Login & Register -->
    <div class="tabs">
      <button @click="toggleTab('login')" :class="{ active: selectedTab === 'login' }"><router-link to="/login">Giriş Yap</router-link></button>
      <button @click="toggleTab('register')" :class="{ active: selectedTab === 'register' }"><router-link to="/Register">Üye Ol</router-link></button>
    </div>

    <div v-if="selectedTab === 'login'" class="login-form">
      <form @submit.prevent="login">
        <!-- Email or Phone -->
        <input v-model="email" type="text" placeholder="E-Posta Adresi veya Telefon" required />

        <!-- Password -->
        <div class="password-container">
          <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Şifre" required />
          <button type="button" @click="showPassword = !showPassword">👁️</button>
        </div>

        <!-- Success Message -->
        <p v-if="successMessage" class="success">{{ successMessage }}</p>

        <!-- Error Message -->
        <p v-if="authStore.error" class="error">{{ authStore.error }}</p>

        <!-- Login Button -->
        <button type="submit" :disabled="authStore.loading" class="login-btn">GİRİŞ YAP</button>

        <!-- Social Login Options -->
        <div class="social-login">
          <button @click.prevent="socialLogin('google')">Google ile Giriş Yap</button>
          <button @click.prevent="socialLogin('apple')">Apple ile Giriş Yap</button>
          <button @click.prevent="socialLogin('facebook')">Facebook ile Giriş Yap</button>
        </div>
      </form>
    </div>

    <p class="agreement-text">
      Kişisel verileriniz <a href="#">Aydınlatma Metni</a> uyarınca işlenecektir.
      Üçüncü taraf hesaplarıyla giriş yapmanız halinde <a href="#">Üyelik Sözleşmesi</a> uygulanacaktır.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const selectedTab = ref("login");
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const successMessage = ref("");

const toggleTab = (tab: string) => {
  selectedTab.value = tab;
  successMessage.value = "";
};

const login = async () => {
  try {
    await authStore.login(email.value, password.value);
    successMessage.value = "✅ Başarıyla giriş yaptınız!";
  } catch (error) {
    console.error("❌ Login error:", error);
    successMessage.value = "";
  }
};

const socialLogin = (provider: string) => {
  console.log(`Social login with ${provider} clicked`);
};
</script>

<style scoped>
.login-container {
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

.login-form {
  padding: 20px;
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

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
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

.agreement-text {
  font-size: 12px;
  margin-top: 10px;
}
</style>
