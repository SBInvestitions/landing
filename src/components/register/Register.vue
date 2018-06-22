<template>
  <div id="register" class="register">
    <el-row type="flex" class="row-bg register-container" justify="center">
      <el-col :xs="24" :sm="20" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <router-link to="/">
              <i class="el-icon-sb-invest"></i>
              {{ $t("login.text.9") }}
            </router-link>
            <h3 class="header">{{ $t("register.text.1") }}</h3>
            <el-form v-loading="loading" label-width="170px" class="login" :rules="rules" :model="credentials" ref="credentials" :label-position="labelPosition">
              <el-form-item prop="email" v-bind:label="$t('register.text.2')">
                <el-input type="email" v-model="credentials.email"></el-input>
              </el-form-item>
              <el-form-item prop="pass" v-bind:label="$t('register.text.3')">
                <el-input type="password" v-model="credentials.pass"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass" v-bind:label="$t('register.text.4')">
                <el-input type="password" v-model="credentials.checkPass"></el-input>
              </el-form-item>
              <el-form-item prop="name" v-bind:label="$t('register.text.5')">
                <el-input type="text" v-model="credentials.name"></el-input>
              </el-form-item>
              <el-form-item prop="secondName" v-bind:label="$t('register.text.6')">
                <el-input type="text" v-model="credentials.secondName"></el-input>
              </el-form-item>
              <el-form-item v-bind:label="$t('register.text.12')">
                <el-checkbox name="type" v-model="credentials.userAgree">
                  <a @click="openDialog('userAgree')">{{ $t('register.text.13') }}</a>
                </el-checkbox>
              </el-form-item>

              <el-dialog v-bind:title="$t('register.text.13')" :visible.sync="dialogUserAgreeVisible">
                <div class="text-block">
                  <user-agreement />
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="closeDialog">Cancel</el-button>
                  <el-button type="primary" @click="confirmDialog">Confirm</el-button>
                </span>
              </el-dialog>

              <el-form-item>
                <el-checkbox name="type" v-model="credentials.personalData">
                  <a @click="openDialog('personalData')">{{ $t('register.text.14') }}</a>
                </el-checkbox>
              </el-form-item>

              <el-dialog v-bind:title="$t('register.text.14')" :visible.sync="dialogPersonalDataVisible">
                <div class="text-block">
                  <personal-data />
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="closeDialog">Cancel</el-button>
                  <el-button type="primary" @click="confirmDialog">Confirm</el-button>
                </span>
              </el-dialog>

              <el-form-item>
                <el-button :disabled="!credentials.userAgree || !credentials.personalData" class="button sbi-button" type="primary" @click="submit()">{{ $t("register.text.7") }}</el-button>
              </el-form-item>
              <el-form-item class="bottom-line">
                <el-button class="sbi-button-link" type="text" @click="onLogin">{{ $t("register.text.8") }}</el-button>
              </el-form-item>
            </el-form>
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
  import theme from '../../theme';
  import UserAgreement from './../UserAgreement/UserAgreement.vue';
  import PersonalData from './../PersonalData/PersonalData.vue';

  export default {
    name: 'Register',
    data () {
      const validatePass = (rule, value, callback) => {
        // console.log('t', this.$t('register.text.11'));
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
        dialogPersonalDataVisible: false,
        dialogUserAgreeVisible: false,
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
          secondName: '',
          userAgree: false,
          personalData: false
        },
        loggingIn: false,
        error: '',
        labelPosition: 'top'
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
      },
      openDialog (type) {
        this.type = type;
        if (type === 'userAgree') {
          this.dialogUserAgreeVisible = true;
        } else {
          this.dialogPersonalDataVisible = true;
        }
      },
      closeDialog () {
        if (this.type === 'personalData') {
          this.dialogPersonalDataVisible = false;
          this.credentials.personalData = false;
        } else {
          this.dialogUserAgreeVisible = false;
          this.credentials.userAgree = false;
        }
      },
      confirmDialog () {
        if (this.type === 'personalData') {
          this.dialogPersonalDataVisible = false;
          this.credentials.personalData = true;
        } else {
          this.dialogUserAgreeVisible = false;
          this.credentials.userAgree = true;
        }
      }
    },
    components: {
      'user-agreement': UserAgreement,
      'personal-data': PersonalData
    }
  };
</script>
