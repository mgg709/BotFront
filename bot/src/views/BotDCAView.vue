<script setup>
import { ref } from "vue";

// @ts-ignore
import NavBar from "../components/NavBar.vue";
import axios from "axios";


const name = ref("");
const description = ref("");
const symbol = ref("");
const amount = ref(0);
const condition = ref(0);
const max_orders = ref(0);
const take_profit = ref(0);
const stop_loss = ref(0);

const bot = ref({});
const message = ref("");
const errorMessage = ref("");

const createBot = async () => {
  bot.value = {
    name: name.value,
    description: description.value,
    symbol: symbol.value,
    amount: amount.value,
    condition: condition.value,
    max_orders: max_orders.value,
    take_profit: take_profit.value,
    stop_loss: stop_loss.value,
  };

  try {

    const { data } = await axios.post("http://127.0.0.1:8000/botdca/create", bot.value, {
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
// @ts-ignore
</script>
<template>
  <NavBar class="ajuste"></NavBar>
  <div class="container-botdca">
    <p class="title">DCA</p>
    <div class="forms-botdca">
      <section class="left-side-botdca">
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
          <div class="guide-left-botdca">
            <p>¿Cómo funciona?</p>
            <div class="guide-container-botdca">
              Este tipo de bot utiliza una estrategia DCA, es decir, Dollar Cost Averaging. DCA implica dividir la cantidad de dinero a invertir en un número de compras, lo que permite aprovechar las fluctuaciones del mercado para adquirir más activos cuando los precios son bajos y menos activos cuando los precios son altos. Esta estrategia busca promediar el costo de adquisición a lo largo del tiempo, en lugar de intentar predecir los movimientos del mercado. De esta forma, la volatilidad de la inversión se reduce.
            </div>
          </div>
        </div>
      </section>
      <section class="right-side-botdca">
        <p>Estrategia</p>
        <div class="strategy-right-form-botdca">
          <form action="">
            <label for="par">Par criptomoneda</label>
            <input type="text" name="par" id="par" v-model="symbol"/>
                <label for="quantity" id="quantity-l">Cantidad</label>
             
                <input type="number" name="quantity" id="quantity" v-model="amount"/>

                <label for="condition" id="condition-l">Condición</label>

      
                <input type="text" name="condition" id="condition" v-model="condition" />


            <label for="max-orders">Nº Max. Órdenes</label>
            <input type="number" name="max-orders" id="max-orders" v-model="max_orders"/>
          </form>
        </div>
        <span class="good-msg" v-if="message">{{ message }}</span>
        <span class="bad-msg" v-if="message == ''">{{ errorMessage }}</span>
      </section>
    </div>
    <div class="button-submit-botdca">
      <input type="submit" value="Crear bot" @click="createBot()" />
    </div>
  </div>
</template>
<style>
/* contenido general*/

.container-botdca {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 998;
  width: 100%;
  height: 95vh;
  top: 70px;
  position: relative;
}

/* titulo */

.container-botdca .title {
  color: white;
  font-size: 30px;
  font-weight: 800;
  padding: 0;
  margin-bottom: 20px;
}

/* Secciones formularios */

.forms-botdca {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Seccion izquierda */

.left-side-botdca {
  width: 45%;
  height: 100%;
  padding-left: 20px;
}

.left-side-botdca .form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-side-botdca .form-container p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.left-side-botdca .form-container .form-items {
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

.guide-left-botdca {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.guide-container-botdca {
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

.right-side-botdca {
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-side-botdca p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.strategy-right-form-botdca {
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

.strategy-right-form-botdca form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.strategy-right-form-botdca label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}
.strategy-right-form-botdca form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin-bottom: 12px;
  color: white;
}



/* Boton crear bot */

.button-submit-botdca {
  height: 100px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.container-botdca input[type="submit"] {
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

.container-botdca input[type="submit"]:hover {
  cursor: pointer;
  background: #003b9c;
}
</style>
