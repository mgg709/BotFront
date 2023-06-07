<script setup>
import NavBar from "../components/NavBar.vue";
import CardDS from "../components/CardDS.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="content-dashboard">
    <NavBar class="ajuste"></NavBar>
    <div class="title-dashboard">
      <h1>Dashboard</h1>
    </div>
    <div class="datos">
      <router-link class="link" to="/dashboard/2"><CardDS class="tarjeta-dashboard"></CardDS></router-link>
      <button class="add">AÑADIR</button>
    </div>
  </section>
</template>

<style>
.ajuste-lateral {
  position: fixed;
  z-index: 999;
}
.content-dashboard {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5em; /* 80px */
  width: 100vw;
  height: 100vh;
  z-index: 998;
}
.title-dashboard {
  color: white;
  font-size: 1.8em;
  width: 65%;
  padding-top: 0.2em;
  margin-bottom: 40px;
}

.datos {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 200px;
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
  margin-bottom: 40px;
}
.add:hover {
  cursor: pointer;
  background: #003b9c;
}

@media (max-width: 700px) {
  .datos {
    position: absolute;
    left: 110px;
    top: 160px;
  }
  .title-dashboard {
    position: absolute;
    left: 130px;
  }
}

@media (max-width: 450px) {
  .title-dashboard {
    display: none;
  }
}

.link{
  text-decoration: none;
}
</style>
