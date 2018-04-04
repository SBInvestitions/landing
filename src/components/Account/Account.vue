<template>
  <div id="account" class="account">
    <el-container>
      <el-header class="header-block">
       <account-menu />
      </el-header>
      <el-main class="main-block">
        <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
          <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">
                <h1>{{ $t("account.text.1") }} {{user.firstName}} {{user.lastName}}</h1>
                <el-tabs type="card" @tab-click="handleClick">

                  <!--Предварительная оценка-->
                  <el-tab-pane class="tab-item" v-bind:label="$t('account.text.2')">

                    <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="rate" label-width="400px">
                      <el-form-item v-bind:label="$t('account.text.3')">
                        <el-input-number @input="onChange" :min="1" :max="22800000" tabIndex="1" v-model="rate.rub"></el-input-number>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">{{ rate.sbiRubCount }}</el-tag>
                      </el-form-item>
                    </el-form>

                    <!-- <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="ownForm" label-width="400px">
                      <el-form-item v-bind:label="$t('account.text.4')">
                        <el-input-number @input="calculateEth" :min="1" :max="22800000" tabIndex="2" v-model="rate.eth"></el-input-number>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">{{ sbiEthCount }}</el-tag>
                      </el-form-item>
                    </el-form> -->

                    <div class="text-block">
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="Для инвесторов, желающих вложить 2 000 000 рублей и более" name="1">
                          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </el-tab-pane>

                  <!--Есть кошелек-->
                  <el-tab-pane v-bind:label="$t('account.text.5')">

                    <el-form ref="form" :inline="true" label-position="left" class="metaForm" :model="wallet">
                      <el-form-item v-bind:label="$t('account.text.11')">
                        <el-input v-if="!wallet.address || walletEditing" v-model="wallet.address"></el-input>
                        <span v-if="wallet.address && !walletEditing" class="address">{{wallet.address}}</span>

                        <el-tooltip v-if="wallet.address && !walletEditing" content="Редактировать" placement="right" effect="light">
                          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="onEditWallet"></el-button>
                        </el-tooltip>

                        <el-tooltip v-if="wallet.address && !walletEditing" content="Удалить" placement="right" effect="light">
                          <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="onRemoveWallet"></el-button>
                        </el-tooltip>

                      </el-form-item>

                      <el-form-item v-if="!wallet.address || walletEditing">
                        <el-tooltip content="Сохранить" placement="right" effect="light">
                          <el-button :disabled="!(wallet.address)" type="success" icon="el-icon-check" circle @click="onSubmit"></el-button>
                        </el-tooltip>
                      </el-form-item>

                      <el-form-item v-if="wallet.address" v-bind:label="$t('account.text.10')">
                        <el-tag type="info">100500</el-tag>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>

                  <!--Метамаск-->
                  <el-tab-pane v-bind:label="$t('account.text.6')">
                    <el-row class="row-bg">
                      <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
                        <el-form ref="form" label-position="left" class="metaForm" :model="wallet" label-width="30%">
                          <el-form-item v-bind:label="$t('account.text.13')">
                            <el-input disabled v-model="wallet.address"></el-input>
                          </el-form-item>
                          <el-form-item v-bind:label="$t('account.text.10')">
                            <el-input disabled v-model="wallet.address"></el-input>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </el-tab-pane>

                  <!--Иное-->
                  <el-tab-pane v-bind:label="$t('account.text.7')">
                    <div class="text-block">
                      <strong>Номер карты сбербанка для перечислений</strong>
                      <el-button
                          class="copy-button"
                          type="success"
                          v-clipboard:copy="message"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError">
                        4276 2500 1083 2871
                      </el-button>
                      <p>Получатель <strong>Константин Евненьевич П.</strong></p>
                      <p>В комментарии укажите
                        <el-button
                            class="copy-button"
                            type="success"
                            v-clipboard:copy="message"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError">
                          {{ user.id }}
                        </el-button>
                      </p>
                      <p>Я свяжусь с Вами, создам вам кошелек и перечислю на него SBI.</p>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>
<script>
  import { mapActions, mapGetters } from 'vuex';
  import { getBalance } from './../../samples/getWeb3';
  import AccountMenu from './components/AccountMenu/AccountMenu.vue';

  export default {
    name: 'Account',
    props: {
      msg: String
    },
    data () {
      return {
        activeNames: ['1'],
        message: '4276250010832871',
        activeName: 'first',
        walletEditing: false,
        feedBackForm: {
          messageText: ''
        }
      };
    },
    methods: {
      ...mapActions({
        getComputedRate: 'rate/GET_COMPUTED',
        getUser: 'user/LOAD',
        getWallet: 'account/GET_WALLET',
        getRates: 'rate/LOAD',
        createWallet: 'account/CREATE_WALLET',
        deleteWallet: 'account/DELETE_WALLET',
        calculateRub: 'rate/SET_SBI_RUB',
        calculateEth: 'rate/SET_SBI_ETH'
      }),
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick (tab, event) {
        console.log(tab, event);
      },
      handleChange (val) {
        console.log(val);
      },
      onSubmit () {
        this.createWallet(this.wallet.address);
        this.walletEditing = false;
      },
      onEditWallet () {
        this.walletEditing = true;
      },
      onRemoveWallet () {
        this.deleteWallet();
      },
      showInput () {

      },
      onError: (e) => {
        alert('Failed to copy texts');
      },
      onCopy () {
        this.$message({
          message: 'Вы скопировали!',
          type: 'success'
        });
      },
      onChange () {
        console.log('onChange');
        this.calculateRub();
      }
    },
    components: {
      'account-menu': AccountMenu
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        rate: 'rate/rate',
        wallet: 'account/wallet'
      })
    },
    created: function () {
      this.getUser();
      this.getWallet();
      this.getRates();
      getBalance();
    }
  };
</script>
