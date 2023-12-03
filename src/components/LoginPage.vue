<template>
  <div class="container">
    <div class="login-form">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
