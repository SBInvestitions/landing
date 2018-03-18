<template>
  <div id="login">
    <el-row type="flex" align="middle" class="login-container" justify="center">
      <el-col :span="8" class="login-form">
        <h3 class="header">Sign in</h3>
        <el-form v-loading="loading" label-width="170px" class="login" @keyup.enter.native="submit">
          <el-form-item label="Login">
            <el-input type="text" v-model="credentials.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input type="password" v-model="credentials.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" @click="submit()">Enter</el-button>
          </el-form-item>
          <el-form-item class="bottom-line">
            <el-button type="text" @click="onRegister">Create account</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapGetters } from 'vuex';
  import auth from '../../api/auth';

  export default {
    name: 'Login',
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        },
        loggingIn: false,
        error: ''
      };
    },
    computed: {
      ...mapGetters({
        loading: ['user/loading']
      })
    },
    methods: {
      submit () {
        this.loggingIn = true;
        const credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        };
        // Auth.login() returns a promise. A redirect will happen on success.
        // For errors, use .then() to capture the response to output
        // error_description (if exists) as shown below:
        auth.login(credentials, 'account').then(() => {
          this.loggingIn = false;
        });
      },

      onRegister () {
        this.$router.push({ path: 'register' });
      }
    }
  };
</script>
