<template>
  <el-container>
    <div class="header-block">
      <main-menu />
      <top-header/>
    </div>
    <div class="main-block">
      <five-stones/>
      <about-company />
      <conditions />
      <road-map />
      <team />
      <bounty />
      <clients />
    </div>
    <el-footer>
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
  import Team from './../Team/Team.vue';
  import Bounty from './../Bounty/Bounty.vue';
  import Faq from './../Faq/Faq.vue';
  import Clients from './../Clients/Clients.vue';
  import FooterBlock from './../FooterBlock/FooterBlock.vue';

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data () {
      return {

      };
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
      'footer-block': FooterBlock
    }
  };
</script>
