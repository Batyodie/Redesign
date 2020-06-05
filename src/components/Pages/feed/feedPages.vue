<template>
  <div>
    <!--Feed Page main section-->
    <section class="feed">
      <!--  position container    -->
      <div class="container">
        <!--main feed flex container-->
        <div class="container-section-main">
          <!-- header main section-->
          <div  class="feed__header-main">
            <!--section send-->
            <section  class="feed__send">
              <template>
              <div  class="feed__send-header-title">
                <h2 class="feed__send-title">
                  new post
                </h2>
              </div>
              <div  class="feed__send-input-group">
                <input @keyup.enter="addPost" v-model="getMessage" @focus="onFocus" @blur="onBlur" type="text" class="feed__send-input" placeholder="What’s on your mind?">
                <ul class="feed__send-list-buttons">
                    <transition name="fade">
                  <li v-bind:class="{btnOpacity:!isActive}" class="feed__send-item">
                    <input type="file" style="display: none" ref="fileInput" name="myFile" accept="PDF/text/*" @change="onFilePicked">
                    <button  @click="onPickFile" class="button-icon active">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1">
                          <path
                            d="M21 11.4384L12.8446 19.4644C11.8455 20.4476 10.4904 21 9.07749 21C7.66455 21 6.30948 20.4476 5.31039 19.4644C4.31129 18.4811 3.75 17.1476 3.75 15.7571C3.75 14.3665 4.31129 13.033 5.31039 12.0497L13.4658 4.02375C14.1319 3.36825 15.0352 3 15.9772 3C16.9192 3 17.8225 3.36825 18.4886 4.02375C19.1547 4.67924 19.5289 5.56829 19.5289 6.4953C19.5289 7.42231 19.1547 8.31135 18.4886 8.96685L10.3243 16.9928C9.99129 17.3206 9.5396 17.5047 9.06862 17.5047C8.59764 17.5047 8.14595 17.3206 7.81291 16.9928C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2935 7.47988 14.849 7.81291 14.5213L15.3471 7.11537"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                      </svg>
                    </button>
                  </li>
                    </transition>
                  <transition name="fade">
                  <li v-bind:class="{btnOpacity:!isActive}" class="feed__send-item">
                    <input type="file" style="display: none" ref="fileInput" name="myFile" accept="image/*" @change="onFilePicked">
                    <button @click="onPickFile" class="button-icon active">
                      <svg class="button-icon-image" width="25" height="25" viewBox="0 0 28 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <g opacity="1" filter="url(#filter0_d)">
                          <path
                            d="M21 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path
                            d="M10.5 10C11.3284 10 12 9.32843 12 8.5C12 7.67157 11.3284 7 10.5 7C9.67157 7 9 7.67157 9 8.5C9 9.32843 9.67157 10 10.5 10Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M23 15L18 10L7 21" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </g>
                        <defs>
                          <filter id="filter0_d" x="-2" y="0" width="32" height="32">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                    </button>
                  </li>
                  </transition>
                  <transition name="fade">
                  <li v-bind:class="{btnOpacity:!isActive}" class="feed__send-item">
                    <button class="button-icon active">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.038 1H2.962C1.87842 1 1 1.87842 1 2.962V17.038C1 18.1216 1.87842 19 2.962 19H17.038C18.1216 19 19 18.1216 19 17.038V2.962C19 1.87842 18.1216 1 17.038 1Z"
                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.50049 1V19" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M14.5 1V19" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M1 10.0003H19" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M1 5.50041H5.5" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M1 14.5H5.5" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M14.5 14.5H19" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M14.5 5.50041H19" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </li>
                  </transition>
                  <transition name="fade">
                  <li v-bind:class="{btnOpacity:!isActivePub}"  class="feed__send-item">
                    <button
                      @click="addPost"
                      type="submit"
                      class="button-icon button-icon__width active">
                      <img src="../../../assets/send.svg" alt="" class="button-icon-image button-icon-image__last">
                    </button>
                  </li>
                    </transition>
                </ul>
              </div>
                <article v-for="file in files" :key="file.id" class="preview-file">
                  <figure class="preview-file__logo">
                    <img src="../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                    <figcaption class="preview-file__name">
                      <h2 class="preview-file__title">
                        <!--                      iOS 11 guidelines for UX/UI designers-->
                        {{file.fileName}}
                      </h2>
                    </figcaption>
                  </figure>
                  <div class="preview-file__data">
                    <p class="preview-file__size">
                      {{file.type}}, {{file.size}}kb
                    </p>
                    <button @click="getOutFile" class="button button__download active">
                    <span class="button__download-body">
                      &times;
<!--                      <img src="../../../assets/download.svg" alt="" class="button__download-image">-->
                    </span>
                    </button>
                  </div>
                </article>
              </template>
            </section>
            <!--section sort-->
            <section class="feed__sort">
              <div class="feed__sort-header-list">
                <div class="select-box2">
                  <div class="select-box2__current" tabindex="1">
                    <div class="select-box2__value"><input class="select-box2__input" type="radio" id="3" value="3"
                                                           name="Ben2" checked="checked"/>
                      <p class="select-box2__input-text">SORT BY: <span class="select-box2__link">TRENDING</span></p>
                    </div>
                    <div class="select-box2__value"><input class="select-box2__input" type="radio" id="4" value="4"
                                                           name="Ben2" checked="checked"/>
                      <p class="select-box2__input-text">Top likes</p>
                    </div>
                    <div class="select-box2__value"><input class="select-box2__input" type="radio" id="5" value="4"
                                                           name="Ben2" checked="checked"/>
                      <p class="select-box2__input-text">Top comments</p>
                    </div>
                    <img class="select-box2__icon" src="../../../assets/chevron-down.svg" alt="Arrow Icon"
                         aria-hidden="true"/></div>
                  <ul class="select-box2__list">
                    <li><label class="select-box2__option" for="3" aria-hidden="aria-hidden">SORT BY: TRENDING</label>
                    </li>
                    <li><label class="select-box2__option" for="4" aria-hidden="aria-hidden">Top likes</label></li>
                    <li><label class="select-box2__option" for="5" aria-hidden="aria-hidden">Top comments</label></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <!--    body main section      -->
          <div class="feed__body-main">
            <!--post component-->
            <transition-group name="component-fade" mode="out-in" tag="div">
                <post v-for="post in reversedPosts" :key="post.id"
                      :post="post"
                />
            </transition-group>

          </div>
        </div>
        <!--    sidebar right  section    -->
        <section class="sidebar">
          <aside class="dashboard">
            <div class="dashboard__header">
              <figure class="dashboard__header-background-logo">
                <img src="../../../assets/213.png" alt="" class="background-image">
              </figure>
              <figure class="dashboard__header-profile-face">
                <img src="../../../assets/Ellipse3.png" alt="" class="profile-face__image">
              <figcaption class="dashboard__header-profile-text">
              <div class="dashboard__header-title">
                <h1 class="dashboard__title">
                  Dmitry Kargaev
                </h1>
                <img src="../../../assets/LogoIn.svg" alt="" class="dashboard__header-title-icon">
              </div>
                <div class="dashboard__header-copy">
                  <p class="dashboard__copy"> Freelance UX/UI designer 80  web design, mobile apps (iOS & android) and creative projects. Open to offers. </p>
                </div>
              </figcaption>
              </figure>
              <div class="dashboard__header-button">
                <button class="button active">
                  <span class="button__body">
                    write new article
                  </span>
                </button>
              </div>
            </div>
              <aside class="groups">
                <div class="groups__header visitors__header">
                  <h2 class="groups__title visitors__title">MY GROUPS</h2>
                  <!--show block-->
                  <p class="groups__link visitors__link" @click="123">
                    <router-link  to="/" class="groups__link visitors__link">EDIT LIST</router-link>
                  </p>
                </div>
                <div class="visitors__body groups__body">
                  <ul class="visitors__list" v-if="completed != completed">
                    <li class="visitors__item">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/gerp.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container">
                        <h2 class="visitors__item-title">
                          Moscow State <br>
                          Linguistical <br>
                          University</h2>
                      </div>
                    </li>
                    <li class="visitors__item size-mr">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/gerp2.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container size">
                        <h2 class="visitors__item-title">Digital freelancers
                          group</h2>
                      </div>
                    </li>
                    <li class="visitors__item">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/g.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container">
                        <h2 class="visitors__item-title">
                          Interaction<br>
                          design <br>
                          association</h2>
                      </div>
                    </li>
                    <transition name="fade">
                      <li class="visitors__item">
                        <div class="visitors__titles-container-image">
                          <img src="../../../assets/g.png" alt="image" class="visitors_image">
                        </div>
                        <div class="visitors__titles-container">
                          <h2 class="visitors__item-title">
                            Interaction<br>
                            design <br>
                            association</h2>
                        </div>
                      </li>
                    </transition>
                  </ul>
                  <ul class="visitors__list" v-else>
                    <li class="visitors__item">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/gerp.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container">
                        <h2 class="visitors__item-title">
                          Moscow State <br>
                          Linguistical <br>
                          University</h2>
                      </div>
                    </li>
                    <li class="visitors__item size-mr">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/gerp2.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container size">
                        <h2 class="visitors__item-title">Digital freelancers
                          group</h2>
                      </div>
                    </li>
                    <li class="visitors__item">
                      <div class="visitors__titles-container-image">
                        <img src="../../../assets/g.png" alt="image" class="visitors_image">
                      </div>
                      <div class="visitors__titles-container">
                        <h2 class="visitors__item-title">
                          Interaction<br>
                          design <br>
                          association</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                  <div class="recommendations__footer groups__footer" style="margin-left: 30px;" @click="123">
                    <router-link to="/" class="recommendations__link">Show all (4)</router-link>
                  </div>
              </aside>
            <aside class="hashtags" style="margin-top: 20px;">
              <div class="hashtags__header recommendations__header">
                <h2 class="hashtags__title recommendations__title">
                  Followed hashtags
                </h2>
              </div>
              <div class="hashtags__body">
               <div class="hashtags__container">
                  <div class="hashtags__item"><span class="hashtags__item__style"> #work</span> </div>
                  <div class="hashtags__item"><span class="hashtags__item__style"> #business</span></div>
                  <div class="hashtags__item"><span class="hashtags__item__style"> #hr</span></div>
               </div>
                <div class="hashtags__container">
                  <div class="hashtags__item"><span class="hashtags__item__style"> #userinterface</span></div>
                  <div class="hashtags__item"><span class="hashtags__item__style"> #digital</span></div>
                </div>
                <div class="hashtags__container">
                  <div class="hashtags__item"><span class="hashtags__item__style"> #userexperience</span></div>
                  <div class="hashtags__item"><span class="hashtags__item__style"> #ux</span></div>
                </div>
                <div class="hashtags__container">
                  <div class="hashtags__item"><span class="hashtags__item__style">#freelance</span></div>
                  <div class="hashtags__item"><span class="hashtags__item__style"> #ui</span></div>
                </div>
              </div>
            </aside>
            <aside class="trending recommendations"  style="margin-top: 20px;">
              <div class="trending__header recommendations__header">
                <h2 class="trending__title recommendations__title">
                  Trending articles
                </h2>
              </div>
              <div class="trending__body recommendations__body">
                <!--  if show true view block  -->
                <ul class="trending__list recommendations__list" v-if="completed != completed">
                  <li class="trending__item recommendations__item">
                    <div class="trending__item-contaiener-image recommendations__item-container-image">
                      <img src="../../../assets/design.png" alt="video" class="trending_item-image-prev recommendations_item-image-prev">
                    </div>
                    <div class="trending__item-container recommendations__item-container">
                      <div class="trending recommendations__item-title">
                        <h2 class="trending__title" style="margin-bottom: 5px;">
                          How I make
                          <br>
                          cool designs?
                        </h2>
                      </div>
                      <div class="trending__item-sub-title recommendations__item-sub-title">
                        6,340 viewers
                      </div>
                    </div>
                  </li>
                  <li class="trending__item recommendations__item">
                    <div class="trending recommendations__item-container-image">
                      <img src="../../../assets/hr.png" alt="video" class="trending recommendations_item-image-prev">
                    </div>
                    <div class="trending recommendations__item-container">
                      <div class="trending recommendations__item-title">
                        <h2 class="trending__title" style="margin-bottom: 5px;">
                          How I make
                          <br>
                          cool designs?
                        </h2>
                      </div>
                      <div class="trending recommendations__item-sub-title">
                        6,340 viewers
                      </div>
                    </div>
                  </li>
                  <li class="trending__item recommendations__item">
                    <div class="trending recommendations__item-container-image">
                      <img src="../../../assets/testing.png" alt="video" class="trending recommendations_item-image-prev">
                    </div>
                    <div class="trending recommendations__item-container">
                      <div class="trending recommendations__item-title">
                        <h2 class="trending__title" style="margin-bottom: 5px;">
                          Advices for
                          <br>
                          young HR-manage
                        </h2>
                      </div>
                      <div class="trending recommendations__item-sub-title">
                        8,123 viewers
                      </div>
                    </div>
                  </li>
                <!--  animation end view block-->
                  <transition name="fade">
                    <li class="trending__item recommendations__item">
                      <div class="trending recommendations__item-container-image">
                        <img src="../../../assets/testing.png" alt="video" class="trending recommendations_item-image-prev">
                      </div>
                      <div class="trending recommendations__item-container">
                        <div class="trending recommendations__item-title">
                          <h2 class="trending__title" style="margin-bottom: 5px;">
                            A little about
                            <br>
                            usability testing
                          </h2>
                          <div class="trending__item-sub-title recommendations__item-sub-title">
                            3,912 viewers
                          </div>
                        </div>
                      </div>
                    </li>
                  </transition>
                </ul>
                <ul class="trending recommendations__list" v-else>
                  <li class="trending__item recommendations__item">
                    <div class="trending__item-container-image recommendations__item-container-image">
                      <img src="../../../assets/design.png" alt="video" class="trending_item-image-prev recommendations_item-image-prev">
                    </div>
                    <div class="trending__item-container recommendations__item-container">
                      <div class="trending recommendations__item-title">
                        <h2 class="trending__title" style="margin-bottom: 5px;">
                          How I make
                          <br>
                          cool designs?
                        </h2>
                      </div>
                      <div class="trending__item-sub-title recommendations__item-sub-title">
                        6,340 viewers
                      </div>
                    </div>
                  </li>
                  <li class="trending__item recommendations__item">
                    <div class="trending recommendations__item-container-image">
                      <img src="../../../assets/hr.png" alt="video" class="trending recommendations_item-image-prev">
                    </div>
                    <div class="trending recommendations__item-container">
                      <div class="trending recommendations__item-title">
                        <h2 class="trending__title" style="margin-bottom: 5px;">
                          Advices for
                          <br>
                          young HR-manage
                        </h2>
                      </div>
                      <div class="trending recommendations__item-sub-title">
                        8,123 viewers
                      </div>
                    </div>
                  </li>
                  <li class="trending__item recommendations__item">
                    <div class="trending recommendations__item-container-image">
                      <img src="../../../assets/testing.png" alt="video" class="trending recommendations_item-image-prev">
                    </div>
                    <div class="trending recommendations__item-container">
                      <div class="trending recommendations__item-title">
                      <h2 class="trending__title" style="margin-bottom: 5px;">
                        A little about
                        <br>
                        usability testing
                      </h2>
                      </div>
                      <div class="trending recommendations__item-sub-title">
                        3,912 viewers
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!--  if show true view block  -->
              <div class="trending recommendations__footer" @click="completed != completed">
                <router-link to="/" class="trending recommendations__link">See all trending recommendations</router-link>
              </div>
            </aside>
          </aside>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import Post from './modules/childComponent/post'
export default {
  components: { Post },
  props: {
    basisPosts: {
      type: Array
    }
  },
  name: 'feedPages',
  data: () => {
    return {
      getMessage: '',
      focused: false,
      isActive: false,
      isActivePub: false,
      // post obj
      postId: Date.now(),
      posts1: [],
      files: [],
      posts: {
        image: {
          fileName: '',
          size: '',
          type: ''
        }
      },
      files2: [],
      completed: true,
      fileName: '',
      image: {
      }
    }
  },
  methods: {
    // add post in feed page
    addPost () {
      if (this.getMessage.trim().length === 0) {
        return this.getMessage
      } else {
        if (this.files[this.image.name] === undefined) {
          this.files[this.image.name] = {
            0: {
              fileName: '',
              type: '',
              size: ''
            }
          }
        }
        // add new post in Array files
        this.files2.push({
          Name: 'Kyle Fisher',
          profession: 'Product designer at Commandor Corp.',
          profileFace: 'https://cdn1.savepice.ru/uploads/2020/5/30/3a0b077358bb1d44874a37a6d471cc31-full.png',
          id: this.postId,
          flag: true,
          postFlag: false,
          feedSocial: 'and liked this',
          feedLink: 'Ted Bell,Annette Nguyen, Cody Hawkins',
          message: this.getMessage,
          files: this.files[this.image.name] || '',
          fileName: this.files[this.image.name].fileName || null,
          type: this.files[this.image.name].type || null,
          size: this.files[this.image.name].size || null,
          url: this.imageUrl || '',
          likes: 0,
          comments: 0
        })
        this.postId++
        this.getMessage = ''
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'
        this.image = ''
        this.imageUrl = ''
        this.files = ''
        this.files = []
      }
    },
    // focus input
    onFocus () {
      this.isActive = true
      this.isActivePub = true
      this.focused = true
    },
    onBlur () {
      this.focused = false
      this.isActive = false
    },

    // pick file for add post
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Пожалуйста, добавьте правильный файл!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      this.files.push({
        id: this.image.lastModified,
        fileName: this.image.name || '',
        files: this.image || '',
        size: this.image.size || '',
        type: this.image.type || ''
      })
      this.files = this.files.reduce((p, c) => {
        p[c.fileName] = c
        return p
      }, {})
      const input = this.$refs.fileInput
      input.type = 'text'
      input.type = 'file'
    },
    getOutFile () {
      const input = this.$refs.fileInput
      input.type = 'text'
      input.type = 'file'
      // this.image = ''
      this.imageUrl = ''
      this.files = ''
      this.files = []
    }
  },
  /* turn array posts */
  computed: {
    reversedPosts () {
      return this.files2.slice().reverse()
    }
  },
  mounted () {
    // add basis posts
    this.posts1 = this.basisPosts.slice()
    this.posts1 = this.posts1.reduce((p, c) => {
      p[c.Name] = c
      return p
    }, {})
    this.files2.push(this.posts1['Audrey Alexander'], this.posts1['Brandon Wilson'], this.posts1['Kyle Fisher'], this.posts1['Theresa Steward'])
  }
}
</script>

<style scoped lang="scss">
  .opacity{
    opacity: 0.5;
  }
  .opacity2{
    opacity: 0.3;
  }
  .btnOpacity{
    opacity: 0.2;
    &:hover{
      opacity: 1;
    }
    &:focus{
      opacity: 1;
    }
    &:active{
      opacity: 1;
    }
  }
</style>
