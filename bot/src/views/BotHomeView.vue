<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <NavBar class="ajuste-bothome"></NavBar>
  <div class="content-bothome">
    <RouterLink to="/bot/dca">
      <button class="img-btn-bothome"><img class="dca" />DCA</button>
    </RouterLink>
    <RouterLink to="/bot/hold">
      <button class="img-btn-bothome"><img class="hold" />HOLD</button>
    </RouterLink>
    <RouterLink to="/bot/indicators">
      <button class="img-btn-bothome">
        <img class="indicators" />INDICADORES
      </button>
    </RouterLink>
  </div>

  <RouterView />
</template>

<style>
.content-bothome {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  justify-content: space-evenly;
  padding-bottom: 100px;
}

.img-btn-bothome {
  box-sizing: border-box;
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#3777e1, #003b9c);
  margin: 0;
  width: 125px;
  height: 125px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 5px black;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 800;
  transition: 0.5s, color 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 40px;
}

.img-btn-bothome img {
  padding: 12px;
}

.dca {
  content: url("/src/assets/dca.png");
}

.img-btn-bothome:hover .dca {
  content: url("/src/assets/dca-hover.png");
}

.hold {
  content: url("/src/assets/hold.png");
}

.img-btn-bothome:hover .hold {
  content: url("/src/assets/hold-hover.png");
}

.indicators {
  content: url("/src/assets/indicators.png");
}

.img-btn-bothome:hover .indicators {
  content: url("/src/assets/indicators-hover.png");
}

button.img-btn-bothome:hover {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#ffffff, #a2a2a2);
  cursor: pointer;
  border: 0;
  box-shadow: 0px 0px 5px black;
  transform: translatey(-20px);
  -webkit-transform: translatey(-20px);
  -moz-transform: translatey(-20px);
}

a {
  text-decoration: none;
}
</style>
