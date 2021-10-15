<template>
  <div>
    <div class="navBase"></div>
    <nav class="navbar">
      <div class="brand-title">
        <router-link to="/" id="brandLink">EduPoint</router-link>
      </div>
      <a href="#" class="toggle-button" @click="displayLinks">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links" ref="navLinks">
        <ul>
          <li><router-link to="/">Products</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    displayLinks() {
      const navLinks = this.$refs.navLinks;
      navLinks.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.navBase {
  width: 100%;
  top: 0;
  position: relative;
  height: 50px;
}
.navbar {
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  font-family: Verdana, Tahoma, sans-serif;
}
#brandLink {
  text-decoration: none;
  color: white;
}
.brand-title {
  font-size: 1.5rem;
  margin: 0.5rem;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 1rem;
}

.navbar-links li:hover {
  background-color: #555;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }
}
</style>