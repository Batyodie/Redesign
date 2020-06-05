<template>
  <!--network container-->
     <section class="network">
       <!--position container-->
       <div  class="container">
         <!--aside menu-->
         <div class="sidebar">
           <ul class="sidebar__list">
             <!--v-for link sidebar menu items -->
             <li class="sidebar__item"
                 v-for="link in links"
                 v-bind:key="link.id"
                 v-bind:class="['tab-link',
               {active: currentLinkTab === link.name, isActiveLink: currentLinkTab === link.name }]"
                 v-on:click="currentLinkTab = link.name"
             >
               <div class="sidebar__container">
                 <router-link to="" class="sidebar__link">
                   <div class="sidebar__logo">
                     <img :src=getImgUrl(link.icon) alt="icon" class="sidebar__icon">
                   </div>
                   <h2 class="sidebar__title">
                     {{link.name}}
                   </h2>
                 </router-link>
               </div>
               <div class="sidebar__statics">
                 <h2 class="sidebar__counter ">
                   {{link.number}}
                 </h2>
                 <img :src="link.numberIcon">
               </div>
             </li>
           </ul>
         </div>
         <!-- section content-->
         <transition name="component-fade" mode="out-in">
         <component v-bind:is="currentLinkTab"></component>
         </transition>
       </div>
     </section>
</template>

<script>

/* link tab components */
import connections from './modules/childComponent/linkTabs/connections'
import invitations from './modules/childComponent/linkTabs/Invitations'
import teammates from './modules/childComponent/linkTabs/teammates'
import groups from './modules/childComponent/linkTabs/groups'
import pages from './modules/childComponent/linkTabs/pages'
import hashtags from './modules/childComponent/linkTabs/hashtags'
export default {
  name: 'networkPages',
  components: {
    connections,
    invitations,
    teammates,
    groups,
    pages,
    hashtags
  },
  data: function () {
    return {
      isShow: false,
      currentLinkTab: 'invitations',
      isID: Date.now(),
      links: [{
        id: 1,
        name: 'connections',
        icon: 'link.svg',
        number: '1,038'
      },
      {
        id: 2,
        name: 'invitations',
        icon: 'disc.svg',
        number: '2',
        numberIcon: 'https://svgshare.com/i/Lmm.svg'
      },
      {
        id: 3,
        name: 'teammates',
        icon: 'archive.svg',
        number: ''
      },
      {
        id: 4,
        name: 'pages',
        icon: 'users.svg',
        number: '6'
      },
      {
        id: 5,
        name: 'groups',
        icon: 'layers.svg',
        number: '28'
      },
      {
        id: 6,
        name: 'hashtags',
        icon: 'hash.svg',
        number: '8'
      }
      ],
      clicked: false
    }
  },
  // generate url for v-for
  methods: {
    getImgUrl (pic) {
      return require('../../../assets/' + pic)
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
  /*animation styles witch sidebar menu*/
  .sidebar__container{
    &::before{
      content: '';
      height: 50px;
      transition: 0.5s;
      width: 1px;
      background-color: rgba(0, 119, 181, 1);
      opacity: 0;
    }
    &:hover {
      transform: translateX(10px);
     .sidebar__link{
       opacity: 0.6;
     }
    }
    &:hover{
      &::before{
        margin-right: 28px;
        content: '';
        height: 50px;
        width: 10px;
        background-color: rgba(0, 119, 181, 1);
        opacity: 1 !important;
      }
    }
  }
  /* active link section */
  .isActiveLink{
    .sidebar__container{
      transform: translateX(10px);
      &::before{
        margin-right: 28px;
        content: '';
        height: 50px;
        width: 10px;
        background-color: rgba(0, 119, 181, 1);
        opacity: 1 !important;
      }
      .sidebar__link{
        opacity: 0.6;
      }
    }
  }
</style>
