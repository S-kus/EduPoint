<template>
  <div>
    <hero />
    <products />
  </div>
</template>

<script>
import hero from "../components/hero.vue";
import Products from "../components/products.vue";
export default {
  components: { hero, Products },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
}
</style>
