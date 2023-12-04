<template>
  <div class="login-form">
    <form class="form" @submit.prevent="submitForm">
      <div>
        <div
          for="phone"
          class="form-item mt-5"
        >
          Введите код из SMS:
        </div>
        <input
          type="text" 
          id="smsCode"
          v-model="smsCode"
          class="form-input mb-3"
        >
      </div>
      <div class="row d-flex mt-3">
        <div class="col-2">
          <div class="mt-3 mb-5">
            <a
              href="#"
              class="back-link"
            >
              <img
                src="../../public/img/back-btn.png"
                alt="back"
                style="width: 50px;"
              >
            </a>
          </div>
        </div>
        <div class="col-10">
          <div class="button-submit mt-3 mb-5">
            <button class="submit" type="submit">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SmsCodeForm',
  data() {
    return {
      smsCode: ''
    }
  },
  methods: {
    submitForm () {
      console.log('Отправлено: ', this.phone, this.password)
    }
  }
}
</script>

<style>

.login-form {
  background-color: white;
  border: 1px solid rgb(171, 171, 171);
  border-radius: 30px;
}

.form-item {
  font-size: 1.5rem;
  justify-content: start;
  text-align: left;
  color: #094443;
}

.form-input {
  width: 100%;
  font-size: 1.5rem;
  border-radius: 15px !important;
  padding: 5px 0;
  color: #094443;
}

@media only screen and (max-width: 767px) {
  .logo-img {
    width: 30%;
  }
}

.form {
  margin: 0 50px;
}

.button-submit {
  justify-content: end;
  text-align: end;
}

.submit {
  font-size: 1.5rem;
  background-color: #094443;
  border: 2px solid #1FC4C2;
  color: white;
  padding: 5px 40px;
  border-radius: 15px;
}

.forgot-password-link {
  font-size: 1.3rem;
  color: #094443;
}

</style>
