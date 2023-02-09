<script setup>
import NavBar from "../components/NavBar.vue";

window.addEventListener("load", function () {
  this.location.reload();
});
</script>
<template>
  <NavBar class="ajuste-bothome"></NavBar>
  <div class="content-bothome">
    <RouterLink to="">
      <button class="img-btn">
        <img class="dca" src="../assets/dca.png" />DCA
      </button>
    </RouterLink>
    <RouterLink to="/bot">
      <button class="img-btn"><img class="bot" />HOLD</button>
    </RouterLink>
    <button class="img-btn"><img class="consejo" />INDICADORES</button>
  </div>

  <RouterView />
</template>

<style>
.ajuste-bothome {
  position: fixed;
  top: 0;
  z-index: 999;
}
.content-bothome {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  justify-content: space-evenly;
  padding-bottom: 100px;
}

button.img-btn {
  box-sizing: border-box;
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#3777e1, #003b9c);
  margin: 0;
  width: 100px;
  height: 100px;
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

.img-btn img {
  padding: 5px;
}

.img-btn:hover .dca {
  content: url("src/assets/dca-hover.png");
}

button.img-btn:hover {
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

button.img-btn img.bot {
  content: url("src/assets/robot.png");
  padding: 8px;
}

button.img-btn:hover img.bot {
  content: url("src/assets/robot-hover.png");
  padding: 8px;
}

button.img-btn img.consejo {
  content: url("src/assets/consejo.png");
  padding: 8px;
}

button.img-btn:hover img.consejo {
  content: url("src/assets/consejo-hover.png");
  padding: 8px;
}

button.img-btn img.seguimiento {
  content: url("src/assets/dashboard.png");
  padding: 8px;
}

button.img-btn:hover img.seguimiento {
  content: url("src/assets/dashboard-hover.png");
  padding: 8px;
}
a {
  text-decoration: none;
}
</style>
