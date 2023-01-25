<script setup></script>

<template>
  <header class="cabecera">
    <div class="bar">
      <RouterLink id="ds" to="/dashboard" class="elements"
        >Panel de control</RouterLink
      >
      <RouterLink id="bot" to="/dashboard" class="elements">Bot</RouterLink>
      <RouterLink id="advise" to="/dashboard" class="elements"
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
  position: sticky;
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
