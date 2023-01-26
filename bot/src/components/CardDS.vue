<template>
  <div class="card">
    <img class="coin" src="src/assets/bitcoin.png" />
    <section class="precio">65000</section>
    <section class="porcentaje">2%</section>
    <section class="mercado">SPOT</section>
    <section class="unidades">
      <span class="label">Apertura</span>
      <span class="dato">45000</span>
    </section>
    <section class="unidades">
      <span class="label">Apertura</span>
      <span class="dato">45000</span>
    </section>
    <section class="unidades">
      <span class="label">Apertura</span>
      <span class="dato">45000</span>
    </section>
    <button class="close">CERRAR</button>
  </div>
</template>
<style>
.card {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background: linear-gradient(135deg, #232323 20%, #2963d3);
  border-radius: 20px;
  padding: 0 20px;
}

img.coin {
  display: flex;
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 8px;
}
.precio {
  font-size: 20px;
  color: white;
  font-weight: 800;
  margin-right: 10px;
}
.porcentaje {
  font-size: 20px;
  color: #24ff00;
  font-weight: 800;
  margin-right: 20px;
}
.mercado {
  font-size: 12px;
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
  font-size: 14px;
}
.dato {
  color: white;
  font-size: 17px;
  font-weight: 700;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(#ff0000, #970b0b);
  border-width: 0;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  box-shadow: 2px 2px 5px black;
  font-size: 14px;
  font-weight: 800;
}
button:hover {
  cursor: pointer;
  background: #970b0b;
}

@media (min-width: 1400px) {
  .card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background: linear-gradient(135deg, #232323 20%, #2963d3);
    border-radius: 20px;
    padding: 0 20px;
  }

  img.coin {
    display: flex;
    position: relative;
    width: 65px;
    height: 65px;
    margin-right: 8px;
  }
  .precio {
    font-size: 24px;
    color: white;
    font-weight: 800;
    margin-right: 10px;
  }
  .porcentaje {
    font-size: 24px;
    color: #24ff00;
    font-weight: 800;
    margin-right: 20px;
  }
  .mercado {
    font-size: 14px;
    color: white;
    padding: 5px;
    border-radius: 7px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    margin-right: 100px;
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
    font-size: 14px;
  }
  .dato {
    color: white;
    font-size: 19px;
    font-weight: 700;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: linear-gradient(#ff0000, #970b0b);
    border-width: 0;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    box-shadow: 2px 2px 5px black;
    font-size: 16px;
    font-weight: 800;
  }
  button:hover {
    cursor: pointer;
    background: #970b0b;
  }
}
@media (max-width: 700px) {
  .label {
    display: none;
  }
  .dato {
    display: none;
  }
}
</style>
