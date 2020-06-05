<template>
<!--  animation modal-->
  <transition name="component-fade" mode="out-in">
<!-- modal more menu  -->
    <div class="more-menu">
            <slot name="header">
              <header class="more-menu__header">
                <button class="button button__close modal-default-button" @click="$emit('close')">
      <span class="button__prepend">
        <img src="../../../../../assets/cross.svg" alt="cross" class="button__icon">
      </span>
                  <span class="button__body">CLOSE</span>
                  <span class="button__append"></span>
                </button>
                <div class="more-menu__header-title">
                  <h2 class="more-menu__title">
                    More from LinkedIn
                  </h2>
                </div>
                <button class="button button__help">
      <span class="button__prepend">
        <img src="../../../../../assets/help-circle.svg" alt="help" class="button__icon">
      </span>
                  <span class="button__body">HELP</span>
                  <span class="button__append"></span>
                </button>
              </header>
            </slot>
            <slot name="body">
              <div class="modal-body">
                <slot name="body">
                  <div class="more-menu__body">
                    <div class="more-menu__container">
                      <div class="access">
                        <header class="access__header">
                          <img src="../../../../../assets/book-open.svg" alt="book" class="access__header-icon">
                          <div class="access__header-title">
                            <h3 class="access__title">
                              Learning with LinkedIn
                            </h3>
                            <p class="access__copy">
                              Courses, lectures, workshops
                            </p>
                          </div>
                        </header>
                        <div class="access__body">
                          <ul class="access__list">
                            <div class="access__list-container">
                              <li class="access__item active"><img src="../../../../../assets/access1.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">Insights</router-link></li>
                              <li class="access__item active"><img src="../../../../../assets/access2.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">groups</router-link></li>
                              <li class="access__item active"><img src="../../../../../assets/access3.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">Salary</router-link></li>
                            </div>
                            <div class="access__list-container">
                              <li class="access__item active"><img src="../../../../../assets/access4.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">advertise</router-link></li>
                              <li class="access__item active"><img src="../../../../../assets/access5.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">proFinder</router-link></li>
                              <li class="access__item active"><img src="../../../../../assets/access6.svg" alt="icon" class="access__item-icon"><router-link to="/" class="access__link">slideshare</router-link></li>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div class="services">
                        <div class="services__header">
                          <div class="services__header__title">
                            <h2 class="services__title">
                              Business services
                            </h2>
                          </div>
                        </div>
                        <div class="services__body">
                          <ul class="services__list">
                            <li class="services__item active">
                              <h3 class="services__item-title">
                                Talent Solutions
                              </h3>
                              <p class="services__item-copy">
                                Find, attract and recruit talent
                              </p>
                            </li>
                            <li class="services__item active">
                              <h3 class="services__item-title">
                                Sales Solutions
                              </h3>
                              <p class="services__item-copy">
                                Unlock sales opportunities
                              </p>
                            </li>
                            <li class="services__item active">
                              <h3 class="services__item-title">
                                Post a job
                              </h3>
                              <p class="services__item-copy">
                                Get your job in front of quality candidates
                              </p>
                            </li>
                            <li class="services__item active">
                              <h3 class="services__item-title">
                                Marketing Solutions
                              </h3>
                              <p class="services__item-copy">
                                Acquire customers and grow your buisness
                              </p>
                            </li>
                            <li class="services__item active">
                              <h3 class="services__item-title">
                                Learning Solutions
                              </h3>
                              <p class="services__item-copy">
                                Develop talent across your organisation
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <footer class="more-menu-body__footer">
                        <div class="ext">
                          <button class="ext-button active">
                            <span class="ext-button__prepend">LinkedIn Premium</span>
                            <span class="ext-button__body">Special features only for premium users</span>
                            <span class="ext-button__append"></span>
                          </button>
                        </div>
                      </footer>
                    </div>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
  </transition>
</template>

<script>
export default {
  name: 'other',
  data: function () {
    return {
      isMove: false
    }
  }
}
</script>

<style scoped lang="scss">
  /* local style witch modal */

    $medium: "Gotham Pro Medium";
    $light: "Gotham Pro Light";
    $accent: rgba(0, 119, 181, 1);
    $text: #181818;
      /* main container*/
  .more-menu{
    z-index: 1000;
    transition: 2s;
    top: 0px;
    left: 950px;
    background: #FFFFFF;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    width: 32%;
    max-width: 460px;
    height: 100%;
    position: fixed;
    border: 0;
    overflow-x: hidden;
    top: 0;
    left: 0;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { width: 0; }
    &
    /*more menu position container*/
    &__container{
      min-width: 320px;
      width: calc(100% - 90px);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
    }
    &__title{
      font-size: 14px;
      line-height: 150%;
      font-family: $medium;
      color: #181818;
    }
    /*section header more menu*/
    &__header{
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 82px;
      &-title{
       display: flex;
        align-items: center;
        width: 50%;
        margin: 0px 20px;
      }
      /*buttons header more menu*/
      .button{
        border: 0;
        width: 90px;
        height: 80px;
        padding: 0;
        display: flex;
        background: #ffffff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:active{
          transform: translateY(4px);
        }
        &__body{
          margin-top: 10px;
          font-family: $medium;

        }
      }
      .button__help{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .button__body{
          margin-top: 10px;
          color: #0275B1;
          font-size: 12px;
          line-height: 11px;
          text-align: center;
          text-transform: uppercase;
        }
      }

    }
    &__body{
      min-width: 320px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .access{
        min-width: 320px;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
        &__title{
          color: #FFFFFF;
          font-size: 12px;
          line-height: 150%;
          font-family: $medium;
          margin-bottom: 3px;
        }
        &__copy{
          font-size: 10px;
          color: #FFFFFF;
          font-family: $light;
        }
        &__header{
          margin-bottom: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          background: #0275B1;
          border-radius: 4px;
          width: calc(100% - 60px);
          max-width: 310px;
          height: 54px;
          &-icon{
            margin-left: 20px;
          }
          &-title{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
          }
        }
        &__body{
          display: flex;
          flex-direction: column;
          width: calc(100% - 60px);
          max-width: 310px;
        }
        &__list{
          width: 100%;
          max-width: 310px;
          display: flex;
          justify-content: space-between;
          &-container{
            width: 42%;
            display: flex;
            flex-direction: column;
          }
        }
        &__item{
          width: 100%;
          max-width: 125px;
          margin: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 40px;
          :hover{
            color: $accent
          }
          &:first-child{
          }
          &-icon{
            margin-right: 13px;
          }
        }
        &__link{
          font-size: 12px;
          line-height: 11px;
          text-transform: uppercase;
          color: #181818;
          font-family: $medium;
          text-decoration: none;

        }
      }
      .services{
        min-width: 320px;
        margin-bottom: 39px;
        display: flex;
        flex-direction: column;
        width: calc(100% - 60px);
        max-width: 310px;
        &__header{
          margin-bottom: 15px;
          &-title{

          }
        }
        &__title{
          @extend .more-menu__title;

        }
        &__body{
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;

        }
        &__list{
          max-width: 310px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

        }
        &__item{
          max-width: 310px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 65px;
          &-title{
            margin-left: 20px;
            margin-bottom: 3px;
            @extend .access__link;
          }
          &-copy{
            @extend .access__copy;
            margin-left: 20px;
            color: $text;
            font-family: "Gotham Pro";;
          }
        }
      }
      .more-menu-body__footer{
        max-width: 370px;
        width: 100%;
        display: flex;
        height: 85px;
        justify-content: center;
        .ext{
          max-width: 310px;
          width: calc(100% - 60px);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          &-button{
            max-width: 310px;
            padding: 0;
            width: 100%;
            height: 65px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border: 0;
            background: linear-gradient(180deg, #D8C281 0%, #AC9B69 100%);
            border-radius: 4px;
            &__prepend{
              @extend .services__item-title;
              color: #ffffff;

            }
            &__body{
              @extend .services__item-copy;
              color: #FFFFFF;
              font-family: "Gotham Pro";
            }
          }
        }
      }
    }
  }
  /* media position modal */
  @media (max-width: 1300px) {
    .more-menu{
      left: 825px;
      min-width: 340px;
    }
    .more-menu .more-menu__header .button{
      width: 60px;
    }
    .more-menu__body .access .access__header{
      width: 266px;
    }
    .more-menu__body .access .access__body .access__list .access__list-container{
      width: 120px;
    }
    .more-menu__body .more-menu-body__footer .ext{
      width: 266px;
    }
    .more-menu__body .more-menu-body__footer .ext-button{
      width: 266px;
    }
  }
  @media (max-width: 1200px) {
    .more-menu {
      min-width: 340px;
    }
  }
  @media (max-width: 425px) {
    .more-menu{
      min-width: 415px;
      .access{
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 375px) {
    .more-menu{
      min-width: 380px;
    }
  }
  @media (max-width: 320px) {
    .more-menu{
      min-width: 320px;
      .access{
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 320px){
    more-menu__body .access{
      align-items: center;
    }
    .services{
      align-items: center;
    }
  }
  @media (max-width: 1440px){
    .more-menu{
      top: 0 !important;
      right: 0px !important;
      left: auto !important;
    }
  }

  /* animation style modal*/
  component-fade-enter-active, .component-fade-leave-active {
    transition: all 2s ease-in-out;
  }
  .component-fade-enter, .component-fade-leave-to{
    /* .component-fade-leave-active до версии 2.1.8 */
    opacity: 0;
    transform: translateX(200%);
  }
</style>
