<template>
  <div id="account-menu" class="account-menu">
    <el-row type="flex" class="row-bg menu-row" justify="center">
      <el-menu class="el-menu-sbi" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">
            <i class="el-icon-sb-invest"></i>
            {{ $t("account.menu.1") }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/news">
            <i class="el-icon-tickets"></i>
            {{ $t("account.menu.2") }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/account">
            <i class="el-icon-goods"></i>
            {{ $t("account.menu.3") }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/account">
            <i class="el-icon-service"></i>
            {{ $t("account.menu.4") }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/logout">
            <i class="el-icon-close"></i>
            {{ $t("account.menu.5") }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'AccountMenu',
    methods: {
      data () {
        return {
          activeIndex: '1'
        };
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>