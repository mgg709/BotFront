<script setup>
const changeColorDS = () => {
  if (document.getElementById("ds").className === "elements") {
    document.getElementById("ds").className = "elements-a";
  } else {
    document.getElementById("ds").className = "elements";
  }
};
const changeColorBot = () => {
  if (
    document.getElementById("bot").className === "elements" &&
    document.getElementById("ds").className !== "elements-a" &&
    document.getElementById("advise").className !== "elements-a"
  ) {
    document.getElementById("bot").className = "elements-a";
  } else {
    document.getElementById("bot").className = "elements";
  }
};
const changeColorAdvise = () => {
  if (document.getElementById("advise").className === "elements") {
    document.getElementById("advise").className = "elements-a";
  } else {
    document.getElementById("advise").className = "elements";
  }
};
</script>

<template>
  <header>
    <div class="bar">
      <RouterLink
        id="ds"
        @click="changeColorDS()"
        to="/dashboard"
        class="elements"
        >Panel de control</RouterLink
      >
      <RouterLink
        id="bot"
        @click="changeColorBot()"
        to="/dashboard"
        class="elements"
        >Bot</RouterLink
      >
      <RouterLink
        id="advise"
        @click="changeColorAdvise()"
        to="/dashboard"
        class="elements"
        >Consejo</RouterLink
      >
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  max-height: auto;
  height: 65px;
  border-bottom: 4px solid #3777e1;
  box-shadow: 0 3px 10px #000;
  background-color: #232323;
}

.bar {
  display: flex;
  margin-left: 150px;
  margin-right: 150px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  width: 70%;
  max-width: 100%;
  max-height: auto;
  height: 65px;
}

.elements {
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  text-decoration: none;
}

.elements-a {
  color: #3777e1;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  text-decoration: none;
}
</style>
