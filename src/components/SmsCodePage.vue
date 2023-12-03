<template>
  <div class="container">
    <div class="sms-code-form">
      <SmsCodeForm />
    </div>
  </div>
</template>

<script>
import SmsCodeForm from '@/components/SmsCodeForm.vue'
export default {
  name: 'SmsCodePage',
  components: {
    SmsCodeForm
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
