<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const props = defineProps(['bot','type'])

const precio = ref(0);
const porcentaje = ref(0);

const getPrecio = async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/price/${props.bot.symbol}`);
    precio.value = data.price;
    let porcentajeActual = precio.value * 100 / props.bot.last_price;
    porcentaje.value = porcentajeActual - 100;
    console.log(precio.value);
  } catch(error) {
    console.log(error);
  }
} 

const getLastPrice = async () => {
  try {
    let data;
    if (props.type == "DCA") {
      data = await axios.get(`http://127.0.0.1:8000/botdca/${props.bot.name}`);
      console.log(data);
      props.bot.last_price = data.data.last_price;
    } else if (props.type == "HOLD") {
      data = await axios.get(`http://127.0.0.1:8000/bothold/${props.bot.name}`);
      props.bot.last_price = data.data.last_price;
    } else {
      data = await axios.get(`http://127.0.0.1:8000/botict/${props.bot.name}`);
      props.bot.last_price = data.data.last_price;
    }
  }catch(error) {
    console.log(error);
  }
}

onMounted(() => {
  getPrecio();
  getLastPrice();
  setInterval(getPrecio, 5 * 60 * 1000);
})

</script>

<template>
  <div class="card">
    <img :src="'/src/assets/' + bot.symbol+'.png'" class="coin">
    <section class="precio">{{ Number(precio).toFixed(5) }}</section>
    <section v-if="porcentaje > 0 && bot.last_price"  class="porcentaje-positivo">{{ porcentaje.toFixed(2) }}%</section>
    <section v-if="porcentaje <= 0 && bot.last_price" class="porcentaje-negativo">{{ porcentaje.toFixed(2) }}%</section>
    <section class="mercado">{{ type }}</section>
    <section class="unidades">
      <span class="label" id="label-1">Ultima compra</span>
      <span class="dato" id="dato-1" v-if="bot.last_price" >{{ bot.last_price.toFixed(3) }}</span>
    </section>
    <section class="unidades">
      <span class="label" id="label-2">Cantidad</span>
      <span class="dato" id="dato-2">{{ bot.amount }}</span>
    </section>
    <section class="unidades">
      <span class="label" id="label-3">Ordenes maximas</span>
      <span class="dato" id="dato-3">{{ bot.max_orders }}</span>
    </section>
    <button class="close">ELIMINAR</button>
  </div>
</template>
<style>
.card {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90px;
  background: linear-gradient(135deg, #232323 20%, #2963d3);
  border-radius: 20px;
  padding: 0 20px;
  margin-bottom: 15px;
}

img.coin {
  display: flex;
  width: 80px;
  height: 80px;
  margin-right: 8px;
}
.precio {
  font-size: 1.8em;
  color: white;
  font-weight: 800;
  margin-right: 10px;
}
.porcentaje-positivo {
  font-size: 1.8em;
  color: #24ff00;
  font-weight: 800;
  margin-right: 20px;
}

.porcentaje-negativo{
  font-size: 1.8em;
  color: red;
  font-weight: 800;
  margin-right: 20px;
}
.mercado {
  font-size: 0.9em;
  color: white;
  padding: 5px;
  border-radius: 7px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  margin-right: 40px;
}
.unidades {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}
.label {
  color: white;
  margin-bottom: 6px;
  font-size: 1.1em;
}
.dato {
  color: white;
  font-size: 1.3em;
  font-weight: 700;
}
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(#ff0000, #970b0b);
  border-width: 0;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  box-shadow: 2px 2px 5px black;
  font-size: 14px;
  font-weight: 800;
}
.close:hover {
  cursor: pointer;
  background: #970b0b;
}

@media (max-width: 1150px) {
  .dato,
  .label {
    display: none;
  }
}

@media (max-width: 800px) {
  .coin {
    width: 50px !important;
    height: 50px !important;
  }
  .precio {
    font-size: 1.3em;
  }
  .card {
    min-height: 70px !important;
  }
  .porcentaje {
    font-size: 1.3em;
  }
  .mercado {
    font-size: 0.7em;
  }
  .close {
    font-size: 0.8em;
    width: 80px;
  }
}

@media (max-width: 700px) {
  .precio,
  .porcentaje,
  .mercado {
    display: none;
  }
}
</style>
