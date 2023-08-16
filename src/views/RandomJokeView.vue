<template>
  <div class="random-joke-view">
    <h2>Here is your random joke...</h2>
    <div class="joke-container">
      <div v-if="joke">
        <JokeCard :joke="joke" />
      </div>
      <div v-else>
        <p>Loading joke...</p>
      </div>
    </div>
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import { getRandomJoke } from '@/services/api';

export default {
  name: "RandomJokeView",
  components: {
    JokeCard
  },
  data() {
    return {
      joke: null
    };
  },
  // created allows for async calls
  async created() {
    const jokeData = await getRandomJoke();
    if (jokeData) {
      this.joke = jokeData;
    }
  }
};
</script>

<style scoped>
.random-joke-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

h2 {
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
    text-align: center;
  }
}

.joke-container {
  margin-top: 2rem;
  @media only screen and (max-width: 480px) {
    margin-top: 1rem;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
