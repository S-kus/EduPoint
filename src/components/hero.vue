<template>
  <div>
    <section id="hero">
      <div class="left-side">
        <img id="heroImg" src="../assets/img.png" alt="heroImage" />
      </div>
      <div class="right-side">
        <h2>EduPoint</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          exercitationem quo earum molestiae alias itaque animi maiores!
          Deleniti voluptates magni, optio quasi explicabo, sequi saepe
          necessitatibus rem amet animi sapiente.
        </p>
        <div class="video">
          <iframe
            class="iframe"
            src="https://www.youtube.com/embed/x_me3xsvDgk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#hero {
  display: flex;
  justify-content: space-evenly;
}
.left-side {
  max-width: 50%;
}
.right-side {
  max-width: 45%;
  padding: 0 1rem;
}
#heroImg {
  max-width: 100%;
}
.right-side p {
  font-size: 1.5rem;
  line-height: 150%;
  font-style: normal;
  font-weight: normal;
}
.right-side h2 {
  font-size: 3rem;
  font-family: monospace;
}
.video {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.iframe {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 600px;
  height: 350px;
}
@media (max-width: 800px) {
  #hero {
    flex-direction: column;
  }
  .left-side {
    max-width: 100%;
  }
  .right-side {
    max-width: 100%;
  }
}
</style>
