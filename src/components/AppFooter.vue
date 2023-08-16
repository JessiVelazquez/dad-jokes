<template>
  <footer class="footer-container">
    <div class="footer-content">
      © 2023 Dad Joke Depot Inc.
    </div>
    <div class="social-icons">
      <a href="https://twitter.com/dadgivesjokes?lang=en" target="_blank" class="icon" aria-label="Twitter" title="Follow us on Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/explore/tags/dadjokes/top/" target="_blank" class="icon" aria-label="Instagram" title="Follow us on Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-container {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #222222;
  color: #f1ede9;
  border-top: 1px solid darkgray;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
    text-align: center;
  }
}

.footer-content {
  font-size: 1rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
}

.social-icons {
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
}

.icon {
  color: #0a7aff;
  transition: color 0.3s;
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
}

.icon:hover {
  color: white;
}
</style>
