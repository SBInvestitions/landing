<template>
  <div id="confirm" class="confirm">
    <el-row type="flex" class="row-bg register-container" justify="center">
      <el-col :xs="24" :sm="20" :md="12" :lg="8" :xl="8">
        <el-card class="box-card">
          <el-row type="flex" class="row-bg register-container" justify="center">
            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
              <img src="./../../assets/logo-mini.png" alt="logo">
            </el-col>
            <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
              <h1>SBInvestitions</h1>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg confirm-container" justify="center">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-loading="loading">
              <h2>Подтверждение регистрации</h2>
              <p v-if="confirmation === 'success'">Регистрация успешно подтверждена. Теперь вы можете <a href="/login">войти</a></p>
              <p v-if="confirmation === 'error'">Проблемы с подтверждением регистрации</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Confirm',
    data () {
      return {

      };
    },
    computed: {
      ...mapGetters({
        loading: ['user/loading'],
        user: 'user/user',
        confirmation: 'user/confirmation'
      })
    },
    methods: {
      ...mapActions({
        confirmAccount: 'user/CONFIRM'
      })
    },
    created: function () {
      const url = new URL(window.location.href);
      const key = url.searchParams.get('key');
      this.confirmAccount(key);
    }
  };
</script>
