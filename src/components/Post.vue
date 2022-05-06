<template>
  <div>
    <div style="text-align: center; color: lime" v-if="isSuccess">
      Obrigado!
    </div>

    <form @submit.prevent="onCreatePost">
      <div class="star">
        <input
          class=""
          type="radio"
          name="star"
          v-model="star"
          value="1"
          id="star1"
        />
        <label class="form-check-label" for="">
          <img
            src="https://i.imgur.com/lO7Rc0I.png"
            style="position: relative; top: 5px"
          />
        </label>
      </div>

      <div class="star">
        <input
          class=""
          type="radio"
          name="star"
          v-model="star"
          value="2"
          id="star2"
        />
        <label class="form-check-label" for="">
          <img
            src="https://i.imgur.com/UbSBSwF.png"
            style="position: relative; top: 5px"
          />
        </label>
      </div>

      <div class="star">
        <input
          class=""
          type="radio"
          name="star"
          v-model="star"
          value="3"
          id="star3"
        />
        <label class="form-check-label" for="">
          <img
            src="https://i.imgur.com/7v2H9kB.png"
            style="position: relative; top: 5px"
          />
        </label>
      </div>

      <div class="star">
        <input
          class=""
          type="radio"
          name="star"
          v-model="star"
          value="4"
          id="star4"
        />
        <label class="form-check-label" for="">
          <img
            src="https://i.imgur.com/BKxYYky.png"
            style="position: relative; top: 5px"
          />
        </label>
      </div>

      <div class="star">
        <input
          class=""
          type="radio"
          name="star"
          v-model="star"
          value="5"
          id="star5"
        />
        <label class="form-check-label" for="">
          <img
            src="https://i.imgur.com/XeGBhLu.png"
            style="position: relative; top: 5px"
          />
        </label>
      </div>

      <div class="form" style="text-align: center">
        <input
          type="submit"
          value="AVALIAR"
          class="button"
          style="margin-top: 10px"
        />
        <p style="margin-top: 3px">
          <a href="#/avaliacoes" class="button">AVALIAÇÕES</a>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      star: "",
      isSuccess: false,
    };
  },
  methods: {
    onCreatePost() {
      axios
        .post(`posts.json`, {
          star: this.star,
        })
        .then((response) => {
          this.isSuccess = true;
          console.log(response);
          this.$emit("postcreated");
        });
    },
  },
};
</script>
