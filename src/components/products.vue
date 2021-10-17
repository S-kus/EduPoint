<template>
  <div>
    <div class="info">
      <h2 data-text="Products">Products</h2>
    </div>
    <div class="productList">
      <product-card
        v-for="product in products"
        :key="product"
        :product="product"
      ></product-card>
    </div>
  </div>
</template>

<script>
import productCard from "./productCard.vue";
export default {
  components: { productCard },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>

<style scoped>
.productList,
.info {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.info h2 {
  position: relative;
  font-family: verdana;
  font-size: 3rem;
  color: black;
  -webkit-text-stroke: 0.3vw #f80e58;
  text-transform: uppercase;
}
.info h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #ff5d8f;
  -webkit-text-stroke: 0vw #f80e58;
  /* border-right: 2px solid red; */
  overflow: hidden;
  animation: animate 6s linear infinite;
}
@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 100%;
  }
}
</style>