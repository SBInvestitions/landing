<template>
  <div id="account" class="account">
    <el-container>
      <div class="header-block">
       <account-menu />
      </div>
      <div class="main-block">
        <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
          <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">
                <h1>{{ $t("account.text.1") }} Владимир Владимирович</h1>
                <el-tabs type="card" @tab-click="handleClick">

                  <!--Предварительная оценка-->
                  <el-tab-pane v-bind:label="$t('account.text.2')">

                    <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="ownForm" label-width="400px">
                      <el-form-item v-bind:label="$t('account.text.3')">
                        <el-input v-model="ownForm.address"></el-input>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">100500</el-tag>
                      </el-form-item>
                    </el-form>

                    <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="ownForm" label-width="400px">
                      <el-form-item v-bind:label="$t('account.text.4')">
                        <el-input v-model="ownForm.address"></el-input>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">100500</el-tag>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>

                  <!--Есть кошелек-->
                  <el-tab-pane v-bind:label="$t('account.text.5')">

                    <el-form ref="form" :inline="true" label-position="left" class="metaForm" :model="metaForm">
                      <el-form-item v-bind:label="$t('account.text.11')">
                        <el-input v-model="metaForm.address"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="onSubmit">Сохранить</el-button>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.10')">
                        <el-tag type="info">100500</el-tag>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>

                  <!--Метамаск-->
                  <el-tab-pane v-bind:label="$t('account.text.6')">

                    <el-form ref="form" label-position="left" class="metaForm" :model="metaForm" label-width="20%">
                      <el-form-item v-bind:label="$t('account.text.13')">
                        <el-input disabled v-model="metaForm.address"></el-input>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.10')">
                        <el-input disabled v-model="metaForm.address"></el-input>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>

                  <!--Иное-->
                  <el-tab-pane v-bind:label="$t('account.text.7')">

                    <el-form ref="form" class="feedBackForm" :model="feedBackForm">
                      <el-form-item v-bind:label="$t('account.text.8')">
                        <el-input type="textarea" v-model="feedBackForm.messageText"></el-input>
                      </el-form-item>
                      <el-button type="primary" @click="onSubmit">{{ $t("account.text.9") }}</el-button>

                    </el-form>
                  </el-tab-pane>

                </el-tabs>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-footer>
        footer
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import AccountMenu from './components/AccountMenu/AccountMenu.vue';
  export default {
    name: 'Account',
    props: {
      msg: String
    },
    data () {
      return {
        activeName: 'first',
        ownForm: {
          address: ''
        },
        metaForm: {
          address: ''
        },
        feedBackForm: {
          messageText: ''
        }
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick (tab, event) {
        console.log(tab, event);
      },
      onSubmit () {
        console.log('submit!');
      }
    },
    components: {
      'account-menu': AccountMenu
    }
  };
</script>
