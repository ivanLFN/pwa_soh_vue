<template>
  <div>
    <div class="home-el">
      <router-link to="/">
        <div class="back-btn mt-3 d-flex align-items-start">
          <img
            src="/img/back-btn.png"
            alt="logo-link" 
            class="ml-5"
            style="width: 3rem;"/>
        </div>
      </router-link>
      <div>
        <img
          src="/img/three_kw.png"
          alt="logo-link"
          class="ml-5"
        />
      </div>
      <div class="station-data">
        <div class="status row text ">
          <img
            src="/img/status-station.png"
            alt="logo-link"
            class="img-settings"
          />
          {{ station.status }}
        </div>
        <div class="status row d-flex align-items-center text mt-3">
          <img
            src="/img/location-station.png"
            alt="logo-link"
            class="img-settings"
          />
          {{ station.address }}
        </div>
        <div class="status row d-flex align-items-center text mt-3">
          <img
            src="/img/type-station.png"
            alt="logo-link"
            class="img-settings"
          />
          {{ station.type }}
        </div>
        <div class="status row d-flex align-items-center text mt-3">
          <img
            src="/img/rub-station.png"
            alt="logo-link"
            class="img-settings"
          />
          {{ station.cost }}
        </div>
      </div>
      <div class="count-min mt-3">
        <div class="text-input mb-2">
          Планируемое время (мин):
        </div>
        <div class="enter-block col-12 d-flex justify-content-center align-items-center mb-3">
            <div class="col-10">
              <div class="input-group mb-3 enter-code">
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" v-model="numericValue" @input="restrictInput">
                <button class="btn btn-outline-secondary button-style" type="button" id="button-addon2">
                  <img src="/img/arrow-input.png" alt="info-icon">
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="new-session">
      <a href="#" class="img-new-session">
        <img src="/img/start-garging.png" alt="logo-link"/>
      </a>
    </div>
    <div class="bar">
      <row>
        <div class="home bottom-bar d-flex justify-content-center align-items-center" style="left: 0; border-radius: 0 100px 0 0;">
          <router-link to="/">
            <img src="/img/home-icon.png" alt="logo-link" style="width: 3.3rem;"/>
          </router-link>
        
        </div>
        <div class="menu bottom-bar d-flex justify-content-center align-items-center" style="right: 0; border-radius: 100px 0 0 0;">
          <a>
            <img src="/img/menu-icon.png" alt="logo-link" style="width: 3rem;"/>
          </a>
        </div>
      </row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data() {
    return {
      station: {
        status: 'В сети, свободна',
        address: 'Кр-к, Весёлая, 11/1',
        type: '№ 18, 3,5 кВт',
        cost: '12.00 руб.'
      }
    };
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 150px;
  height: 100px;
  background-color: white;
  color: #fff;
  box-shadow: 0px -10px 15px rgba(116, 116, 116, 0.7);
}

.home-el {
  position: fixed;
  padding-bottom: 14rem !important;
  bottom: 0;
  width: 100%;
  min-height: 55%;
  background-color: rgb(252, 252, 252);
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -10px 15px rgba(116, 116, 116, 0.7);
  left: 0;
}
.new-session {
  background-color: white;
  padding: 10px;
  width: 120px;
  border-radius: 150px;
  box-shadow: 0px -5px 10px rgba(116, 116, 116, 0.7);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-settings {
  width: 4rem;
}

.text {
  font-size: 1.8rem;
}

.station-data {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  padding: 10px;
  margin-top: 1rem !important;
  border: 1px solid #d8d8d8;
  border-radius: 30px;
}

.count-min {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  border-radius: 30px;
  padding: 10px;
  padding-bottom: 10px;
  border: 1px solid #d8d8d8;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 150px;
  height: 100px;
  background-color: white;
  color: #fff;
  box-shadow: 0px -10px 15px rgba(116, 116, 116, 0.7);
}

.home-el {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 55%;
  background-color: rgb(252, 252, 252);
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -10px 15px rgba(116, 116, 116, 0.7);
  left: 0;
}
.new-session {
  background-color: white;
  padding: 10px;
  width: 120px;
  border-radius: 150px;
  box-shadow: 0px -5px 10px rgba(116, 116, 116, 0.7);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image-info {
  margin-top: 60px;
  margin-bottom: 80px;
  font-size: 1.9rem;
  padding-bottom: 110px;
}

.enter-code {
  height: 40px;
}

.button-style {
  background-color: #1fc4c2;
}

.form-control {
  font-size: 2rem;
}

.text-input {
  font-size: 1.5rem;
}

</style>
