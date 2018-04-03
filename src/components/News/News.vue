<template>
  <div id="news" class="news">
    <el-container class="news-container">
      <div class="header-block">
        <account-menu />
      </div>
      <div class="main-block">
        <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
          <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">
                News
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  // import MainMenu from './../MainMenu/MainMenu.vue';
  import AccountMenu from './../Account/components/AccountMenu/AccountMenu.vue';
  export default {
    name: 'News',
    components: {
      'account-menu': AccountMenu
    }
  };
</script>