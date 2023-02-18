//@ts-nocheck
<script setup></script>

<template>
  <header class="cabecera">
    <div class="bar">
      <RouterLink id="ds" to="/dashboard" class="elements"
        >Panel de control</RouterLink
      >
      <div class="separator"></div>
      <RouterLink id="bot" to="/bot" class="elements">Bot</RouterLink>
      <div class="separator"></div>
      <RouterLink id="advise" to="/consejo" class="elements"
        >Consejo</RouterLink
      >
    </div>
  </header>
</template>

<style>
.cabecera {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  min-height: 65px;
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
  width: 80%;
  max-width: 100%;
  max-height: auto;
  min-height: 65px;
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

.separator {
  width: 1px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
}

@media (max-width: 450px) {
  .cabecera {
    min-height: 100px;
  }
  .bar {
    flex-direction: column;

    padding: 0;
  }
  .separator {
    width: 150px;
    height: 1px;
    background-color: white;
    border-radius: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .elements {
    margin-bottom: 2px;
  }
}
</style>
