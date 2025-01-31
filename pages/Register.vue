<template>
  <div class="register-container">
    <h2>Merhaba,</h2>
    <p>Giriş yap veya Hesap Oluştur, fırsatları kaçırma!</p>

    <div class="tabs">
      <button :class="{ active: !isRegister }" @click="setLogin">Giriş Yap</button>
      <button :class="{ active: isRegister }" @click="setRegister">Üye Ol</button>
    </div>

    <p v-if="isRegister" class="promo">Üye Ol, 2000 TL ve üzeri alışverişe 250 TL indirim kazan!</p>

    <form @submit.prevent="submitForm">
      <!-- Phone Number -->
      <div class="form-group">
        <input
          type="text"
          id="phone"
          v-model="formData.phone"
          placeholder="0 (___) ___ __ __"
          required
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="E-Posta Adresi"
          required
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <input
          type="password"
          id="password"
          v-model="formData.password"
          placeholder="Şifre"
          required
        />
        <small>Lütfen en az 8 karakter, 1 büyük harf ve 1 rakam giriniz.</small>
      </div>

      <!-- Gender -->
      <div class="gender-group">
        <button :class="{ active: formData.gender === 'KADIN' }" @click.prevent="setGender('KADIN')">KADIN</button>
        <button :class="{ active: formData.gender === 'ERKEK' }" @click.prevent="setGender('ERKEK')">ERKEK</button>
      </div>

      <!-- Agreements -->
      <div class="form-group checkbox">
        <input type="checkbox" id="promotions" v-model="formData.promotions" />
        <label for="promotions">Ürün tanıtım ve kampanyalardan haberdar olmak için elektronik ileti almak istiyorum.</label>
      </div>
      <div class="form-group checkbox">
        <input type="checkbox" id="terms" v-model="formData.terms" required />
        <label for="terms">
          Tercihlerime özel ürün önerilerinin ve tanıtımlarının bana sunulmasını kabul ediyorum.
        </label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn-submit">ÜYE OL</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Register",
  setup() {
    const formData = reactive({
      phone: "",
      email: "",
      password: "",
      gender: "",
      promotions: false,
      terms: false,
    });

    const isRegister = ref(true);

    const setLogin = () => (isRegister.value = false);
    const setRegister = () => (isRegister.value = true);

    const setGender = (gender) => {
      formData.gender = gender;
    };

    const submitForm = () => {
      if (isRegister.value) {
        alert("Üyelik oluşturuldu!");
      } else {
        alert("Giriş yapıldı!");
      }
      console.log(formData);
    };

    return {
      formData,
      isRegister,
      setLogin,
      setRegister,
      setGender,
      submitForm,
    };
  },
});
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 1rem;
}

.tabs button.active {
  background-color: #f16805;
  color: #fff;
  border-color: #f16805;
}

.promo {
  font-size: 0.9rem;
  color: #4caf50;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

small {
  font-size: 0.8rem;
  color: #777;
}

.gender-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.gender-group button {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 5px;
}

.gender-group button.active {
  background-color: #f16805;
  color: #fff;
  border-color: #f16805;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.checkbox label {
  margin-left: 10px;
  font-size: 0.9rem;
  color: #333;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #f16805;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #e55b00;
}
</style>
