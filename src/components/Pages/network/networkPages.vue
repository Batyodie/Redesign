<template>
     <section class="network">
       <div class="container">
         <div class="sidebar">
           <ul class="sidebar__list">
             <li class="sidebar__item">
               <div class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                   <div class="sidebar__logo">
                     <img src="../../../assets/link.svg" alt="icon" class="sidebar__icon">
                   </div>
                   <h2 class="sidebar__title">
                     Connections
                   </h2>
                 </router-link>
               </div>
               <div class="sidebar__statics">
                 <h2 class="sidebar__counter">
                   1,038
                 </h2>
               </div>
             </li>
             <li @click="isShow = !isShow" class="sidebar__item">
               <div  class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                 <div class="sidebar__logo">
                   <img src="../../../assets/disc.svg" alt="icon" class="sidebar__icon">
                 </div>
                   <h2 class="sidebar__title">
                     Invitations
                   </h2>
                 </router-link>
               </div>
                 <div class="sidebar__statics">
                   <h2 class="sidebar__counter sidebar__counter__color">
                     2
                   </h2>
                   <img src="../../../assets/rec.svg" alt="">
                 </div>
             </li>
             <li class="sidebar__item">
                 <div class="sidebar__container">
                   <router-link to="" class="sidebar__link">
                     <div class="sidebar__logo">
                       <img src="../../../assets/archive.svg" alt="icon" class="sidebar__icon">
                     </div>
                     <h2 class="sidebar__title">
                       TEAMMATES
                     </h2>
                   </router-link>
                 </div>
                 <div class="sidebar__statics  clearfix">
                   <h2 class="sidebar__counter">
                   </h2>
                 </div>
             </li>
             <li class="sidebar__item">
               <div class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                   <div class="sidebar__logo">
                     <img src="../../../assets/users.svg" alt="icon" class="sidebar__icon">
                   </div>
                   <h2 class="sidebar__title">
                    GROUPS
                   </h2>
                 </router-link>
               </div>
               <div class="sidebar__statics">
                 <h2 class="sidebar__counter">
                   6
                 </h2>
               </div>
             </li>
             <li class="sidebar__item">
               <div class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                   <div class="sidebar__logo">
                     <img src="../../../assets/layers.svg" alt="icon" class="sidebar__icon">
                   </div>
                   <h2 class="sidebar__title">
                     PAGES
                   </h2>
                 </router-link>
               </div>
               <div class="sidebar__statics">
                 <h2 class="sidebar__counter">
                   28
                 </h2>
               </div>
             </li>
             <li class="sidebar__item">
               <div class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                   <div class="sidebar__logo">
                     <img src="../../../assets/hash.svg" alt="icon" class="sidebar__icon">
                   </div>
                   <h2 class="sidebar__title">
                     HASHTAGS
                   </h2>
                 </router-link>
               </div>
               <div class="sidebar__statics">
                 <h2 class="sidebar__counter">
                   8
                 </h2>
               </div>
             </li>
           </ul>
         </div>
         <div class="container-section-main">
           <div class="network__header-main">
             <section class="profile__tabs">
               <!--          reactive transitions router blocks, swap contents-->
               <button class="button"
                       v-for="tab in tabs"
                       v-bind:key="tab"
                       v-bind:class="['tab-button',
                  { active: currentTab === tab }]"
                       v-on:click="currentTab = tab"
               >
                 <span class="button__prepend"></span>
                 <span class="button__body"> {{ tab }}</span>
                 <span class="button__append"></span>
               </button>
             </section>
             <div class="network__header-title">
               <h2 class="network__title">
                 YOU HAVE  <span class="network__title-accent">
                 2 NEW CONNECTIONS
               </span>
               </h2>
             </div>
            </div>
           <div class="network__body-main">
             <!-- animations routing components  -->
             <transition name="component-fade" mode="out-in">
               <!--  reactive transitions components display-->
               <component v-bind:is="currentTabComponent"> </component>
             </transition>
           </div>
         </div>
       </div>
     </section>
</template>

<script>
import comp1 from './modules/childComponent/comp1'
import comp2 from './modules/childComponent/comp2'
export default {
  name: 'networkPages',
  components: {
    comp1, comp2
  },
  data: function () {
    return {
      isShow: false,
      currentTab: 'comp1',
      tabs: ['comp1', 'comp2']
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped lang="scss">
  /* animation style modal*/
  component-fade-enter-active, .component-fade-leave-active {
    transition: all 2s ease-in-out;
  }
  .component-fade-enter, .component-fade-leave-to{
    /* .component-fade-leave-active до версии 2.1.8 */
    opacity: 0;
    transform: translateX(200%);
  }
</style>
