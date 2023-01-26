<script setup></script>

<template>
  <!-- <div class="btn-menu">
    <img class="menu2" src="src/assets/burguer-menu.svg" />
  </div> -->
  <div id="menu" class="contenido-menu">
    <section class="titulo">CARTERAS</section>
    <ul class="lista">
      <li class="cartera">Cartera 1</li>
      <li class="cartera">Cartera 2</li>
      <li class="cartera">Cartera 3</li>
      <li class="cartera">Cartera 4</li>
    </ul>
  </div>
</template>
<style>
.btn-menu {
  margin: 40px 50px;
  z-index: 999;
}
.menu2 {
  vertical-align: top;
  width: 40px;
  cursor: pointer;
  color: white;
  background: none;
  border: none;
  padding: 0;
  margin-right: 20px;
  top: 0;
  left: 0;
}

.contenido-menu {
  background-color: #3d3d3d;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0 !important;
  transition: all 0.5s ease;
  padding-top: 72px;
}
.cartera {
  font-size: 20px;
  font-weight: 500;
}
.titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  height: 50px;
  color: white;
  background: #000000;
  font-size: 30px;
}
.lista {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  list-style-type: none;
  padding: 10px 30px;
}
.lista:hover li {
  background-color: white;
  color: #000000;
}
.cartera {
  margin-bottom: 10px;
}

.active {
  transform: translate(-600px);
}
.opacity {
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}
</style>
