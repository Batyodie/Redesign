<template>
 <div>
   <!-- body main section-->

   <!-- body main about section-->
   <section class="profile__about">
     <h2 class="profile__about-title">
       About
     </h2>

     <div v-if="showMore" class="profile__about-copy">
       <p class="profile__about-copy__style">
         I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.
       </p><br>
       <transition name="fade">
       <p class="profile__about-copy__style">
         I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites.
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
       Projects<span class="profile__projects-title profile__projects-title-style">
              3 of 12
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
   <!-- body main characteristics section-->
   <section class="profile__characteristics">
     <h2 class="profile__characteristics-title">
       Skills & Endoresments
     </h2>
     <div v-if="showExp" class="profile__characteristics-items">
       <transition name="fade">
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             User experience (UX)
           </h3>
           <span class="item__title item__title-statics">
                    6
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/count.png" alt="user-image" class="users-image"></li>
             </ul>
           </div>
         </div>
       </div>
       </transition>
       <transition name="fade">
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             User experience (UX)
           </h3>
           <span class="item__title item__title-statics">
                    6
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/count.png" alt="user-image" class="users-image"></li>
             </ul>
           </div>
         </div>
       </div>
       </transition>
       <transition name="fade">
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             User interface (UI)
           </h3>
           <span class="item__title item__title-statics">
                    7
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/count2.png" alt="user-image" class="users-image"></li>
             </ul>
           </div>
         </div>
       </div>
       </transition>
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             Brand identity
           </h3>
           <span class="item__title item__title-statics">
                    5
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <!--                      <li class="users__item"><img src="../../assets/photo3.png" alt="user-image" class="users-image"></li>-->
             </ul>
           </div>
         </div>
       </div>
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             Brand identity
           </h3>
           <span class="item__title item__title-statics">
                    5
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <!--                      <li class="users__item"><img src="../../assets/photo3.png" alt="user-image" class="users-image"></li>-->
             </ul>
           </div>
         </div>
       </div>
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             Brand identity
           </h3>
           <span class="item__title item__title-statics">
                    5
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <!--                      <li class="users__item"><img src="../../assets/photo3.png" alt="user-image" class="users-image"></li>-->
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div v-else class="profile__characteristics-items">
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             User experience (UX)
           </h3>
           <span class="item__title item__title-statics">
                    6
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/count.png" alt="user-image" class="users-image"></li>
             </ul>
           </div>
         </div>
       </div>
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             User interface (UI)
           </h3>
           <span class="item__title item__title-statics">
                    7
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/count2.png" alt="user-image" class="users-image"></li>
             </ul>
           </div>
         </div>
       </div>
       <div class="item">
         <div class="item__header">
           <h3 class="item__title">
             Brand identity
           </h3>
           <span class="item__title item__title-statics">
                    5
                  </span>
         </div>
         <div class="item__body">
           <div class="users">
             <ul class="users__list">
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo3.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo.png" alt="user-image" class="users-image"></li>
               <li class="users__item"><img src="../../../../../assets/photo2.png" alt="user-image" class="users-image"></li>
               <!--                      <li class="users__item"><img src="../../assets/photo3.png" alt="user-image" class="users-image"></li>-->
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div @click="showExp =! showExp"  class="profile__characteristics-footer">
       <router-link to="/" class="profile__characteristics__link">
         Show ALL (17)
       </router-link>
     </div>
   </section>
   <!-- body main experience section-->
   <section class="profile__experience">
     <h2 class="profile__experience-title">
       Experience
     </h2>
     <div class="profile__experience-items">
       <div class="item">
         <figure class="item__figure">
           <img src="../../../../../assets/Group.svg" alt="logo" class="item__figure-image">
         </figure>
         <div class="item__body">
           <h2 class="item__title">
             Freelance UX/UI designer
           </h2>
           <div class="item__sub-title-container">
             <h3 class="item__sub-title">
               Self Employed
             </h3>
             <h3 class="item__sub-title-location">
               Around the world
             </h3>
           </div>
           <div class="item__data">
                  <span class="item__data-style">
                    Jun 2016 — Present
                  </span>
             <span class="item__data-router">
                   <router-link to="/" class="item__data-link"> 3 yrs 3 mos</router-link>
                  </span>
           </div>
           <p class="item__copy">
             Work with clients and web studios as freelancer.
             Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
           </p>
         </div>
       </div>
       <div class="item">
         <figure class="item__figure">
           <img src="../../../../../assets/Group2.svg" alt="logo" class="item__figure-image">
         </figure>
         <div class="item__body">
           <h2 class="item__title">
             UX/UI designer
           </h2>
           <div class="item__sub-title-container">
             <h3 class="item__sub-title">
               Upwork
             </h3>
             <h3 class="item__sub-title-location">
               International
             </h3>
           </div>
           <div class="item__data">
                  <span class="item__data-style">
                    Jun 2019 — Present
                  </span>
             <span class="item__data-router">
                   <router-link to="/" class="item__data-link">3 mos</router-link>
                  </span>
           </div>
           <p class="item__copy">
             New experience with Upwork system.
             Work in next areas: UX/UI design,
             graphic design, interaction design, UX research.
           </p>
         </div>
       </div>
     </div>
   </section>
   <!-- body main education section-->
   <section class="profile__education profile__experience">
     <h2 class="profile__education-title profile__experience-title">
       Education
     </h2>
     <div class="profile__education-items profile__experience-items">
       <div class="item">
         <figure class="item__figure">
           <img src="../../../../../assets/Group3.svg" alt="logo" class="item__figure-image">
         </figure>
         <div class="item__body">
           <h2 class="item__title">
             Moscow State Linguistic University
           </h2>
           <div class="item__sub-title-container item__sub-title-container__education">
             <h3 class="item__sub-title item__sub-title-education">
               Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance
             </h3>
           </div>
           <div class="item__data">
                  <span class="item__data-style">
                    2013 — 2017
                  </span>
             <span class="item__data-router">
                   <router-link to="/" class="item__data-link"> 3 yrs 3 mos</router-link>
                  </span>
           </div>
           <p class="item__copy">
             Additional English classes and UX profile courses.
           </p>
         </div>
       </div>
     </div>
   </section>
 </div>
</template>

<script>
export default {
  name: 'profile',
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
