<template>
  <div>
    <section class="common-section" id="section-two">
      <!-- left side of section 2  -->
      <div class="left-side">
        <img src="../assets/img.png" alt="section2" />
      </div>

      <!-- right side of section 2  -->
      <div class="right-side">
        <h2>EduPoint</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          exercitationem quo earum molestiae alias itaque animi maiores!
          Deleniti voluptates magni, optio quasi explicabo, sequi saepe
          necessitatibus rem amet animi sapiente.
        </p>
      </div>
    </section>
    <section>
      <div class="iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x_me3xsvDgk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 1.8rem;
  line-height: 150%;
  font-style: normal;
  font-weight: normal;
}

.common-section {
  width: 100%;
  height: 60rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.common-section .left-side img {
  width: 45rem;
  height: 50rem;
  border-radius: 2rem;
  margin-top: 2rem;
}

.common-section .right-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.common-section .right-side h2 {
  width: 40rem;
  font-style: normal;
  font-size: 5.5rem;
  font-weight: bold;
  line-height: 6.3rem;
  margin-bottom: 3rem;
  text-transform: capitalize;
}

.common-section .right-side p {
  width: 40.3rem;
  height: 9rem;
  text-transform: lowercase;
  margin-bottom: 3rem;
}

@media (max-width: 1280px) {
  .common-section {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
  }

  .common-section .right-side {
    margin-top: 6rem;
    justify-content: start;
    height: auto;
  }

  .common-section .right-side h2 {
    font-size: 4.5rem;
    width: 35rem;
  }
}
@media (max-width: 770px) {
  .common-section {
    padding: 5rem 5rem;
  }
}

.iframe {
  align-items: center;
  margin: auto;
  width: 50%;
  padding: 12px 20px;
}
</style>
