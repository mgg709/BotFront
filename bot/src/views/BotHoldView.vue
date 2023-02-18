<script setup>
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <div class="container-bothold">
    <NavBar class="ajuste"></NavBar>
    <p class="title-bothold">Hold</p>
    <div class="forms-bothold">
      <section class="left-side-bothold">
        <div class="settings-bothold">
          <p>Ajustes principales</p>
          <div class="form-settings-bothold">
            <form>
              <label for="name">Nombre</label>
              <input type="text" name="nombre" />
              <label for="description">Descripcion</label>
              <textarea name="description" cols="30" rows="5"></textarea>
            </form>
          </div>
        </div>
        <div class="strategy-bothold">
          <p>Estrategia</p>
          <div class="form-strategy-bothold">
            <form action="">
              <label for="par">Par criptomoneda</label>
              <input type="text" name="par" />
              <div class="row1-bothold">
                <label for="quantity" id="quantity-bothold">Cantidad</label>
                <label for="frequency">Frecuencia</label>
              </div>
              <div class="row2-bothold">
                <input type="number" name="quantity" />
                <input type="date" name="frequency" />
              </div>
            </form>
          </div>
        </div>
        <div class="button-bothold">
          <input type="submit" value="Crear bot" />
        </div>
      </section>
      <section class="right-side-bothold">
        <div class="function-bothold">
          <p>¿Cómo funciona?</p>
          <div class="function-description-hold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            possimus. Rem, voluptates laboriosam eaque temporibus nesciunt,
            impedit dolore optio qui nihil quod, ratione ipsam? Porro illo quasi
            corrupti odio assumenda. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores, alias consequatur? Molestias harum dolore
            aperiam eius aut, laboriosam eligendi enim odit porro suscipit illo!
            Dignissimos in quibusdam illo voluptas deserunt? nulla.
          </div>
        </div>
        <div class="image-bothold">
          <img src="" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>
<style>
/* Contendor general */

.container-bothold {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 998;
  position: relative;
  padding-top: 80px;
  padding-bottom: 30px;
}

.forms-bothold {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  height: 100vh;
}
/* Titulo */

.title-bothold {
  color: white;
  font-size: 30px;
  font-weight: 800;
  padding: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Sección izquierda */

.left-side-bothold {
  width: 45%;
  height: 100%;
  /* padding-left: 20px; */
}

/* Formulario ajustes principales */

.settings-bothold {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.settings-bothold p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-settings-bothold {
  background: linear-gradient(to bottom, #363636, #141313);
  width: 60%;
  height: 200px;
  border: 1px solid #545353;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-settings-bothold form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.form-settings-bothold form label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}

.form-settings-bothold form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin-bottom: 8px;
}

.form-settings-bothold form textarea {
  background: #545353;
  border-radius: 5px;
  border: none;
  margin-bottom: 8px;
  resize: none;
}

/* Formulario estrategia */

.strategy-bothold {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.strategy-bothold p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.form-strategy-bothold {
  background: linear-gradient(to bottom, #363636, #141313);
  width: 60%;
  height: 30%;
  border: 1px solid #545353;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-strategy-bothold form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.form-strategy-bothold form label {
  color: white;
  font-weight: 700;
  margin-bottom: 5px;
}

.form-strategy-bothold form input {
  background: #545353;
  border-radius: 5px;
  border: none;
  height: 20px;
  width: 250px;
  margin-bottom: 8px;
}

#quantity-bothold {
  margin-right: 73px;
}

.row1-bothold {
  margin-bottom: 5px;
}

.row2-bothold input {
  width: 45% !important;
  margin-right: 10px;
}

/* Botón crear bot */

.button-bothold {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.button-bothold input {
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

.button-bothold input:hover {
  cursor: pointer;
  background: #003b9c;
}

/* Sección derecha */

.right-side-bothold {
  width: 45%;
  height: 100%;
  /* padding-left: 20px; */
}

.right-side-bothold p {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

/* Guía */

.function-bothold {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.function-description-hold {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  background: linear-gradient(to bottom, #363636, #141313);
  width: 70%;
  height: 33vh;
  border: 1px solid #545353;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 25px;
  color: white;
  text-align: justify;
}

/* Imagen */

.image-bothold {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: gray;
  margin: auto;
  margin-top: 20px;
}
</style>
