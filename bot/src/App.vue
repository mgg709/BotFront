<script></script>

<template>
  <div class="content">
    <span>
      <button class="img-btn">Seguimiento</button>
      <button class="img-btn"><img /></button>
      <button>Consejo</button>
    </span>
  </div>
</template>

<style>
/* button {
  padding: 10px;
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 5px;
}

button:hover {
  background: white;
  color: #333;
} */

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button.img-btn {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#2940d3, #001abd 64%);
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 4em;
  border: none;
  box-shadow: 0px 0px 5px black;
}

button.img-btn img {
  content: url("src/assets/robot.png");
}

button.img-btn:hover img {
  content: url("src/assets/robot-hover.png");
}
</style>
