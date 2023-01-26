<script setup>
import NavBar from "../components/NavBar.vue";
import CardDS from "../components/CardDS.vue";
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <section class="content">
    <div class="title">
      <img class="menu" src="src/assets/burguer-menu.svg" />
      <span>CARTERA LOREM</span>
    </div>
    <div class="datos">
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
      <CardDS></CardDS>
    </div>
  </section>
</template>

<style>
.ajuste {
  position: fixed;
  top: 0;
  z-index: 999;
}
.content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  padding-top: 90px;
  width: 100vw;
  max-width: 1600px;
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
  padding-left: 300px;
  margin-bottom: 30px;
}
.menu {
  width: 20px;
  height: 20px;
  margin-right: 50px;
}
.datos {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 500px;
}
</style>
