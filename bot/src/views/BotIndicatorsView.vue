<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";


const message = ref("");
const errorMessage = ref("");
const name = ref("");
const description = ref("");
const symbol = ref("");
const bot = ref({});


const createBot = async () => {
  bot.value = {
    name: name.value,
    description: description.value,
    symbol: symbol.value,
  };

  try {

    const { data } = await axios.post("http://127.0.0.1:8000/botict/create", bot.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    message.value = "Bot creado correctamente";
  } catch (error) {
    console.log(error.response.data);
    errorMessage.value = error.response.data['detail'];
  }
};
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <div class="container-botict">
    <p class="title">INDICADORES</p>
    <div class="forms-botict">
      <section class="left-side-botict">
        <div class="form-container">
          <p>Ajustes principales</p>
          <div class="form-items">
            <form>
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" v-model="name"/>
              <label for="description">Descripcion</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                v-model="description"></textarea>
            </form>
          </div>
          <div class="guide-left-botict">
            <p>¿Cómo funciona?</p>
            <div class="guide-container-botict">
              Este tipo de bot emplea la estrategia basada en indicadores. Esta estrategia está enfocada en el corto plazo y se encarga de enviar una señal al usuario. Como indicador se ha empleado las bandas de bollinger. Este indicador se encarga de medir la volatilidad del mercado. Cuando el precio de la criptomoneda se encuentra por encima de la banda superior, se considera que el mercado está sobrecomprado y se recomienda vender. Por el contrario, cuando el precio de la criptomoneda se encuentra por debajo de la banda inferior, se considera que el mercado está sobrevendido y se recomienda comprar. En este caso, se mandará una señal de compra cuando el precio toque la banda inferior.
	
            </div>
          </div>
        </div>
      </section>
      <section class="right-side-botict">
        <p>Estrategia</p>
        <div class="strategy-right-form-botict">
          <form action="">
            <label for="par">Par criptomoneda</label>
            <input type="text" name="par" id="par" v-model="symbol"/>
          </form>
        </div>
         <span class="good-msg" v-if="message">{{ message }}</span>
         <span class="bad-msg" v-if="message == ''">{{ errorMessage }}</span>
      </section>
    </div>
    <div class="button-submit-botdca">
      <input type="submit" value="Crear bot" @click="// @ts-ignore
createBot()" />
    </div>
  </div>
</template>
<style>
.container-botict {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 998;
  width: 100%;
  height: 95vh;
  top: 70px;
  position: relative;
  padding-bottom: 20px;
}

/* titulo */

.container-botict .title {
  color: white;
  font-size: 30px;
  font-weight: 800;
  padding: 0;
  margin-bottom: 20px;
}

/* Secciones formularios */

.forms-botict {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Seccion izquierda */

.left-side-botict {
  width: 45%;
  height: 100%;
  padding-left: 20px;
}

.left-side-botict .form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-side-botict .form-container p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.left-side-botict .form-container .form-items {
  background: linear-gradient(to bottom, #363636, #141313);
  width: 70%;
  height: 200px;
  border: 1px solid #545353;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-container form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.form-container form label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}

.form-container form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin-bottom: 8px;
  color: white;
}

.form-container form textarea {
  background: #545353;
  border-radius: 5px;
  border: none;
  margin-bottom: 8px;
  resize: none;
  color: white;
}

/* ¿Como funciona? */

.guide-left-botict {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.guide-container-botict {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background: linear-gradient(to bottom, #363636, #141313);
  width: 75%;
  border: 1px solid #545353;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
  color: white;
  text-align: justify;
}
/* Seccion derecha */

.right-side-botict {
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-side-botict p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.strategy-right-form-botict {
  max-height: 60vh;
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(to bottom, #363636, #141313);
  border: 1px solid #545353;
  border-radius: 5px;
  padding-top: 12px;
  padding-left: 15px;
}

.strategy-right-form-botict form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.strategy-right-form-botict label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}
.strategy-right-form-botict form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin-bottom: 12px;
  color: white;
}



/* Boton crear bot */

.button-submit-botict {
  height: 100px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.container-botict input[type="submit"] {
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
}

.container-botict input[type="submit"]:hover {
  cursor: pointer;
  background: #003b9c;
}

</style>
