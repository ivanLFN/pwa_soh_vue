<template>
  <div>
    <div class="home-el">
      <div class="image-info" :class="{ 'hidden': !visibleElements.imageInfo }">
        <img src="/img/info-icon.png" alt="info-icon">
        <div style="margin-top: 40px;">Нет действующей</div>
        <div style="margin-top: -10px;">сессии</div>
        <div style="margin-top: 20px;">Начать?</div>
      </div>
      <div class="new-session-info pt-5" v-if="visibleElements.newSessionInfo">
        <img src="/img/enter-code.png" style="width: 4rem;" alt="info-icon">
        <div style="margin-top: 30px; margin-bottom: 30px;">Введите номер станции</div>
        <div class="enter-block col-12 d-flex justify-content-center align-items-center">
          <div class="col-10">
            <div class="input-group mb-3 enter-code">
              <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" v-model="numericValue" @input="restrictInput">
              <button class="btn btn-outline-secondary button-style" type="button" id="button-addon2">
                <img src="/img/arrow-input.png" alt="info-icon">
              </button>
            </div>
          </div>
        </div>
        <div class="map">Или выберете на <a class="map-link" href="#" @click="toggleMapComponent">карте</a></div>
      </div>
      <div class="map-page pt-5" v-if="visibleElements.twoGisMap">
        <MapComponent />
      </div>
    </div>
    <div class="new-session">
      <a href="#" class="img-new-session" @click="toggleImageInfo">
        <img src="/img/logo_small.png" alt="logo-link" class="img-settings"/>
      </a>
    </div>
    <div class="bar">
      <row>
        <div class="home bottom-bar d-flex justify-content-center align-items-center" style="left: 0; border-radius: 0 100px 0 0;">
          <router-link to="/">
            <img src="/img/home-icon.png" alt="logo-link" class="img-settings" style="width: 3.3rem;"/>
          </router-link>
          
        </div>
        <div class="menu bottom-bar d-flex justify-content-center align-items-center" style="right: 0; border-radius: 100px 0 0 0;">
          <a>
            <img src="/img/menu-icon.png" alt="logo-link" class="img-settings" style="width: 3rem;"/>
          </a>
        </div>
      </row>
    </div>
  </div>
</template>

<script>
import MapComponent from './MapComponent.vue';
export default {
  name: 'MainPage',
  components: {
    MapComponent
  },
  data() {
    return {
      visibleElements: {
        imageInfo: true,
        newSessionInfo: false,
        twoGisMap: false
      },
      numericValue: ''
    };
  }, 
  methods: {
    restrictInput () {
      this.numericValue = this.numericValue.replace(/[^0-9]/g, '');
    },
    toggleImageInfo () {
      if (this.visibleElements.imageInfo == true) {
        this.hideAllComponents()
        this.visibleElements.newSessionInfo = true
      } else {
        this.hideAllComponents()
        this.visibleElements.imageInfo = true
      }
    },
    toggleMapComponent() {
      this.hideAllComponents()
      this.visibleElements.twoGisMap = true
    },
    hideAllComponents() {
      for (let key in this.visibleElements) {
        this.visibleElements[key] = false;
      }
    }
  }
}
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

.new-session-info {
  font-size: 1.9rem;
  padding-bottom: 110px;

}

.map-page {
  padding-bottom: 0px;
}

.hidden {
  display: none;
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

.map {
  margin-bottom: 100px;
  margin-top: 40px;
}

.map-link {
  color: #1fc4c2;
}
</style>
  