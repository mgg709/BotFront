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
  z-index: 1;
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
  padding-left: 100px;
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
