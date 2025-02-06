<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" :disabled="authStore.loading">Signup</button>
      <p v-if="authStore.error" class="error">{{ authStore.error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const signup = async () => {
  try {
    await authStore.register({
      email: email.value,
      password: password.value,
      userType: "individual",
      name: "New User",
      promotions: false,
    });
    console.log("✅ Signup successful");
  } catch (error) {
    console.error("❌ Signup error:", error);
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
