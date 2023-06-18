//@ts-nocheck
<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";

const amount = ref(0);
const duration = ref(0);
const loss = ref(0);
let coins = ref("");
let strategy_description= ref("");

function recomendar() {
  if (amount.value <= 1000) {
    coins.value = "ATOM, LINK, DOT, ADA, MATIC"
  }

  if(amount.value > 1000 && amount.value <= 5000) {
    coins.value = "ETH, PAXG, BNB, XMR"
  }

  if(amount.value > 5000) {
    coins.value = "BTC, ETH, MKR, WBTC"
  }

  if (duration.value >= 60) {
    strategy_description.value = "Es recomendable emplear un estrategia de hold que diversifique de manera correcta las compras que realices durante la inversión."
  }

  if (duration.value < 60) {
    strategy_description.value = "Es recomendable emplear una estrategia de DCA que pueda sacar el máximo rendimiento posible en el corto periodo de tiempo. También se puede emplear una estrategia que emplee indicadores, pero para ello deberá de conocer su funcionamiento y saber que este no realiza las compras de forma automática, solo se encarga de envíar señales de compra y venta."
  }
  if(loss.value > 10) {
    strategy_description.value = "En caso de arriesgar más del 10% de su capital, le recomendamos emplear una estrategia de hold, ya que tendrá margen de reacción a la hora de decidir si vender o no. Por tanto, en caso de pérdida, esperar 1 o 2 días más supondrá una pérdida mínima."
  }
  if (loss.value <= 10) {
    strategy_description.value ="En este caso, emplear una estrategia de DCA se ajusta a sus objetivos, ya que a través del stop loss podrá reducir la pérdida al porcentaje deseado. Tenga en cuenta que si emplea una estrategia de indicadores deberá de controlar las compras de forma manual, por tanto, en caso de no disponer del tiempo necesario, le recomendamos emplear una estrategia de DCA. Además, si considera que posee el conocimiento adecuado, puede emplear el apalancamiento para aumentar sus ganancias."
  }
}
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
          <input type="number" name="cantidad" id="cantidad" v-model="amount"/>
          <label for="duracion">Duración estimada de la inversión</label>
          <div class="duration">
            <input type="number" name="dias" id="dias" v-model="duration"/>
            <label for="horas">Días</label>
          </div>
          <label for="perdida">Perdida máxima de la inversión</label>
          <input type="number" name="perdida" id="perdida" v-model="loss"/>
          <input type="submit" value="Enviar" id="enviar" @click.prevent="recomendar()" />
        </form>
      </section>
      <div class="resultado-advise">
        <p>DEBERÍA INVERTIR EN</p>
        <span>{{ coins }}</span>
        <p>MONEDA/S</p>
        <span>{{ strategy_description }}</span>
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
  border-radius: 5px;
  margin-bottom: 100px;
  padding: 20px 0px;
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

#dias {
  width: 200px !important;
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

.botones-advise button{
  cursor: pointer;
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
  color: white;
}

.resultado-advise span{
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  color: greenyellow;
}

</style>
