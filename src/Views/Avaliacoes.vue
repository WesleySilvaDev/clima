<template>
  <div class="card">
    <div style="text-align: center">
      <img
        src="https://i.imgur.com/d6fjvvQ.png"
        style="width: 150px; margin-bottom: 5px"
      />
    </div>
    <a href="../">Voltar</a>

    <div class="weather" style="margin-top: 10px">
      <h3 class="city">Avaliações recebidas:</h3>
      <table class="table table-dark">
        <tbody>
          <tr v-for="post in postDetails" :key="post.star">
            <td>{{ post.star }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosinstance from "../services/axiosinstance";
export default {
  data() {
    return {
      postDetails: [],
    };
  },
  mounted() {
    this.getPostDetails();
  },
  methods: {
    getPostDetails() {
      axiosinstance.get(`posts.json`).then((response) => {
        console.log(response);
        this.formatPostDetails(response.data);
      });
    },
    formatPostDetails(posts) {
      for (let star in posts) {
        this.postDetails.push({
          ...posts[star],
          star:
            "Visitante: " + posts[star].star + " estrela(s)",
        });
      }
      console.log(this.postDetails);
    },
  },
};
</script>