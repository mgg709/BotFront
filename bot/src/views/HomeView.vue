<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";

const balance = ref();

const getBalance = async () => {
  try {
    await axios.get("http://127.0.0.1:8000/botdca/balance").then((res) => {
      balance.value = res.data["free"];
    });
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getBalance();
});
</script>
<template>
  <div class="container-home">
    <div class="title-home">
      <span>NEXUS BOT</span>
    </div>
    <div class="content-home">
      <router-link to="/dashboard" class="router-link-active">
        <button class="img-btn-home">
          <img class="dashboard-home" />Panel de control
        </button>
      </router-link>
      <router-link to="/bot">
        <button class="img-btn-home"><img class="bot-home" />Bot</button>
      </router-link>
      <router-link to="/consejo">
        <button class="img-btn-home"><img class="advise-home" />Consejo</button>
      </router-link>
    </div>
  </div>
  <RouterView />
</template>

<style>
.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.title-home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.title-home span {
  color: white;
  font-size: 4em;
  font-weight: 800;
}

.content-home {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60%;
  justify-content: space-evenly;
}

.img-btn-home {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#3777e1, #003b9c);
  margin: 0;
  width: 130px;
  height: 130px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 5px black;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1.3em;
  font-weight: 800;
  transition: 0.5s, color 0.1s;
  -webkit-transition: 0.5s, color 0.1s;
  -moz-transition: 0.5s, color 0.1s;
}
.img-btn-home:hover {
  text-decoration: none;
  padding: 0;
  border-radius: 10px;
  background: linear-gradient(#ffffff, #a2a2a2);
  cursor: pointer;
  border: 0;
  box-shadow: 0px 0px 5px black;
  transform: translatey(-20px);
  -webkit-transform: translatey(-20px);
  -moz-transform: translatey(-20px);
}

.bot-home {
  content: url("/src/assets/robot.png");
  padding: 12px;
}

.img-btn-home:hover .bot-home {
  content: url("/src/assets/robot-hover.png");
  padding: 12px;
}

.advise-home {
  content: url("/src/assets/consejo.png");
  padding: 12px;
}

.img-btn-home:hover .advise-home {
  content: url("/src/assets/consejo-hover.png");
  padding: 12px;
}

.dashboard-home {
  content: url("/src/assets/dashboard.png");
  padding: 12px;
}

.img-btn-home:hover .dashboard-home {
  content: url("/src/assets/dashboard-hover.png");
  padding: 12px;
}
</style>
