<template>
  <div class="joke-card" @click="viewDetails">
    <p>{{ joke.joke }}</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'JokeCard',
  props: {
    joke: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const viewDetails = () => {
      router.push({ name: 'details', params: { id: props.joke.id } });
    }

    return {
      viewDetails
    }
  }
};
</script>

<style scoped>
.joke-card {
  padding: 1rem;
  border: 3px solid rgb(49, 119, 91);
  color: black;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #e2e4ea 30%, #75869b 90%);
  transition: background-color 0.3s;
}

.joke-card:hover {
  color: white;
  background: linear-gradient(45deg, #75869b 30%, #303031 90%);
  border: 3px solid #0a7aff;
}
</style>
