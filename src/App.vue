<template>
  <div id="app">
    <div id="nav">
    <header-nav
      v-for="n in counters"
      v-bind:key="n.id"
    />
    </div>
    <router-view/>
    <div class="main">
      <sectionMain />
    </div>
    <section-footer />
  </div>
</template>

<script>
import HeaderNav from './components/headerNav'
import SectionFooter from './components/sectionFooter'
import SectionMain from './components/sectionMain'

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
    SectionMain,
    SectionFooter,
    HeaderNav
  }
}
</script>

<style lang="scss">
  @import "styles/index";

</style>
