<template>
  <div class="card" @click="playCard">
    <img :src="'products/' + product.image" alt="cardImage" />
    <div class="content">
      <h2>{{ product.title }}</h2>
      <h4>{{ product.author }}</h4>
      <h4>&#8377;{{ product.price }}</h4>
      <button>Read More</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.card {
  position: relative;
  width: 600px;
  height: 350px;
  margin: 50px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(135deg, #d41e31, #491f8f);
}
.card img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 340px;
  transition: 0.5s;
}
.card:hover img {
  left: 75%;
  height: 400px;
}
.card .content {
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}
.card:hover .content {
  left: 0%;
  opacity: 1;
  visibility: visible;
}
.card .content h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 2.5em;
  line-height: 1em;
  font-family: monospace;
}
.card .content h4 {
  color: #fff;
}
.card .content button {
  position: relative;
  display: inline-block;
  color: #111;
  padding: 10px 20px;
  border-radius: 10px;
  background: #fff;
  margin-top: 10px;
  font-family: monospace;
  font-size: 1.5em;
}
@media (max-width: 600px) {
  .card {
    height: auto;
    flex-direction: column;
    margin: 20px;
  }
  .card img {
    position: relative;
    top: 1rem;
    left: 35%;
    transform: translateX(-50%);
    height: 340px;
    transition: 0.5s;
  }
  .card:hover img {
    left: 35%;
    height: 340px;
  }
  .card .content {
    position: relative;
    width: 80%;
    left: 0%;
    bottom: 0;
    transition: 0.5s;
    opacity: 1;
    visibility: visible;
  }
  .card:hover .content {
    left: 0%;
    opacity: 1;
    visibility: visible;
  }
}
</style>