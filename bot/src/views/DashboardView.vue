<script setup>
import NavBar from "../components/NavBar.vue";
import CardDS from "../components/CardDS.vue";
import LateralMenu from "../components/LateralMenu.vue";
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <LateralMenu></LateralMenu>
  <section class="content-dashboard">
    <div class="title">
      <span>CARTERA LOREM</span>
    </div>
    <div class="datos">
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <button class="add">AÑADIR</button>
    </div>
  </section>
</template>

<style>
.ajuste {
  position: fixed;
  top: 0;
  z-index: 999;
}
.content-dashboard {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 0;
  padding-top: 110px;
  width: 100vw;
  height: 100vh;
  max-width: 1600px;
  margin-bottom: 50px;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;
  font-size: 30px;
  font-weight: 700;
  align-self: flex-start;
  padding-left: 200px;
  margin-bottom: 50px;
}

.datos {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 500px;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(#3777e1, #003b9c);
  border-width: 0;
  border-radius: 15px;
  min-width: 135px;
  min-height: 50px;
  box-shadow: 2px 2px 5px black;
  font-size: 16px;
  font-weight: 800;
}
.add:hover {
  cursor: pointer;
  background: #003b9c;
}
</style>
