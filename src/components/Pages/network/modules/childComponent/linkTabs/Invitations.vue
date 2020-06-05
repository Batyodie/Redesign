<template>
  <!--main content section-->
  <div class="container-section-main">
    <!--header-->
    <div class="network__header-main">
      <section class="profile__tabs">
        <!--          reactive transitions router blocks, swap contents-->
        <button class="button"
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="['tab-button',
                  { active: currentTab === tab, button__active: currentTab === tab}]"
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
    <!--body-->
    <div class="network__body-main">
      <!-- animations routing components  -->
      <transition name="component-fade" mode="out-in">
        <!--  reactive transitions components display-->
        <component v-bind:is="currentTabComponent"> </component>
      </transition>
    </div>
  </div>
</template>

<script>
/* main section components */
import received from './content/received'
import Sent from './content/Sent'

export default {
  name: 'invitations',
  components: {
    received,
    Sent
  },
  data: function () {
    return {
      currentTab: 'received',
      tabs: ['received', 'Sent']
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>

</style>
