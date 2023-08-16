<template>
  <div class="search-view">
    <h2>Search for a Dad Joke!</h2>
    <div class="search-box">
      <input v-model="searchTerm" placeholder="search for a joke..." />
      <button @click="searchJokes">Search</button>
    </div>
    <div v-if="jokes.length">
      <div v-for="joke in displayedJokes" :key="joke.id">
        <JokeCard :joke="joke" />
      </div>
      <div class="pagination-controls">
      <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">{{ previous }}</button>
      <span class="pagination-text">Page {{ currentPage }}/{{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">{{ next }}</button>
    </div>
    </div>
    <div v-else-if="searchAttempted">
      <p>No jokes found. Try searching again!</p>
    </div>
  </div>
</template>

<script>
import JokeCard from '@/components/JokeCard.vue';
import { searchDadJokes } from '@/services/api';

export default {
  name: "SearchView",
  components: {
    JokeCard
  },
  data() {
    return {
      searchTerm: '',
      jokes: [],
      searchAttempted: false,
      currentPage: 1,
      jokesPerPage: 5,
      previous: '<<<',
      next: '>>>'
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.jokes.length / this.jokesPerPage);
    },
    displayedJokes() {
      const start = (this.currentPage - 1) * this.jokesPerPage;
      const end = start + this.jokesPerPage;
      return this.jokes.slice(start, end);
    }
  },
  methods: {
    async searchJokes() {
      this.searchAttempted = true;
      if (this.searchTerm) {
        const response = await searchDadJokes(this.searchTerm);
        this.jokes = response.results;
        if (!this.jokes.length) {
          this.searchTerm = '';
        }
      } else {
        this.jokes = [];
      }
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.search-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

h2 {
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
}

.search-box {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
}

input {
  width: 200px;
  padding: 0.5rem;
  border: 1px solid #9b8a8a;
  border-radius: 6px;
  @media only screen and (max-width: 768px) {
    width: 160px;
  }
  @media only screen and (max-width: 480px) {
    width: 80vw;
  }
}

button {
  height: 40px;
  width: 120px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: white;
  border: 3px solid #ff3301;
  color: #ff3301;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    width: 100px;
    font-size: 16px;
  }
  @media only screen and (max-width: 480px) {
    width: 60vw;
  }
}

button:hover {
  background-color: #ff3301;
  color: white;
}

.pagination-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 2rem;
}

.pagination-text {
  width: 100px;
}

.pagination-button {
  margin-right: 10px;
}
</style>
