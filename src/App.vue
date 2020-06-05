<template>
  <div id="app">
    <header-nav
      v-for="n in counters"
      v-bind:key="n.id"
    />
    <transition
      name="fade"
      mode="out-in"
    >
    <router-view/>
    </transition>
    <section-footer />
  </div>
</template>

<script>
import HeaderNav from './components/headerNav'
import SectionFooter from './components/sectionFooter'
// import SectionMain from './components/sectionMain'

export default {
  name: 'app',
  data: function () {
    return {
      counters: [
        { id: 1, max: 69 }
      ]
    }
  },
  components: {
  //   SectionMain,
    SectionFooter,
    HeaderNav
  }
}
</script>

<style lang="scss">
  /*@import "styles/index";*/
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
