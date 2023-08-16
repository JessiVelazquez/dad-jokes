<template>
  <div class="home-container">
    <h1>Welcome to The Dad Joke Depot!</h1>
    <p>Where the jokes are bad, and the Moms are mad.</p>
    <p>Sad Dad, Rad Dad, Bad Dad, Mad Dad. We got 'em all.</p>
    
    <div class="cta-container">
      <router-link to="/search" class="cta-button">Search Jokes</router-link>
      <router-link to="/random" class="cta-button">Surprise Me!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  padding: 1rem;
  text-align: center;
  color: #222222;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333333;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
}

.cta-container {
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 67%;
  }
}

.cta-button {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  color: #ff3301;
  background-color: white;
  border: 3px solid #ff3301;
}

.cta-button:hover {
  background-color: #ff3301;
  color: white;
}
</style>

