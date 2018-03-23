<template>
  <div id="account-menu" class="account-menu">
    <el-row type="flex" class="row-bg menu-row" justify="center">
      <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <a href="/#/Account/my-investments">
            <i class="el-icon-goods"></i>
            <span slot="title" class="">{{ $t("account.menu.1") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#help">
            <i class="el-icon-service"></i>
            <span slot="title" class="">{{ $t("account.menu.2") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="#help">
            <i class="el-icon-tickets"></i>
            <span slot="title" class="">{{ $t("account.menu.3") }}</span>
          </a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="#logout">
            <i class="el-icon-close"></i>
            <span slot="title" class="">{{ $t("account.menu.4") }}</span>
          </a>
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