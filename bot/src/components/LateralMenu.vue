//@ts-nocheck
<script setup></script>
<template>
  <ul>
    <p>CARTERAS</p>
    <li><a>Cartera 1</a></li>
    <li><a>Cartera 2</a></li>
    <li><a>Cartera 3</a></li>
    <li><a>Cartera 4</a></li>
    <button class="add-lateralmenu">AÑADIR</button>
  </ul>
</template>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 15%;
  max-width: 320px;
  background-color: #232323;
  position: fixed;
  left: 0;
  top: 65px;
  height: 100%;
  border-right: 1px solid #545353;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

ul p {
  border-bottom: 1px solid #3777e1;
  margin-bottom: 20px;
  width: 100%;
  height: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 700;
}
ul li {
  padding-top: 5px;
}
li a {
  display: block;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 1.2em;
}

li a:hover {
  background-color: #3777e1;
}

.add-lateralmenu {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(#3777e1, #003b9c);
  border-width: 0;
  border-radius: 15px;
  width: 8vw;
  max-width: 150px;
  height: 7vh;
  max-height: 60px;
  box-shadow: 2px 2px 5px black;
  font-size: 1.1em;
  font-weight: 800;
  margin-top: 20px;
}

.add-lateralmenu:hover {
  cursor: pointer;
  background: #003b9c;
}

@media (max-width: 1000px) {
  ul {
    min-width: 115px;
  }
  ul h2 {
    font-size: 1.2em;
  }
}

@media (max-width: 450px) {
  ul {
    top: 100px;
  }
}
</style>
