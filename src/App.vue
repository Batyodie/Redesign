<template>
  <div id="app">
    <div id="nav">
    <header-nav />
    </div>
    <profilePage />
    <section-footer />
  </div>
</template>

<script>
  import profilePage from './views/profilePage'
  import HeaderNav from './components/headerNav'
  import SectionFooter from './components/sectionFooter'

export default {
  name: 'app',
  components: {
    SectionFooter,
    HeaderNav,
    profilePage
  }
}
</script>

<style lang="scss">
  @import "styles/index";

</style>
