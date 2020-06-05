<template>
   <!--adding sections-->
   <section class="adding">
     <!--adding list-->
    <ul class="adding__list">
      <!--adding items-->
      <li class="adding__item">
       <figure class="adding__data">
         <img src="../../../../../../../assets/Brandon.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
         <figcaption class="adding__full-name">
           <h2 class="adding__title">
             Brandon Wilson
           </h2>
           <h3 class="adding__sub-title">
             Senior UX designer
           </h3>
           <router-link to="" class="adding__link">
             623 connections
           </router-link>
         </figcaption>
       </figure>
       <!--after line-->
        <div class="adding__message">
          <!--after line-->
          <p class="adding__copy">
            Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?
          </p>
        </div>
        <div v-if="accepted" class="adding__buttons">
          <transition name="fade">
          <button class="button active">
            <span class="button__prepend"></span>
            <span class="button__body">ACCEPTED</span>
            <span class="button__append"></span>
          </button>
          </transition>
        </div>
        <div v-else-if="cancellation" class="adding__buttons">
            <button @click="cancellation = false" class="button active">
              <span class="button__prepend"></span>
              <span class="button__body">cancel</span>
              <span class="button__append"></span>
            </button>
        </div>
        <div @click="accepted = true" v-else class="adding__buttons">
          <button class="button active">
            <span class="button__prepend"></span>
            <span class="button__body">ACCEPT</span>
            <span class="button__append"></span>
          </button>
          <button @click="cancellation = true" class="button active">
            <span class="button__prepend"></span>
            <span class="button__body">DECLINE</span>
            <span class="button__append"></span>
          </button>
        </div>
      </li>
       <li class="adding__item">
      <figure class="adding__data">
        <img src="../../../../../../../assets/tereza.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
        <figcaption class="adding__full-name">
          <h2 class="adding__title">
            Theresa Steward
          </h2>
          <h3 class="adding__sub-title">
            iOS developer
          </h3>
          <router-link to="" class="adding__link">
            481 connections
          </router-link>
        </figcaption>
      </figure>
      <!--after line-->
      <div class="adding__message">
        <!--after line-->
        <p class="adding__copy">
        </p>
      </div>
      <div class="adding__buttons">
        <button class="button active">
          <span class="button__prepend"></span>
          <span class="button__body">ACCEPT</span>
          <span class="button__append"></span>
        </button>
        <button class="button active">
          <span class="button__prepend"></span>
          <span class="button__body">DECLINE</span>
          <span class="button__append"></span>
        </button>
      </div>
    </li>
    </ul>
     <!--section connections-->
     <div class="connections">
       <div class="connections__header-title">
         <h2 class="connections__title network__title ">
           recent connections
         </h2>
       </div>
       <div class="connections__container">
         <!--connections list-->
       <ul class="connections__list">
         <!--connections items-->
         <li class="connections__item">
           <figure class="adding__data">
             <img src="../../../../../../../assets/audrey.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
             <figcaption class="adding__full-name">
               <h2 class="adding__title">
                 Audrey Alexander
               </h2>
               <h3 class="adding__sub-title">
                 Team lead at Google
               </h3>
             </figcaption>
           </figure>
         </li>
         <li class="connections__item">
           <figure class="adding__data">
             <img src="../../../../../../../assets/darlene.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
             <figcaption class="adding__full-name">
               <h2 class="adding__title">
                 Darlene Black
               </h2>
               <h3 class="adding__sub-title">
                 HR-manager, 10 000 connections
               </h3>
             </figcaption>
           </figure>
         </li>
       </ul>
       </div>
       <div class="connections__container">
         <!--connections list 2-->
       <ul class="connections__list2">
         <!--connections items -->
         <li class="connections__item">
           <figure class="adding__data">
             <img src="../../../../../../../assets/kyle.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
             <figcaption class="adding__full-name">
               <h2 class="adding__title">
                 Kyle Fisher
               </h2>
               <h3 class="adding__sub-title">
                 Product designer at Commandor Corp
               </h3>
             </figcaption>
           </figure>
         </li>
         <li class="connections__item">
           <figure class="adding__data">
             <img src="../../../../../../../assets/eduardo.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
             <figcaption class="adding__full-name">
               <h2 class="adding__title">
                 Eduardo Russell
               </h2>
               <h3 class="adding__sub-title">
                 Full stack developer at Yandex
               </h3>
             </figcaption>
           </figure>
         </li>
       </ul>
     </div>
     </div>
   </section>
   <!-- body main project section-->

</template>

<script>
export default {
  name: 'RECEIVED',
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
      interests: false,
      accepted: false,
      cancellation: false

    }
  }
}
</script>

<style scoped lang="scss">

</style>
