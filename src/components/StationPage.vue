<template>
  <div>
    <div class="home-el">
      <router-link to="/">
        <div class="back-btn mt-3 d-flex align-items-start">
          <img src="/img/back-btn.png" alt="logo-link" class="img-settings ml-5" style="width: 3rem;"/>
        </div>
      </router-link>
    </div>
    <div class="new-session">
      <a href="#" class="img-new-session">
        <img src="/img/start-garging.png" alt="logo-link" class="img-settings"/>
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
export default {
    props: ['num'],
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
</style>
