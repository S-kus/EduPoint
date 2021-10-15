<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import Home from "./views/Home.vue";
export default {
  components: { Home },
};
</script>
