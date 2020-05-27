<template>
  <div>
    <section class="profile__about">
      <h2 class="profile__about-title">
        How to create a design
      </h2>
      <div v-if="showMore" class="profile__about-copy">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet, fugit maiores pariatur quaerat quas quidem sunt? Dicta facere hic perferendis provident velit voluptates! Atque libero mollitia obcaecati quo sint?
        </p><br>
        <transition name="fade">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus fuga fugit hic id inventore iure laboriosam modi mollitia odio omnis quidem ratione recusandae repellat repellendus repudiandae sapiente, ullam vitae?
        </p>
        </transition>
      </div>
      <div v-else class="profile__about-copy">
        <p class="profile__about-copy__style">
          I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.
        </p>
      </div>
      <div @click="showMore =! showMore" class="profile__about-item">
        <router-link to="/" class="profile__about-link">See more</router-link>
      </div>
    </section>
    <section class="profile__about">
      <h2 class="profile__about-title">
        Why it is important to have a clear interface
      </h2>
      <div v-if="showMore" class="profile__about-copy">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet, fugit maiores pariatur quaerat quas quidem sunt? Dicta facere hic perferendis provident velit voluptates! Atque libero mollitia obcaecati quo sint?
        </p><br>
        <transition name="fade">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus fuga fugit hic id inventore iure laboriosam modi mollitia odio omnis quidem ratione recusandae repellat repellendus repudiandae sapiente, ullam vitae?
        </p>
        </transition>
      </div>
      <div v-else class="profile__about-copy">
        <p class="profile__about-copy__style">
          I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.
        </p>
      </div>
      <div @click="showMore =! showMore" class="profile__about-item">
        <router-link to="/" class="profile__about-link">See more</router-link>
      </div>
    </section>
    <section class="profile__about">
      <h2 class="profile__about-title">
        Why it is important to have a clear interface
      </h2>
      <div v-if="showMore" class="profile__about-copy">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet, fugit maiores pariatur quaerat quas quidem sunt? Dicta facere hic perferendis provident velit voluptates! Atque libero mollitia obcaecati quo sint?
        </p><br>
        <transition name="fade">
        <p class="profile__about-copy__style">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus fuga fugit hic id inventore iure laboriosam modi mollitia odio omnis quidem ratione recusandae repellat repellendus repudiandae sapiente, ullam vitae?
        </p>
        </transition>
      </div>
      <div v-else class="profile__about-copy">
        <p class="profile__about-copy__style">
          I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.
        </p>
      </div>
      <div @click="showMore =! showMore" class="profile__about-item">
        <router-link to="/" class="profile__about-link">See more</router-link>
      </div>
    </section>
    <!-- body main project section-->
    <section class="profile__projects">
      <h2 class="profile__projects-title">
        My hobby<span class="profile__projects-title profile__projects-title-style">
              1 of 4
            </span>
      </h2>
      <div v-if="show" class="profile__projects-cards">
        <transition name="fade">
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/projectImage.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">
              i love traveling
            </h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        </transition>
        <transition name="fade">
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/projectImage2.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        </transition>
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/ext.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        <transition name="fade">
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/ext.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        </transition>
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/ext.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/ext.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
      </div>
      <div class="profile__projects-cards" v-else>
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/projectImage.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        <!--              -->
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/projectImage2.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card__header">
            <figure class="card__figure">
              <img src="../../../../../assets/ext.png" alt="cards-image" class="card__image">
            </figure>
          </div>
          <div class="card__body">
            <h3 class="card__title">Zara redesign concept</h3>
            <p class="card__sub-title">
              UX/UI design, 15.07.2019
            </p>
          </div>
        </article>

      </div>
      <div  @click="show  =! show" class="profile__projects-footer">
        <router-link to="/" class="card__link">Show all (6)</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data: function () {
    return {
      show: false,
      showExp: false,
      showMore: false,
      showNumber: false,
      showAll: false,
      showRec: false,
      Profile: false,
      Articles: false,
      interests: false

    }
  }
}
</script>

<style scoped>

</style>
