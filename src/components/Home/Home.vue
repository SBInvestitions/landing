<template>
  <el-container class="home">
    <div class="header-block" id="header-block">
      <main-menu v-bind:class="{ 'show': show }" />
      <top-header />
    </div>
    <div class="main-block" v-show="show">
      <who-we-are />
      <about-company />
      <conditions />
      <road-map />
      <team />
      <!--<video-block />-->
      <prev-projects />
      <bounty />
      <clients />
    </div>
    <el-footer v-show="show">
      <footer-block />
    </el-footer>
  </el-container>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import MainMenu from './../MainMenu/MainMenu.vue';
  import TopHeader from './../TopHeader/TopHeader.vue';
  import FiveStones from './../FiveStones/FiveStones.vue';
  import AboutCompany from './../AboutCompany/AboutCompany.vue';
  import Conditions from './../Conditions/Conditions.vue';
  import RoadMap from './../RoadMap/RoadMap.vue';
  import PrevProjects from './../PrevProjects/PrevProjects.vue';
  import Team from './../Team/Team.vue';
  import Bounty from './../Bounty/Bounty.vue';
  import Faq from './../Faq/Faq.vue';
  import Clients from './../Clients/Clients.vue';
  import FooterBlock from './../FooterBlock/FooterBlock.vue';
  import VideoBlock from './../VideoBlock/VideoBlock.vue';
  import WhoWeAre from './../WhoWeAre/WhoWeAre.vue';

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data () {
      return {
        position: null,
        scrolled: false,
        show: false
      };
    },
    methods: {
      onScroll: function (e) {
        this.position = e;
        // set menu class
        // const headerBlock = document.getElementById('header-block');
        // const headerOffset = headerBlock.offsetHeight;
        const scrollTop = window.scrollY;
        this.scrolled = scrollTop > 40;
        // console.log('position', this.position, 'scrollTop', scrollTop, 'headerOffset', headerOffset);
      }
    },
    beforeDestroy: function () {
      // document.removeEventListener('scroll', this.onScroll, true);
    },
    components: {
      'main-menu': MainMenu,
      'top-header': TopHeader,
      'five-stones': FiveStones,
      'about-company': AboutCompany,
      'conditions': Conditions,
      'road-map': RoadMap,
      'team': Team,
      'bounty': Bounty,
      'clients': Clients,
      'faq': Faq,
      'footer-block': FooterBlock,
      'prev-projects': PrevProjects,
      'video-block': VideoBlock,
      'who-we-are': WhoWeAre
    },
    mounted () {
      setTimeout(() => {
        this.show = true;
      }, 3000);
      // document.addEventListener('scroll', this.onScroll, true);
    }
  };
</script>
