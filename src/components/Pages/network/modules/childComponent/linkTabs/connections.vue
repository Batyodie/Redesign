<template>
    <div class="container-section-main">
      <!-- header section-->
      <div class="network__header-main">
        <div class="network__header-title">
          <h2 class="network__title">
            CONNECTIONS
          </h2>
        </div>
      </div>
      <!--body section-->
      <div class="network__body-main">
        <div class="connections">
          <div class="connections__header-title">
            <h2 class="connections__title network__title ">
              recent connections
            </h2>
          </div>
          <div class="connections__container">
            <ul class="connections__list">
              <li class="connections__item">
                <figure class="adding__data">
                  <img src="../../../../../../assets/audrey.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
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
                  <img src="../../../../../../assets/darlene.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
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
            <ul class="connections__list2">
              <li class="connections__item">
                <figure class="adding__data">
                  <img src="../../../../../../assets/kyle.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
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
                  <img src="../../../../../../assets/eduardo.png" alt="friend" class="adding__fio-image" style="border-radius: 26px;">
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
      </div>
    </div>
</template>

<script>

export default {
  name: 'connections'
}
</script>

<style scoped>

</style>
