<template>
  <div class="container">
    <div class="signup-form">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'
export default {
  name: 'SignUpPage',
  components: {
    SignUpForm
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
