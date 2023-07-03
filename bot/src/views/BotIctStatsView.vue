<script setup>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import { useRoute } from "vue-router";
// @ts-ignore
import { onBeforeMount, onMounted, ref } from "vue";

// @ts-ignore
const route = useRoute();
const bot = ref({});
const messages = ref([]);
const operation = ref({});
let iniciada = false;
const operationExist = ref(false);

const getBot = async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/botict/${route.params.name}`);
    bot.value = data;
  } catch(error){
    console.log(error);
  }
};

const updateBot = async () => {
  try {
    const { data } = await axios.put(`http://127.0.0.1:8000/botict/${route.params.name}`, bot.value);
    console.log(data);
  }catch(error){
    console.log(error);
  }
}

const createOperation = async () => {
  try {
    operation.value = {
      bot_name: bot.value.name
    }
    const { data } = await axios.post("http://127.0.0.1:8000/operationict/create", operation.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    messages.value.push("Operacion creada");
    operation.value = data.value; 
  }catch(error){
    console.log(error);
  }
}

const startOperation = async () => {
  try {
    const { data } = await axios.post(`http://127.0.0.1:8000/operationict/start/${route.params.name}`);
    messages.value.push(data);
    iniciada = true;
  }catch(error){
    console.log(error);
  }
}

const stopOperation = async () => {
  try {
    const { data } = await axios.post(`http://127.0.0.1:8000/operationict/stop/${route.params.name}`);
    messages.value.push(data);
    iniciada = false;
  }catch(error){
    console.log(error);
  }
}

const getOperation = async () => {
  const { data } = await axios.get(`http://127.0.0.1:8000/operationict/${route.params.name}`);
  operationExist.value = data;
}

onBeforeMount(() => {
  getBot();
  getOperation();
});

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
        <button @click="updateBot()">Guardar</button>
      </form>
    </section>
    <section class="stats-bot">
      <span> OPERACION </span>
      <div class="stats-control-buttons">
         <button class="create" @click="createOperation()" v-if="operationExist == false">CREAR</button>
         <button class="start" @click="startOperation()" v-if="iniciada == false">INICIAR</button>
         <button class="stop" @click="stopOperation()" v-if="iniciada == true">PARAR</button>
      </div>
      <div class="stats-messages">
        <span> MENSAJES </span>
        <p v-for="message in messages">{{ message }}</p>
      </div>
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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 50px;
  color: white;
  font-size: 18px;
}

.stats-control-buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.stats-bot .create{
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

.stats-bot .create:hover {
  cursor: pointer;
  background: #003b9c;
}

.stats-bot .start{
   display: block;
  color: white;
  background: linear-gradient(#3ae137, #009c17);
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

.stats-bot .start:hover {
  cursor: pointer;
  background: #0a9c00;
}

.stats-bot .stop{
   display: block;
  color: white;
  background: linear-gradient(#e13737, #9c0000);
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

.stats-bot .stop:hover {
  cursor: pointer;
  background: #9c0000;
}

.stats-messages{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px; ;
}

.stats-messages p{
  color: #d5f716;
}

</style>