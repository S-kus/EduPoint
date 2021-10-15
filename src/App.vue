<template>
  <div>
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Navbar from "./components/navbar.vue";
export default {
  components: { Navbar },
};
</script>
