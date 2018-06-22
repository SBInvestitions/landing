<template>
  <div id="login" class="login">
    <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
      <el-col :xs="24" :sm="20" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <router-link to="/">
              <i class="el-icon-sb-invest"></i>
              {{ $t("login.text.9") }}
            </router-link>
            <h3 class="header">{{ $t("login.text.1") }}</h3>
            <el-form v-if="!forgotPassword" v-loading="loading" label-width="170px" class="login" @keyup.enter.native="submit" :label-position="labelPosition">
              <el-form-item v-bind:label="$t('login.text.2')">
                <el-input type="email" v-model="credentials.email"></el-input>
              </el-form-item>
              <el-form-item v-bind:label="$t('login.text.3')">
                <el-input type="password" v-model="credentials.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="button sbi-button" type="primary" @click="submit()">{{ $t("login.text.4") }}</el-button>
              </el-form-item>
              <el-form-item class="bottom-line">
                <el-button class="sbi-button-link" type="text" @click="onRegister">{{ $t("login.text.5") }}</el-button>
              </el-form-item>
              <!--
              <el-form-item class="bottom-line">
                <el-button class="sbi-button-link" type="text" @click="onForgotPassword">{{ $t("login.text.6") }}</el-button>
              </el-form-item>
              -->
            </el-form>

            <!--
            <el-form v-if="forgotPassword" v-loading="loading" label-width="170px" class="login" @keyup.enter.native="restore" :label-position="labelPosition">
              <el-form-item v-bind:label="$t('login.text.7')">
                <el-input type="text" v-model="emailRestore"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="button sbi-button" type="primary" @click="restore()">{{ $t("login.text.8") }}</el-button>
              </el-form-item>
            </el-form>
            -->
          </el-card>
        </div>
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
        forgotPassword: false,
        labelPosition: 'top',
        credentials: {
          email: '',
          password: ''
        },
        emailRestore: '',
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
      },

      onForgotPassword () {
        this.forgotPassword = true;
      },

      restore () {
        auth.restore(this.emailRestore, 'account').then(() => {
          this.loggingIn = false;
        });
      }
    }
  };
</script>
