<template>
  <div>
    <hero />
  </div>
</template>

<script>
import hero from "../components/hero.vue";
export default {
  components: { hero },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
