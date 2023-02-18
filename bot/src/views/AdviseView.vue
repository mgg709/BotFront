//@ts-nocheck
<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <div class="content-advise">
    <NavBar class="ajuste"></NavBar>
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
          <div class="duration">
            <input type="number" name="dias" id="dias" />
            <label for="horas">Días</label>
            <input type="number" name="horas" id="horas" />
            <label for="dias">Horas</label>
          </div>
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
/* Sección general */

.content-advise {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding-top: 90px;
  height: 100vh;
  z-index: 998;
}

/* Definición de este site */

.explicacion-advise {
  color: white;
  width: 60vw;
  height: auto;
  text-align: center;
  margin-bottom: 4%;
  text-align: justify;
}

.subcontainer-advise {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

/* Formulario izquierda */

.formulario-advise {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(to bottom, #363636, #141313);
  border: 1px solid #545353;
  width: 30%;
  height: 70%;
  border-radius: 5px;
  margin-bottom: 100px;
  padding-top: 20px;
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
  font-weight: 700;
}

#form-advise input[type="number"] {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin: 5px;
}
#form-advise input::-webkit-outer-spin-button,
#form-advise input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.duration {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#horas,
#dias {
  width: 80px !important;
  height: 20px !important;
}

#estrategia-corto,
#estrategia-largo {
  width: 120px;
  height: 35px;
  margin: 5px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 8px;
}
.botones-advise {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#enviar {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(#3777e1, #003b9c);
  border-width: 0;
  border-radius: 10px;
  min-width: 100px;
  min-height: 40px;
  box-shadow: 2px 2px 5px black;
  font-size: 16px;
  font-weight: 800;
  margin-top: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
#enviar:hover {
  cursor: pointer;
  background: #003b9c;
}

/* Resultado sección derecha */

.resultado-advise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.resultado-advise span {
  width: 10vw;
  height: 20vh;
  background: gray;
}
</style>
