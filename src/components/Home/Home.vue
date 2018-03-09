<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg menu-row" justify="center">
        <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">SBInvestitions</el-menu-item>
          <el-menu-item index="2">About Project</el-menu-item>
          <el-menu-item index="3">DAICO conditions</el-menu-item>
          <el-menu-item index="4">Roadmap</el-menu-item>
          <el-menu-item index="5">Team</el-menu-item>
          <el-menu-item index="6">Bounty</el-menu-item>
          <el-menu-item index="7">Clients</el-menu-item>
          <!--<el-menu-item index="8">FAQ</el-menu-item>-->
          <!-- WHAT IS DAICO https://cointelegraph.com/explained/what-is-a-daico-explained -->
          <el-submenu index="9" class="el-sub-menu-sbi">
            <template slot="title">Docs</template>
            <el-menu-item index="9-1">Whitepaper</el-menu-item>
            <el-menu-item index="9-2">Business Summary</el-menu-item>
          </el-submenu>
          <el-menu-item index="10">Sign-in</el-menu-item>
          <el-menu-item index="11">Sign-up</el-menu-item>
        </el-menu>
      </el-row>
      <top-header/>
    </el-header>
    <el-main>
      <five-stones/>
      <about-company />
      <conditions />
      <road-map />
      <team />
      <bounty />
      <clients />
    </el-main>
    <el-footer>
      <footer-block />
    </el-footer>
  </el-container>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
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
