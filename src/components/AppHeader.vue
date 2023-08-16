<template>
  <header class="header-container">
    <router-link to="/" class="logo" exact>
      <i class="fab fa-superpowers logo-icon"></i>
      The Dad Joke Depot
    </router-link>
    <nav class="nav-links">
      <router-link to="/" class="nav-link" exact>Home</router-link>
      <router-link to="/search" class="nav-link">Search</router-link>
      <router-link to="/random" class="nav-link">Random Joke</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header-container {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #222222;
  color: white;
}

.logo {
  font-size: 1.5rem;
  color: #f1ede9;
  cursor: pointer;
}

.logo-icon {
  color: #0a7aff;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #f1ede9;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #333333;
}
.router-link-active {
  color: white;
  background-color: #333333;
}

@media only screen and (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 1rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .nav-link {
    padding: 0.5rem;
  }
}

@media only screen and (max-width: 480px) {
  .header-container {
    padding: 0.5rem;
  }

  .logo {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
