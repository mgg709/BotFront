<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <div class="container-bothold">
    <NavBar></NavBar>
    <p class="title-bothold">Hold</p>
    <section class="left-side-bothold">
      <div class="settings-bothold">
        <p>Ajustes principales</p>
        <div class="form-settings-bothold">
          <form>
            <label for="name">Nombre</label>
            <input type="text" name="nombre" />
            <label for="description">Descripcion</label>
            <textarea name="description" cols="30" rows="10"></textarea>
          </form>
        </div>
      </div>
      <div class="strategy-bothold">
        <p>Estrategia</p>
        <div class="form-strategy-bothold">
          <form action="">
            <label for="par">Par criptomoneda</label>
            <input type="text" name="par" />
            <div class="row-1">
              <label for="quantity">Cantidad</label>
              <label for="frequency">Frecuencia</label>
            </div>
            <div class="row-2">
              <input type="number" name="quantity" />
              <input type="date" name="frequency" />
            </div>
          </form>
        </div>
      </div>
      <input type="submit" value="Crear bot" />
    </section>
    <section class="right-side-bothold">
      <div class="function-bothold">
        <p>¿Cómo funciona?</p>
        <div class="function-description-hold"></div>
      </div>
      <div class="image">
        <img src="" alt="" />
      </div>
    </section>
  </div>
</template>
<style></style>
