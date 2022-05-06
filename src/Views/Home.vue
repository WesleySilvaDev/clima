<template>
  <div class="card">
    <div style="text-align: center">
      <img
        src="https://i.imgur.com/d6fjvvQ.png"
        style="width: 150px; margin-bottom: 5px"
      />
    </div>
    <div class="search">
      <input
        type="text"
        class="search-bar"
        placeholder="Pesquisar cidade"
        v-model="query"
        @keypress="fetchWeather"
      />
    </div>
    <div
      class="weather-wrap"
      :class="typeof weather.main != 'undefined' ? 'hide' : 'show'"
    >
      <p style="text-align: center; margin-top: 10px">
        {{ weather["message"] }}
      </p>
    </div>
    <div
      class="weather"
      v-if="typeof weather.main != 'undefined' ? 'show' : ''"
    >
      <div class="weather" style="margin-top: 10px">
        <h2 class="city">
          Tempo em {{ weather.name }}, {{ weather.sys.country }}
        </h2>
        <h6>{{ dateBuilder() }}</h6>
        <h1 class="temp">{{ Math.round(weather.main.temp) }}° C</h1>
        <div class="flex">
          <i class="fa-duotone fa-clouds"></i>
          <div class="description">{{ weather.weather[0].main }}</div>
        </div>
        <p style="margin-top: 10px">Avaliar o site:</p>
        <post @postcreated="onCreatePost"></post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "App",
  data() {
    return {
      api_key: "0e6cf964af17c83f6c97dfa9329a6e3c",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      showPosts: true,
    };
  },
  components: {
    Post,
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      let days = [
        "Domingo",
        "Segunda-Feira",
        "Terca-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: SF;
  src: url("../assets/SF.otf");
}
body {
  font-family: "SF", sans-serif;
}
h1 {
  color: #cfcfcf;
  padding: 10px;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>