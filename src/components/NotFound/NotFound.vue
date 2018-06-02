<template>
  <div id="not-found" class="not-found">
    <el-container class="news-container">
      <el-header class="header-block">
        <account-menu />
      </el-header>
      <el-main class="main-block">
        <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
          <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">
                <div class="text-block center">
                  <h1>404 Page Not Found. Страница не найдена.</h1>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import AccountMenu from './../Account/components/AccountMenu/AccountMenu.vue';
  export default {
    name: 'NotFound',
    components: {
      'account-menu': AccountMenu
    }
  };
</script>