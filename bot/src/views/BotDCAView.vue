<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <NavBar></NavBar>
  <div class="container-botdca">
    <p class="title">DCA</p>
    <div class="forms-botdca">
      <section class="left-side-botdca">
        <div class="form-container">
          <p>Ajustes principales</p>
          <div class="form">
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
            <div>
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
          <label for="par">Par criptomoneda</label>
          <input type="text" name="par" id="par" />
          <div class="table">
            <div class="row-1">
              <label for="quantity">Cantidad</label>
              <label for="order">Tipo de orden</label>
            </div>
            <div class="row-2">
              <input type="number" name="quantity" id="quantity" />
              <input type="text" name="order" id="order" />
            </div>
          </div>
          <label for="max-orders">Nº Max. Órdenes</label>
          <input type="number" name="max-orders" id="max-orders" />
          <label for="tp">Take profit</label>
          <input type="number" name="tp" id="tp" />
          <label for="sl">Stop loss</label>
          <input type="number" name="sl" id="sl" />
        </div>
      </section>
    </div>
    <button class="btn-botdca">Crear bot</button>
  </div>
</template>
<style>
.container-botdca {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 998;
  width: 100%;
  height: 90vh;
  padding-top: 50px;
}
.container-botdca .title {
  color: white;
  font-size: 30px;
  font-weight: 800;
  padding: 0;
  margin-bottom: 20px;
}
.forms-botdca {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.left-side-botdca {
  width: 45%;
  height: 100%;
  padding-left: 20px;
}

.right-side-botdca {
  width: 45%;
  height: auto;
}

.left-side-botdca .form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.left-side-botdca .form-container p {
  color: white;
  font-size: 18px;
  font-weight: 700;
}

.form-container .form {
  background: linear-gradient(to bottom, #363636, #141313);
  width: 70%;
  height: 200px;
  border: 1px solid #545353;
  border-radius: 5px;
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
}
</style>
