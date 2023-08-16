<template>
  <div class="joke-details-view">
    <h2>Joke Details</h2>
    <div class="joke-content">
      <p v-if="joke" >{{ joke.joke }}</p>
    </div>
    <div class="button-container">
      <button @click="goBack">Back</button>
      <button @click="copyJoke">{{ copyButtonText }}</button>
    </div>
  </div>
</template>

<script>
import { getJokeById } from "@/services/api.js";

export default {
  name: "JokeDetailsView",
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      joke: null,
      copied: false
    };
  },
  computed: {
    copyButtonText() {
      return this.copied ? "Joke Copied!" : "Copy to Clipboard";
    }
  },
  methods: {
    async getJoke() {
      this.joke = await getJokeById(this.id);
    },
    goBack() {
      this.$router.go(-1);
    },
    copyJoke() {
      navigator.clipboard.writeText(this.joke.joke);
      this.copied = true;
    }
  },
  mounted() {
    this.getJoke();
    this.copied = false;
  }
};
</script>

<style scoped>
.joke-details-view {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

h2 {
  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
    text-align: center;
  }
}

.button-container {
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 360px) {
    flex-direction: column; /* Stack buttons vertically on very narrow screens */
    gap: 1rem;
  }
}

button {
  height: 40px;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 6px;
  border: 3px solid #ff3301;
  background-color: white;
  color: #ff3301;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e5280e;
  color: white;
}
</style>
