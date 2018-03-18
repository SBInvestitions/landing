<template>
  <div id="login" class="register">
    <el-row type="flex" align="middle" class="login-container" justify="center">
      <el-col :span="8" class="login-form">
        <h3 class="header">Create account</h3>
        <el-form v-loading="loading" label-width="170px" class="login" :rules="rules" :model="credentials" ref="credentials">
          <el-form-item prop="email" label="Enter your email">
            <el-input type="text" v-model="credentials.email"></el-input>
          </el-form-item>
          <el-form-item prop="pass" label="Enter your password">
            <el-input type="password" v-model="credentials.pass"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass" label="Confirm">
            <el-input type="password" v-model="credentials.checkPass"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="Enter your name">
            <el-input type="text" v-model="credentials.name"></el-input>
          </el-form-item>
          <el-form-item prop="secondName" label="Enter your last name">
            <el-input type="text" v-model="credentials.secondName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" @click="submit()">Finish</el-button>
          </el-form-item>
          <el-form-item class="bottom-line">
            <el-button type="text" @click="onLogin">Sign in</el-button>
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
  import theme from '../../theme';

  export default {
    name: 'Register',
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.credentials.checkPass !== '') {
            this.$refs.credentials.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.credentials.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        rules: {
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: false, trigger: 'blur' }
          ],
          secondName: [
            { required: false, trigger: 'blur' }
          ],
          email: theme.rules.email
        },
        credentials: {
          email: '',
          pass: '',
          checkPass: '',
          name: '',
          secondName: ''
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
        this.$refs['credentials'].validate((valid) => {
          if (valid) {
            auth.register(this.credentials, 'account').then(() => {
              return true;
            });
          } else {
            return false;
          }
        });
      },
      onLogin () {
        this.$router.push({ path: 'login' });
      }
    }
  };
</script>
