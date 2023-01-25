<script setup>
import NavBar from "../components/NavBar.vue";
import CardDS from "../components/CardDS.vue";
</script>
<template>
  <header>
    <NavBar></NavBar>
  </header>
  <div class="contenido">
    <CardDS></CardDS>
    <CardDS></CardDS>
    <CardDS></CardDS>
    <CardDS></CardDS>
    <CardDS></CardDS>
    <CardDS></CardDS>
  </div>
</template>

<style>
header {
  position: fixed;
}
.contenido {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 35px;
  height: 500px;
}
</style>
