<template>
  <el-container>
    <div class="header-block">
      <el-row type="flex" class="row-bg menu-row" justify="center">

        <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
          <el-menu-item index="2">
            <i class="el-icon-sb-invest hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.about") }}</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-tickets hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.daico") }}</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-date hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.chronology") }}</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-service hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.team") }}</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-goods hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.bonuses") }}</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-news hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.clients") }}</span>
          </el-menu-item>
          <!--<el-menu-item index="8">FAQ</el-menu-item>-->
          <!-- WHAT IS DAICO https://cointelegraph.com/explained/what-is-a-daico-explained -->
          <el-menu-item index="9">
            <i class="el-icon-document hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.proporsal") }}</span>
          </el-menu-item>
          <el-menu-item index="10">
            <i class="el-icon-upload2 hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down"><a href="/#/login">{{ $t("home.menu.logIn") }}</a></span>
          </el-menu-item>
        </el-menu>

      </el-row>
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
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
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
