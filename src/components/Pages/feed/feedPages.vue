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
                  <li v-bind:class="{btnOpacity:isActive}" class="feed__send-item">
                    <button class="button-icon active">
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
                  <li v-bind:class="{btnOpacity:isActive}" class="feed__send-item">
                    <input type="file" style="display: none" ref="fileInput" name="myFile" id="" accept="image/*" @change="onFilePicked">
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
                          <filter id="filter0_d" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB">
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
                  <li v-bind:class="{btnOpacity:isActive}" class="feed__send-item">
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
                  <li v-bind:class="{btnOpacity:isActive}"  class="feed__send-item">
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
            <section  v-for="post in reversedPosts" :key="post.id" class="feed__posts">
              <article class="post">
                <div class="post__header">
                  <p class="post__people">
                    <router-link to="/feedPage" class="post__people__link">Ted Bell, </router-link>
                    <router-link to="/feedPage" class="post__people__link">Annette Nguyen</router-link>
                    and
                    <router-link to="/feedPage" class="post__people__link">Cody Hawkins</router-link>
                    liked this
                  </p>
                  <button class="button active">
                    <span class="button__social-icon-prepend"></span>
                    <span class="button__social-icon-body"><img src="../../../assets/3point.svg" alt="other"
                                                                class="social-icon"></span>
                    <span class="button__social-icon-append"></span>
                  </button>
                </div>
                <div class="post__body">
                  <figure class="post__author-image">
                    <img src="../../../assets/postPhoto.png" alt="author-image" class="post__image">
                    <figcaption class="post__full-name-data">
                      <h2 class="post__title">Theresa Steward</h2>
                      <h3 class="post__sub-title">ThiOS developer</h3>
                    </figcaption>
                  </figure>
                  <template v-if="isShow">
                  <div  class="post__copy">
                    <p class="post__copy-text">
                      {{post.message}}
                    </p>
                    <br>
                    <transition name="fade">
                      <p class="post__copy-text">
                        {{post.message}}
                        <br>
                        {{post.message}}
                      </p>
                    </transition>
                  </div>
<!--do not show figure if the picture or file has not been uploaded-->
                    <template v-if="post.image">
                      <figure v-bind:class="{ post__content__preload: completed, post__content_image: completed  }">
                        <img :src="post.image" class="post__image">
                      </figure>
                    </template>
                    <template v-else>
                    </template>
                  </template>
                  <template v-else>
                  <div class="post__copy">
                    <p class="post__copy-text">
                      {{post.message}}
                    </p>
                  </div>
                    <!--do not show figure if the picture or file has not been uploaded-->
                   <template v-if="post.image">
                     <figure v-bind:class="{ post__content__preload: completed, post__content_image: completed  }">
                       <img :src="post.image" class="post__image">
                     </figure>
                   </template>
                    <template v-else>
                    </template>
                  </template>
                  <div class="post__more">
                    <button @click="getShow" class="button__more-link active">
                    <span class="button__body">
                      Read more
                    </span>
                    </button>
                  </div>
                </div>
                <div class="post__footer">
                  <ul class="post__social-list">
                    <li class="post__social-item">
                      <button class="button__social-icon">
                      <span class="button__social-icon-prepend"> <img src="../../../assets/like.svg" alt="like"
                                                                      class="social-icon active"></span>
                        <span class="button__social-icon-body">{{post.likes}}</span>
                        <span class="button__social-icon-append"></span>
                      </button>
                    </li>
                    <li class="post__social-item">
                      <button class="button__social-icon">
                      <span class="button__social-icon-prepend"> <img src="../../../assets/comment.svg" alt="comment"
                                                                      class="social-icon active"></span>
                        <span class="button__social-icon-body">{{post.comments}}</span>
                        <span class="button__social-icon-append"></span>
                      </button>
                    </li>
                  </ul>
                  <button class="button__social-icon mr">
                    <span class="button__social-icon-prepend"><img src="../../../assets/repost.svg" alt="repost"
                                                                   class="social-icon active"></span>
                    <span class="button__social-icon-body">SHARE</span>
                    <span class="button__social-icon-append"></span>
                  </button>
                </div>
              </article>
            </section>
            <section class="feed__posts">
              <article class="post">
                <div class="post__header">
                  <p class="post__people">
                    <router-link to="/feedPage" class="post__people__link">Ted Bell, </router-link>
                    <router-link to="/feedPage" class="post__people__link">Annette Nguyen</router-link>
                    and
                    <router-link to="/feedPage" class="post__people__link">Cody Hawkins</router-link>
                    liked this
                  </p>
                  <button class="button active">
                    <span class="button__social-icon-prepend"></span>
                    <span class="button__social-icon-body"><img src="../../../assets/3point.svg" alt="other"
                                                                class="social-icon"></span>
                    <span class="button__social-icon-append"></span>
                  </button>
                </div>
                <div class="post__body">
                  <figure class="post__author-image">
                    <img src="../../../assets/postPhoto.png" alt="author-image" class="post__image">
                    <figcaption class="post__full-name-data">
                      <h2 class="post__title">Theresa Steward</h2>
                      <h3 class="post__sub-title">ThiOS developer</h3>
                    </figcaption>
                  </figure>
                  <div v-if="isShow" class="post__copy">
                    <p class="post__copy-text">
                      What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t
                      practiced all <span v-bind:class="{opacity: isMore}">summer? What was it to the Dursleys if Harry went back to school without any of his
                      homework done? The </span><span v-bind:class="{opacity2: isMore}">Dursleys were what wizards called Muggles (not a drop of magical blood in their
                      veins).</span>
                    </p>
                    <br>
                    <transition name="fade">
                      <p class="post__copy-text">
                        What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t
                        practiced all <span v-bind:class="{opacity: isMore}">summer? What was it to the Dursleys if Harry went back to school without any of his
                      homework done? The </span><span v-bind:class="{opacity2: isMore}">Dursleys were what wizards called Muggles (not a drop of magical blood in their
                      veins).</span>
                      </p>
                    </transition>
                    <figure class="post__content-image"></figure>
                  </div>
                  <div v-else class="post__copy">
                    <p class="post__copy-text">
                      What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t
                      practiced all <span v-bind:class="{opacity: isMore}">summer? What was it to the Dursleys if Harry went back to school without any of his
                      homework done? The </span><span v-bind:class="{opacity2: isMore}">Dursleys were what wizards called Muggles (not a drop of magical blood in their
                      veins).</span>
                    </p>
                    <figure class="post__content-image"></figure>
                  </div>
                  <div class="post__more">
                    <button @click="getShow" class="button__more-link active">
                    <span class="button__body">
                      Read more
                    </span>
                    </button>
                  </div>
                </div>
                <div class="post__footer">
                  <ul class="post__social-list">
                    <li class="post__social-item">
                      <button class="button__social-icon">
                      <span class="button__social-icon-prepend"> <img src="../../../assets/like.svg" alt="like"
                                                                      class="social-icon active"></span>
                        <span class="button__social-icon-body">42</span>
                        <span class="button__social-icon-append"></span>
                      </button>
                    </li>
                    <li class="post__social-item">
                      <button class="button__social-icon">
                      <span class="button__social-icon-prepend"> <img src="../../../assets/comment.svg" alt="comment"
                                                                      class="social-icon active"></span>
                        <span class="button__social-icon-body">9</span>
                        <span class="button__social-icon-append"></span>
                      </button>
                    </li>
                  </ul>
                  <button class="button__social-icon mr">
                    <span class="button__social-icon-prepend"><img src="../../../assets/repost.svg" alt="repost"
                                                                   class="social-icon active"></span>
                    <span class="button__social-icon-body">SHARE</span>
                    <span class="button__social-icon-append"></span>
                  </button>
                </div>
              </article>
            </section>
          </div>
        </div>
        <!--    sidebar right  section    -->
        <section class="sidebar">
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'feedPages',
  data: () => {
    return {
      getMessage: '',
      isMore: true,
      isShow: false,
      focused: false,
      isActive: false,
      postId: Date.now(),
      posts: [],
      files: [],
      completed: true,
      fileName: ''
    }
  },
  methods: {
    getShow () {
      this.isShow = !this.isShow
      this.isMore = false
    },
    // add post in feed page
    addPost () {
      if (this.getMessage.trim().length === 0) {
        return this.getMessage
      } else {
        this.posts.push({
          id: this.postId,
          message: this.getMessage,
          image: this.imageUrl || '',
          likes: 1,
          comments: 1
        })
        this.postId++
        this.getMessage = ''
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'
        this.image = ''
        this.imageUrl = ''
        this.files = ''
      }
    },
    // focus input
    onFocus () {
      this.isActive = false
      this.focused = true
    },
    onBlur () {
      this.focused = false
      this.isActive = true
    },

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
      const input = this.$refs.fileInput
      input.type = 'text'
      input.type = 'file'
      this.image = ''
    },
    getOutFile () {
      this.files = ''
      this.files = []
      return this.files
    }
  },
  computed: {
    reversedPosts () {
      return this.posts.slice().reverse()
    }
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
  }
</style>
