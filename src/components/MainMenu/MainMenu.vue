<template>
  <div id="main-menu" class="main-menu">
    <el-row type="flex" class="row-bg menu-row" justify="center">

      <el-menu :default-active="activeIndex" class="el-menu-sbi hidden-md-and-down" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <a tabindex="1">
            <i class="el-icon-sb-invest hidden-lg-and-up"></i>
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.about") }}</span>
          </a>
        </el-menu-item>
<!--
        <el-menu-item index="2">
          <a tabindex="2">
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.daico") }}</span>
          </a>
        </el-menu-item>
-->
<!--
        <el-menu-item index="3">
          <a tabindex="3">
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.chronology") }}</span>
          </a>
        </el-menu-item>
-->
        <el-menu-item index="4">
          <a tabindex="4">
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.team") }}</span>
          </a>
        </el-menu-item>
<!--
        <el-menu-item index="5">
          <a tabindex="5">
            <span slot="title" class="hidden-md-and-down">{{ $t("home.menu.bonuses") }}</span>
          </a>
        </el-menu-item>
-->
<!--
        <el-menu-item index="6">
          <a tabindex="5">
            <span slot="title" class="hidden-md-and-down">
              <a href="/news">
                {{ $t("home.menu.news") }}
              </a>
            </span>
          </a>
        </el-menu-item>
-->
        <!--<el-menu-item v-on:click="changeLocation" index="6" class="lang">
          <span v-if="this.$i18n.locale === 'ru'" slot="title">En</span>
          <span v-if="this.$i18n.locale !== 'ru'" slot="title">Ru</span>
        </el-menu-item>-->
<!--
        <el-menu-item index="7" class="sign-in">
          <a href="/login" v-if="!user.id">
            <span slot="title">{{ $t("home.menu.logIn") }}</span>
          </a>
          <a href="/account" v-if="user.id">
            <span slot="title">{{ $t("home.menu.account") }}</span>
          </a>
        </el-menu-item>
-->
        <!--<el-menu-item index="8" class="white-paper">
          <a target="_blank" href="https://sbinvest.pro/documents/wp-ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <span slot="title">{{ $t("home.menu.proporsal") }}</span>
          </a>
          <a target="_blank"  href="https://sbinvest.pro/documents/wp-en.pdf" download v-if="this.$i18n.locale === 'en'">
            <span slot="title">{{ $t("home.menu.proporsal") }}</span>
          </a>
        </el-menu-item>-->
      </el-menu>

      <el-menu default-active="2" class="hidden-lg-and-up el-menu-vertical" @select="handleSelect" :collapse="isCollapse">
        <el-menu-item index="1">
          <a tabindex="1">
            <span slot="title" class="">{{ $t("home.menu.about") }}</span>
          </a>
        </el-menu-item>
<!--
        <el-menu-item index="2">
          <a tabindex="2">
            <span slot="title" class="">{{ $t("home.menu.daico") }}</span>
          </a>
        </el-menu-item>
-->
<!--
        <el-menu-item index="3">
          <a tabindex="3">
            <span slot="title" class="">{{ $t("home.menu.chronology") }}</span>
          </a>
        </el-menu-item>
-->
        <el-menu-item index="4">
          <a tabindex="4">
            <span slot="title" class="">{{ $t("home.menu.team") }}</span>
          </a>
        </el-menu-item>
<!--
        <el-menu-item index="5">
          <a tabindex="5">
            <span slot="title" class="">{{ $t("home.menu.bonuses") }}</span>
          </a>
        </el-menu-item>
-->
        <!--<el-menu-item index="7" class="white-paper">
          <a target="_blank" href="https://sbinvest.pro/documents/wp-ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <span slot="title">{{ $t("home.menu.proporsal") }}</span>
          </a>
          <a target="_blank"  href="https://sbinvest.pro/documents/wp-en.pdf" download v-if="this.$i18n.locale === 'en'">
            <span slot="title">{{ $t("home.menu.proporsal") }}</span>
          </a>
        </el-menu-item>-->
        <!--<el-menu-item v-on:click="changeLocation" role="button" index="6" class="lang">
          <span v-if="this.$i18n.locale === 'ru'" slot="title">En</span>
          <span v-if="this.$i18n.locale !== 'ru'" slot="title">Ru</span>
        </el-menu-item>-->
        <el-menu-item index="8" class="sign-in">
          <a href="/login" v-if="!user.id">
            <span slot="title">{{ $t("home.menu.logIn") }}</span>
          </a>
          <a href="/account" v-if="user.id">
            <span slot="title">{{ $t("home.menu.account") }}</span>
          </a>
        </el-menu-item>
      </el-menu>
      <div class="menu-icon hidden-lg-and-up" role="button" v-on:click="changeMenuView">
        <i class="el-icon-sb-invest"></i>
        <span>{{ $t("home.menu.menuIcon") }}</span>
      </div>

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
        isCollapse: true,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      ...mapActions({
        getUser: 'user/LOAD'
      }),
      changeMenuView (event) {
        this.isCollapse = !this.isCollapse;
      },
      scrollTo (position, element) {
        // console.log('position', position);
        element.scrollIntoView({ behavior: 'smooth' });
        window.scroll({ top: position, left: 0, behavior: 'smooth' });
      },
      changeLocation () {
        this.$i18n.locale = (this.$i18n.locale === 'ru') ? 'en' : 'ru';
      },
      handleSelect (key, keyPath) {
        // console.log(key, keyPath);
        let block = null;
        let offset = null;
        switch (key) {
          case '1':
            block = document.getElementById('who-we-are');
            offset = block.offsetTop;
            this.scrollTo(offset, block);
            break;
          case '2':
            block = document.getElementById('conditions');
            offset = block.offsetTop;
            this.scrollTo(offset, block);
            break;
          case '3':
            block = document.getElementById('road-map');
            offset = block.offsetTop;
            this.scrollTo(offset, block);
            break;
          case '4':
            block = document.getElementById('team');
            offset = block.offsetTop;
            this.scrollTo(offset, block);
            break;
          case '5':
            block = document.getElementById('bounty');
            offset = block.offsetTop;
            this.scrollTo(offset, block);
            break;
          default:
            break;
        }
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