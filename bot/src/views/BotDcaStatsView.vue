<script setup>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import { useRoute } from "vue-router";
import { onBeforeMount, onMounted, ref } from "vue";

// @ts-ignore
const route = useRoute();
const bot = ref({});


const getBot = async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/botdca/${route.params.name}`);
    bot.value = data;
  } catch(error){
    console.log(error);
  }
};

const updateBot = async () => {
  try {
    const { data } = await axios.put(`http://127.0.0.1:8000/botdca/${route.params.name}`, bot.value);
    console.log(data);
  }catch(error){
    console.log(error);
  }
}


onBeforeMount(() => {
  getBot();
});
// @ts-ignore
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <section class="content-bot-stats">
    <section class="edit-data-bot">
      <form>
        <label for="name">Nombre</label>
        <input type="text" name="name" id="" v-model="bot.name">
        <label for="description">Descripcion</label>
        <textarea name="description" id="" cols="30" rows="5"  v-model="bot.description"></textarea>
        <label for="par">Par criptomoneda</label>
        <input type="text" name="par" id=""  v-model="bot.symbol">
        <label for="amount">Cantidad</label>
        <input type="number" name="amount" id=""  v-model="bot.amount">
        <label for="condition">Condicion</label>
        <input type="number" name="condition" id=""  v-model="bot.condition" step="any">
        <label for="max_orders">Maximo de ordenes</label>
        <input type="number" name="max_orders" id=""  v-model="bot.max_orders">
        <button @click="updateBot()">Guardar</button>
      </form>
    </section>
    <section class="stats-bot">
      <span>El bot ha realizado la operación tal</span>
    </section>
  </section>
</template>
<style>

.content-bot-stats{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.edit-data-bot form {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
}

.edit-data-bot form label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}

.edit-data-bot form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  width: 250px;
  margin-bottom: 8px;
  color: white;
  padding: 3px;
  font-size: 20px;
}

.edit-data-bot form textarea {
  background: #545353;
  border-radius: 5px;
  border: none;
  margin-bottom: 8px;
  resize: none;
  color: white;
}

.edit-data-bot form button {
  display: block;
  color: white;
  background: linear-gradient(#3777e1, #003b9c);
  border-width: 0;
  border-radius: 7px;
  min-width: 150px;
  min-height: 40px;
  box-shadow: 2px 2px 5px black;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: center;
}

.edit-data-bot form button:hover {
  cursor: pointer;
  background: #003b9c;
}

.stats-bot{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 50px;
  color: white;
  font-size: 18px;
}
</style>