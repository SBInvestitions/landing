<template>
  <div id="account-menu" class="account-menu">
    <el-row type="flex" class="row-bg menu-row" justify="center">
      <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">
            <i class="el-icon-sb-invest"></i>
            {{ $t("account.menu.1") }}
          </router-link>
        </el-menu-item>
         <el-menu-item index="2">
          <router-link to="/news">
            {{ $t("account.menu.2") }}
          </router-link>
        </el-menu-item>
        <el-menu-item v-if="user.id" index="3">
          <router-link to="/account">
            {{ $t("account.menu.3") }}
          </router-link>
        </el-menu-item>
         <!-- <el-menu-item index="4">
          <router-link to="/account">
            {{ $t("account.menu.4") }}
          </router-link>
        </el-menu-item> -->
       <!-- <el-menu-item v-if="user.id" index="5">
          <a @click="logout()">
            <i class="el-icon-close"></i>
            {{ $t("account.menu.5") }}
          </a>
        </el-menu-item> -->
        <el-menu-item  v-if="!user.id" index="5">
          <router-link to="/login">
            {{ $t("account.menu.6") }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'AccountMenu',
    data () {
      return {
        activeIndex: null
      };
    },
    methods: {
      handleSelect (/* key, keyPath */) {},
      ...mapActions({
        logout: 'user/CLEAR_ALL_DATA'
      })
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    },
    created: function () {
      if (this.$route.name === 'news') {
        this.activeIndex = '2';
      }
    }
  };
</script>