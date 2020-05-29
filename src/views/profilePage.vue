<template>
  <div class="profilePage">
    <profile-pages
      v-for="n in counters"
      v-bind:key="n.id"
    />
</div>
</template>

<script>

import ProfilePages from '../components/Pages/profile/profilePages'
export default {
  name: 'profilePage',
  components: {
    ProfilePages
  },
  data: function () {
    return {
      counters: [
        { id: 1, max: 69 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
