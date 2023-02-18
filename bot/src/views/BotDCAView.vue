<script setup>
import NavBar from "../components/NavBar.vue";
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
              <input type="text" name="name" id="name" />
              <label for="description">Descripcion</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"></textarea>
            </form>
          </div>
          <div class="guide-left-botdca">
            <p>¿Cómo funciona?</p>
            <div class="guide-container-botdca">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum
              cupiditate non maxime ipsum minima amet. Libero, optio nihil?
              Ullam error distinctio eligendi consequatur quod enim dolorem ex
              nihil repudiandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo natus odio dolore exercitationem quod
              commodi in, suscipit amet. Dolorum consectetur veniam aperiam
              minima assumenda in nostrum sunt iusto eius porro?.
            </div>
          </div>
        </div>
      </section>
      <section class="right-side-botdca">
        <p>Estrategia</p>
        <div class="strategy-right-form-botdca">
          <form action="">
            <label for="par">Par criptomoneda</label>
            <input type="text" name="par" id="par" />
            <div class="table">
              <div class="row-1">
                <label for="quantity" id="quantity-l">Cantidad</label>
                <label for="order" id="order-l">Tipo de orden</label>
              </div>
              <div class="row-2">
                <input type="number" name="quantity" id="quantity" />
                <input type="text" name="order" id="order" />
              </div>
              <div class="row-3">
                <label for="market">Mercado</label>
                <label for="condition" id="condition-l">Condición</label>
              </div>
              <div class="row-4">
                <input type="text" name="market" id="market" />
                <input type="text" name="condition" id="condition" />
              </div>
            </div>
            <label for="max-orders">Nº Max. Órdenes</label>
            <input type="number" name="max-orders" id="max-orders" />
            <label for="tp">Take profit</label>
            <input type="number" name="tp" id="tp" />
            <label for="sl">Stop loss</label>
            <input type="number" name="sl" id="sl" />
          </form>
        </div>
      </section>
    </div>
    <div class="button-submit-botdca">
      <input type="submit" value="Crear bot" />
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
}

.form-container form textarea {
  background: #545353;
  border-radius: 5px;
  border: none;
  margin-bottom: 8px;
  resize: none;
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
  width: 70%;
  height: 33vh;
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
}

.strategy-right-form-botdca .row-1,
.row-3 {
  margin-bottom: 5px;
}
.strategy-right-form-botdca #order-l {
  margin-left: 65px;
}

.strategy-right-form-botdca .row-2 input {
  width: 40%;
  margin-right: 25px;
}

.strategy-right-form-botdca .row-4 input {
  width: 40%;
  margin-right: 25px;
}

.strategy-right-form-botdca #condition-l {
  margin-left: 69px;
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
