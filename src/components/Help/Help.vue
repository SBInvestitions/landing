<template>
  <div id="help" class="help">
    <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
      <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
        <div class="grid-content bg-purple">
          <el-card class="box-card block-card">
            <h1>Help</h1>
          </el-card>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import AccountMenu from './../AccountMenu/AccountMenu.vue';
  export default {
    name: 'Help',
    components: {
      'account-menu': AccountMenu
    }
  };
</script>
