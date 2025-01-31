<template>
  <div class="login-container">
    <h2>Giriş Yap</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">E-posta Adresi</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="E-posta adresinizi giriniz"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Şifre</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Şifrenizi giriniz"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100" :disabled="authStore.loading">
        <span v-if="authStore.loading">Giriş Yapılıyor...</span>
        <span v-else>Giriş Yap</span>
      </button>
    </form>
    <p class="mt-3 text-center">
      Henüz hesabınız yok mu?
      <NuxtLink to="/register" class="text-primary">Üye Ol</NuxtLink>
    </p>
    <p v-if="authStore.successMessage" class="text-success text-center mt-2">{{ authStore.successMessage }}</p>
    <p v-if="authStore.errorMessage" class="text-danger text-center mt-2">{{ authStore.errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue"; // Ref kullanımı için import
import { useAuthStore } from "~/stores/auth.ts";

// Pinia Auth Store'u import edin
import { useRouter } from "vue-router"; // Router kullanımı için

// Reactif veriler
const email = ref("");
const password = ref("");
const authStore = useAuthStore(); // Auth Store çağırılır
const router = useRouter(); // Router instance

// Giriş yapma işlemi
const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value); // Login işlemi
    console.log("Başarıyla giriş yapıldı!");
    router.push("/dashboard"); // Giriş sonrası yönlendirme
  } catch (error) {
    console.error("Giriş işlemi sırasında bir hata oluştu:", error.message);
  }
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #fd7e14;
  border-color: #fd7e14;
}

.btn-primary:hover {
  background-color: #e56600;
  border-color: #e56600;
}

.text-primary {
  color: #fd7e14;
}

.text-primary:hover {
  text-decoration: underline;
}
</style>