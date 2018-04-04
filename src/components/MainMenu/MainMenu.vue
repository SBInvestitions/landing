<template>
  <div id="main-menu" class="main-menu">
    <el-row type="flex" class="row-bg menu-row" justify="center">
      <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
        <el-menu-item index="2">
          <a href="/#about-company">
            <i class="el-icon-sb-invest hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.about") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="/#conditions">
            <i class="el-icon-tickets hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.daico") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="/#road-map" v-scroll="onScroll" >
            <i class="el-icon-date hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.chronology") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="/#team">
            <i class="el-icon-service hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.team") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href="/#bounty">
            <i class="el-icon-goods hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.bonuses") }}</span>
          </a>
        </el-menu-item>
        <!--<el-menu-item index="7">
          <a href="#clients">
            <i class="el-icon-news hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.clients") }}</span>
          </a>
        </el-menu-item>-->
        <el-menu-item index="8">
          <router-link to="/news">
            <i class="el-icon-news hidden-lg-and-up"></i>
            <span class="hidden-md-and-down">{{ $t("home.menu.news") }}</span>
          </router-link>
        </el-menu-item>
        <!-- this.$i18n.locale -->
        <!-- WHAT IS DAICO https://cointelegraph.com/explained/what-is-a-daico-explained -->
        <el-menu-item index="9">
          <a target="_blank" href="./../../assets/documents/wp-ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <i class="el-icon-document hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.proporsal") }}</span>
          </a>
          <a target="_blank" href="./../../assets/documents/wp-en.pdf" download v-if="this.$i18n.locale === 'en'">
            <i class="el-icon-document hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.proporsal") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="10">
          <a href="/login" v-if="!user.id">
            <i class="el-icon-upload2 hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.logIn") }}</span>
          </a>
          <a href="/account" v-if="user.id">
            <i class="el-icon-upload2 hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.account") }}</span>
          </a>
        </el-menu-item>
      </el-menu>

    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'MainMenu',
    data () {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1',
        position: {scrollTop: 0, scrollLeft: 0}
      };
    },
    methods: {
      ...mapActions({
        getUser: 'user/LOAD'
      }),
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      },
      onScroll: function (e, position) {
        console.log('position = ', position);
        this.position = position;
      }
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    },
    created: function () {
      this.getUser();
    }
  };
</script>