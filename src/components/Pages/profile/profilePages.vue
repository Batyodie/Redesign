<template>
<!--Profile Page main section-->
    <section class="profile">
<!--  position container    -->
      <div class="container">
<!--        main profile flex container-->
        <div class="container-section-main">
<!-- header main section-->
      <div class="profile__header-main">
        <section class="profile__wallpaper">
          <div class="profile__wallpaper-edit">
            <img src="../../../assets/upload.svg" class="profile__wallpaper-icon" alt="icon-link">
            <div class="button-group">
            <button class="profile__wallpaper-button">
              <span class="profile__wallpaper-button-prepend">
                <img src="../../../assets/edit.svg" alt="icon" class="button-prepend__icon" style="width: 17px; height: 29px;">
              </span>
              <span class="profile__wallpaper-button-body">
                EDIT PROFILE
              </span>
            </button>
            <button class="profile__wallpaper-button-edit">
              <span class="profile__wallpaper-button-edit-body">
               <img src="../../../assets/blackPointPage.svg" alt="icon" class="edit-body-icon">
              </span>
            </button>
            </div>
          </div>
        </section>
        <section class="profile__info-wrapper">
          <div class="profile__avatar">
            <img src="../../../assets/EllipseProfile.png" alt="avatar" class="profile__avatar-image">
          </div>
          <div class="profile__info-wrapper-blocks">
          <div class="profile__info-wrapper-header-block">
            <span class="profile__title">
              <h2 class="profile__title-text">Dmitry Kargaev</h2>
              <img src="../../../assets/in.svg" alt="in" class="profile__title-icon">
            </span>
            <span class="profile__title-location">
              <img src="../../../assets/tel.svg" alt="location-icon" class="profile__title-location-icon">
              Saint Petersburg, Russian Federation
            </span>
          </div>
          <div class="profile__info-wrapper-body-block">
            <p class="profile__info__copy">
              Freelance UX/UI designer, 80+ projects in web design,
              mobile apps  (iOS & android) and creative projects.
              Open to offers.
            </p>
          </div>
          <div class="profile__info-wrapper-footer-block">
            <button class="button active">
               <span class="button__prepend"></span>
              <span class="button__body">Contact info</span>
              <span class="button__append"></span>
            </button>
            <button class="button active">
              <span class="button__prepend"></span>
              <span class="button__body">1,043 connections</span>
              <span class="button__append"></span>
            </button>
          </div>
        </div>

        </section>
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
      </div>
<!--    body main section      -->
          <div class="profile__body-main">
              <!-- animations routing components  -->
            <transition name="component-fade" mode="out-in">
            <!--  reactive transitions components display-->
           <component v-bind:is="currentTabComponent"> </component>
            </transition>
          </div>
        </div>
<!--    sidebar right  section    -->
        <section class="sidebar">
          <aside class="dashboard">
            <div class="dashboard__header">
              <h2 class="dashboard__title">your dashboard</h2>
              <router-link to="/" class="dashboard__link">GO TO STATS</router-link>
            </div>
            <div class="dashboard__body">
              <div class="dashboard__body-top">
             <!--   display counter and scroll statistics-->
                <span class="statics">{{ val }}</span>
                <span class="label">views today</span>
              </div>
              <div class="dashboard__body-mid">
                <span class="statics">15</span>
                <span class="label">posts views</span>
              </div>
              <div class="dashboard__body-bottom">
                <span class="statics">9</span>
                <span class="label">search appereances</span>
              </div>
            </div>
          </aside>
          <aside class="visitors">
            <div class="visitors__header">
              <h2 class="visitors__title">visitors</h2>
              <!--show block-->
              <p class="visitors__link" @click="showAll =! showAll">
                <router-link  to="/" class="visitors__link">view all</router-link>
              </p>
            </div>
            <div class="visitors__body">
                <!--  if show true view block  -->
              <ul class="visitors__list" v-if="showAll">
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                  <img src="../../../assets/image1.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                    <h2 class="visitors__item-title">Theresa Steward</h2>
                    <h3 class="visitors__item-sub-title">
                      iOS developer
                    </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                  <img src="../../../assets/image2.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                  <h2 class="visitors__item-title">Brandon Wilson</h2>
                  <h3 class="visitors__item-sub-title">
                    Senior UX designer
                  </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                  <img src="../../../assets/image3.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                  <h2 class="visitors__item-title">Kyle Fisher</h2>
                  <h3 class="visitors__item-sub-title">
                    Product designer at Com...
                  </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                  <img src="../../../assets/image4.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                  <h2 class="visitors__item-title">Audrey Alexander</h2>
                  <h3 class="visitors__item-sub-title">
                    Team lead at Google
                  </h3>
                  </div>
                </li>
                <transition name="fade">
                <li class="visitors__item">
                <div class="visitors__titles-container-image">
                  <img src="../../../assets/image4.png" alt="image" class="visitors_image">
                </div>
                <div class="visitors__titles-container">
                  <h2 class="visitors__item-title">Audrey Alexander</h2>
                  <h3 class="visitors__item-sub-title">
                    Team lead at Google
                  </h3>
                </div>
              </li>
                </transition>
              </ul>
              <ul class="visitors__list" v-else>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                    <img src="../../../assets/image1.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                    <h2 class="visitors__item-title">Theresa Steward</h2>
                    <h3 class="visitors__item-sub-title">
                      iOS developer
                    </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                    <img src="../../../assets/image2.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                    <h2 class="visitors__item-title">Brandon Wilson</h2>
                    <h3 class="visitors__item-sub-title">
                      Senior UX designer
                    </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                    <img src="../../../assets/image3.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                    <h2 class="visitors__item-title">Kyle Fisher</h2>
                    <h3 class="visitors__item-sub-title">
                      Product designer at Com...
                    </h3>
                  </div>
                </li>
                <li class="visitors__item">
                  <div class="visitors__titles-container-image">
                    <img src="../../../assets/image4.png" alt="image" class="visitors_image">
                  </div>
                  <div class="visitors__titles-container">
                    <h2 class="visitors__item-title">Audrey Alexander</h2>
                    <h3 class="visitors__item-sub-title">
                      Team lead at Google
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <aside class="recommendations">
            <div class="recommendations__header">
              <h2 class="recommendations__title">
                You may like these courses
              </h2>
            </div>
              <div class="recommendations__body">
                <!--  if show true view block  -->
                <ul class="recommendations__list" v-if="showRec">
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video2.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        UX Foundations:
                        Prototyping
                      </div>
                      <div class="recommendations__item-sub-title">
                        27,959 viewers
                      </div>
                    </div>
                  </li>
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video2.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        Designing with
                        Adobe XD and pro
                      </div>
                      <div class="recommendations__item-sub-title">
                        9,122 viewers
                      </div>
                    </div>
                  </li>
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video3.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        UX Foundations:
                        Styles and GUIs
                      </div>
                      <div class="recommendations__item-sub-title">
                        13,858 viewers
                      </div>
                    </div>
                  </li>
                  animation end view block
                  <transition name="fade">
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video3.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        UX Foundations:
                        Styles and GUIs
                      </div>
                      <div class="recommendations__item-sub-title">
                        13,858 viewers
                      </div>
                    </div>
                  </li>
                  </transition>
                </ul>
                <ul class="recommendations__list" v-else>
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video2.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        UX Foundations:
                        Prototyping
                      </div>
                      <div class="recommendations__item-sub-title">
                        27,959 viewers
                      </div>
                    </div>
                  </li>
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video2.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        Designing with
                        Adobe XD and pro
                      </div>
                      <div class="recommendations__item-sub-title">
                        9,122 viewers
                      </div>
                    </div>
                  </li>
                  <li class="recommendations__item">
                    <div class="recommendations__item-container-image">
                      <img src="../../../assets/video3.png" alt="video" class="recommendations_item-image-prev">
                    </div>
                    <div class="recommendations__item-container">
                      <div class="recommendations__item-title">
                        UX Foundations:
                        Styles and GUIs
                      </div>
                      <div class="recommendations__item-sub-title">
                        13,858 viewers
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            <!--  if show true view block  -->
              <div class="recommendations__footer" @click="showRec =! showRec">
                <router-link to="/" class="recommendations__link">See all recommendations</router-link>
              </div>
          </aside>
        </section>
      </div>
    </section>
</template>

<script>
import profile from './modules/childComponent/profile'
import interests from './modules/childComponent/interests'
import Articles from './modules/childComponent/Articles'
export default {
  name: 'profilePages',
  components: { profile, Articles, interests },
  data: function () {
    return {
      show: false,
      showExp: false,
      showMore: false,
      showNumber: false,
      showAll: false,
      showRec: false,
      currentTab: 'profile',
      tabs: ['profile', 'interests', 'Articles'],
      val: 0,
      max: 1000
    }
  },
  methods: {
    /* function counter and scroll statistics */
    onScroll (e) {
      if (this.$el.offsetTop + this.$el.offsetHeight < window.scrollY + window.innerHeight) {
        this.removeScrollHandler()
        const interval = setInterval(() => {
          if (++this.val === this.max) {
            clearInterval(interval)
          }
        }, 4000 / this.max)
      }
    },
    /* end function counter and scroll statistics */
    removeScrollHandler () {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  beforeDestroy () {
    this.removeScrollHandler()
  }

}

</script>

<style scoped>

</style>
