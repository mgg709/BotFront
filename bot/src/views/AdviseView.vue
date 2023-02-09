<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <div class="content-advise">
    <p class="explicacion-advise">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
      voluptates! Sit voluptate consectetur magnam consequatur id consequuntur
      repudiandae suscipit repellendus dolor tenetur quis, blanditiis dicta
      accusamus distinctio totam a eaque. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ea soluta similique explicabo cupiditate aut distinctio
      quidem quam tempore, error dicta atque maxime molestias possimus pariatur
      eius.
    </p>
    <div class="subcontainer-advise">
      <section class="formulario-advise">
        <form action="" method="post" id="form-advise">
          <p>FORMULARIO</p>
          <label for="cantidad">Cantidad que desea invertir</label>
          <input type="number" name="cantidad" id="cantidad" />
          <label for="estrategia">Estrategia de la inversión</label>
          <div class="botones-advise">
            <button id="estrategia-corto">Corto plazo</button>
            <button id="estrategia-largo">Largo plazo</button>
          </div>
          <label for="duracion">Duración estimada de la inversión</label>
          <input type="number" name="dias" id="dias" />
          <input type="number" name="horas" id="horas" />
          <label for="perdida">Perdida máxima de la inversión</label>
          <input type="number" name="perdida" id="perdida" />
          <input type="submit" value="Enviar" id="enviar" />
        </form>
      </section>
      <div class="resultado-advise">
        <p>DEBERÍA INVERTIR EN</p>
        <span></span>
        <p>MONEDA/S</p>
        <span></span>
        <p>MERCADO</p>
        <span></span>
        <p>ESTRATEGIA</p>
      </div>
    </div>
  </div>
</template>
<style>
.content-advise {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 88vw;
  padding-top: 50px;
  height: 90vh;
}
.explicacion-advise {
  color: white;
  width: 60vw;
  height: auto;
  text-align: center;
}
.subcontainer-advise {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
.formulario-advise {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(to bottom, #363636, #141313);
  border: 1px solid #545353;
  width: 30%;
  height: 90%;
  border-radius: 5px;
}

#form-advise {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#form-advise p {
  font-size: 25px;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
}

#form-advise label {
  font-size: 17px;
  color: white;
  display: block;
  padding: 5px;
  padding-bottom: 10px;
}

#form-advise input[type="number"] {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin: 5px;
}
</style>
