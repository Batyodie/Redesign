<template>
  <section  class="feed__posts">
    <article class="post">
      <!--post header social link -->
      <div class="post__header">
        <p class="post__people">
          <router-link to="/feedPage" class="post__people__link">{{post.feedLink}} </router-link>
          <router-link to="/feedPage" class="post__people__link"></router-link>
          <router-link to="/feedPage" class="post__people__link"></router-link>
          {{post.feedSocial}}
        </p>
        <button class="button active">
          <span class="button__social-icon-prepend"></span>
          <span class="button__social-icon-body">
            <vue-dropdown :config="config">
        </vue-dropdown>
          </span>
          <span class="button__social-icon-append"></span>
        </button>
      </div>
      <!-- post content-->
      <div class="post__body">
        <figure class="post__author-image">
          <!--post face image-->
          <img :src="post.profileFace || 'https://cdn1.savepice.ru/uploads/2020/5/30/3a0b077358bb1d44874a37a6d471cc31-full.png'" alt="author-image" class="post__image">
          <figcaption class="post__full-name-data">
            <!--post full name-->
            <h2 class="post__title">{{post.Name}}</h2>
            <h3 class="post__sub-title">{{post.profession}}</h3>
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
          <!--check image-->
          <template v-if="post.url.includes('image') || post.url.includes('cdn1')">
            <figure v-bind:class="{ post__content__preload: completed, post__content_image: completed  }">
              <img :src="post.url" class="post__image">
            </figure>
          </template>
          <template v-else></template>
          <template  v-if="post.type && post.flag">
            <!--2 file in array basis post-->
            <template v-if="post.fileName2">
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName2}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size2}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
            </template>
            <template v-else>
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
            </template>
          </template>
          <template v-else></template>
        </template>
        <template v-else>
          <div class="post__copy">
            <p class="post__copy-text">
              {{post.message}}
            </p>
          </div>
          <!--do not show figure if the picture or file has not been uploaded-->
          <template v-if="post.url.includes('image') || post.url.includes('cdn1')">
            <figure v-bind:class="{ post__content__preload: completed, post__content_image: completed  }">
              <img :src="post.url" class="post__image">
            </figure>
          </template>
          <template v-else></template>
          <template  v-if="post.type && post.flag">
            <!--2 file in array basis post-->
            <template v-if="post.fileName2">
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName2}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size2}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
            </template>
            <template v-else>
              <article class="preview-file">
                <figure class="preview-file__logo">
                  <img src="../../../../../assets/preview.svg" alt="" class="preview-file__image preview-file__image__send-size">
                  <figcaption class="preview-file__name">
                    <h2 class="preview-file__title">
                      {{post.fileName}}
                    </h2>
                    <p class="preview-file__size">
                      {{post.type || 'any'}}, {{post.size}}kb
                    </p>
                  </figcaption>
                </figure>
                <div class="preview-file__data">
                  <button class="button button__download active">
                        <span class="button__download-body">
                        <img src="../../../../../assets/download.svg" alt="" class="button__download-image">
                        </span>
                  </button>
                </div>
              </article>
            </template>
          </template>
          <template v-else></template>
        </template>
        <div class="post__more">
          <button @click="getShow" class="button__more-link active">
            <span class="button__body">
            Read more
            </span>
          </button>
        </div>
      </div>
      <!-- post social like comment share-->
      <div class="post__footer">
        <ul class="post__social-list">
          <li class="post__social-item">
            <button class="button__social-icon">
               <span v-on:click="post.likes += 1" class="button__social-icon-prepend"> <img src="../../../../../assets/like.svg" alt="like"
                                                               class="social-icon active"></span>
              <span class="button__social-icon-body">{{post.likes}}</span>
              <span class="button__social-icon-append"></span>
            </button>
          </li>
          <li class="post__social-item">
            <button class="button__social-icon">
               <span class="button__social-icon-prepend"> <img src="../../../../../assets/comment.svg" alt="comment"
                                                               class="social-icon active"></span>
              <span class="button__social-icon-body">{{post.comments}}</span>
              <span class="button__social-icon-append"></span>
            </button>
          </li>
        </ul>
        <button class="button__social-icon mr">
         <span class="button__social-icon-prepend"><img src="../../../../../assets/repost.svg" alt="repost"
                                                        class="social-icon active"></span>
          <span class="button__social-icon-body">SHARE</span>
          <span class="button__social-icon-append"></span>
        </button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  name: 'post',
  data: function () {
    return {
      isMore: true,
      isShow: false,
      focused: false,
      isActive: false,
      isActivePub: false,
      completed: true,
      config: {
        options: [
          {
            value: 'opt1'
          },
          {
            value: 'opt2'
          },
          {
            value: 'opt3'
          }
        ],
        prefix: '',
        backgroundColor: '#ffffff'
      }
    }
  },
  methods: {
    getShow () {
      this.isShow = !this.isShow
      this.isMore = false
    }
  }
}
</script>

<style scoped>

</style>
