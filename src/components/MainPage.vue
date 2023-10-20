<template>
  <div>
    <div class="home-el">
    </div>
    <div class="new-session">
      <a href="#" class="img-new-session">
        <img src="/img/logo_small.png" alt="logo-link" class="img-settings"/>
      </a>
    </div>
    <div class="bar">
      <row>
        <div class="home bottom-bar" style="left: 0; border-radius: 0 100px 0 0;">
        </div>
        <div class="menu bottom-bar" style="right: 0; border-radius: 100px 0 0 0;">
        </div>
      </row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
  
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
  min-height: 50%;
  background-color: rgb(252, 252, 252);
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -10px 15px rgba(116, 116, 116, 0.7);
  left: 0;
}

.img-settings {
  width: 20vw;
}

.new-session {
  background-color: white;
  padding: 10px;
  width: 13vh;
  border-radius: 15vw;
  box-shadow: 0px -5px 10px rgba(116, 116, 116, 0.7);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
  