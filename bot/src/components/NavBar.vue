<template>
  <header>
    <div class="bar">
      <RouterLink to="/dashboard" class="element1">Panel de control</RouterLink>
      <RouterLink to="/dashboard" class="element2">Bot</RouterLink>
      <RouterLink to="/dashboard" class="element3">Consejo</RouterLink>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
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

.element1 {
  color: white;

  text-decoration: none;
}

.element2 {
  color: white;
  text-decoration: none;
}

.element3 {
  color: white;
  text-decoration: none;
}
</style>
