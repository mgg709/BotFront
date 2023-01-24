<template>
  <div class="content">
    <span>
      <RouterLink to="/dashboard"
        ><button class="img-btn">Seguimiento</button></RouterLink
      >
      <button class="img-btn"><img class="bot" />Bot</button>
      <button class="img-btn">Consejo</button>
    </span>
  </div>

  <RouterView />
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button.img-btn {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#3777e1, #003b9c);
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 4em;
  border: none;
  box-shadow: 0px 0px 5px black;
  transition: 0.5s, color 0.1s;
  -webkit-transition: 0.5s, color 0.1s;
  -moz-transition: 0.5s, color 0.1s;
}
button.img-btn:hover {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#ffffff, #a2a2a2);
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin: 4em;
  border: none;
  box-shadow: 0px 0px 5px black;
  transform: scale3d(1.2, 1.2, 0.3);
  -webkit-transform: scale3d(1.2, 1.2, 0.3);
  -moz-transform: scale3d(1.2, 1.2, 0.3);
}

button.img-btn img.bot {
  content: url("src/assets/robot-only.png");
  padding: 8px;
}

button.img-btn:hover img.bot {
  content: url("src/assets/robot-only.png");
  padding: 8px;
}

button.img-btn img.consejo {
  content: url("src/assets/robot.png");
}

button.img-btn:hover img.consejo {
  content: url("src/assets/robot-hover.png");
}

button.img-btn img.seguimiento {
  content: url("src/assets/robot.png");
}

button.img-btn:hover img.seguimiento {
  content: url("src/assets/robot-hover.png");
}
</style>
