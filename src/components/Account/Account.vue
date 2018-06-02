<template>
  <div id="account" class="account">
    <el-container>
      <el-header class="header-block">
        <account-menu />
      </el-header>
      <el-main class="main-block">
        <el-row type="flex" align="middle" class="row-bg" justify="center">
          <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">

                <el-row class="row-bg">
                  <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <div class="grid-content bg-purple">
                      <h1>{{ $t("account.text.1") }}<span v-if="user.firstName">, {{user.firstName}} {{user.lastName}}</span><span v-if="!user.firstName">, dear participant!</span>
                      </h1>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                    <div class="grid-content bg-purple">
                      <el-row class="row-bg rates">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="rate" v-loading="!rate.sbiRate">
                          <div class="rate-sym">SBI / ETH</div>
                          <div class="rate-num">{{ rate.ethRate / 0.02 || 0 }}</div>
                        </el-col>
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="rate">
                          <div class="rate-sym">SBI / RUB</div>
                          <div class="rate-num">{{ 1 / (rate.rubRate * 0.02)  }}</div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>

                <el-tabs type="card" @tab-click="handleClick">

                  <!--Предварительная оценка-->
                  <el-tab-pane class="tab-item" v-bind:label="$t('account.text.2')">
                    <div class="text-block">
                      <strong>{{ $t("account.text.14") }}</strong>
                      <!--<el-tooltip v-bind:content="$t('account.text.15')" placement="top" effect="light">
                        <el-button
                            class="copy-button"
                            type="success"
                            v-clipboard:copy="crowdsaleAddress"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError">
                          0x693bb391F6E2cB3C9B8d6A261916C662f9c86A45
                        </el-button>
                      </el-tooltip>-->
                      {{ $t("topHeader.text.12") }}
                    </div>
                    <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="rate" label-width="100%">
                      <el-form-item v-bind:label="$t('account.text.3')">
                        <!--@change="onChangeRub"-->
                        <el-input-number @change="onChangeRub" :min="0" :step="1000" tabIndex="1" v-model="rate.rubCount"></el-input-number>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">{{ rate.sbiRubCount }}</el-tag>
                      </el-form-item>
                    </el-form>

                    <el-form :inline="true" label-position="left" ref="form" class="ownForm" :model="rate" label-width="100%">
                      <el-form-item v-bind:label="$t('account.text.4')">
                        <!--@change="onChangeEth"-->
                        <el-input-number @change="onChangeEth" :min="0" tabIndex="2" v-model="rate.ethCount"></el-input-number>
                      </el-form-item>
                      <el-form-item v-bind:label="$t('account.text.12')">
                        <el-tag type="info">{{ rate.sbiEthCount }}</el-tag>
                      </el-form-item>
                    </el-form>

                    <div class="text-block">
                      <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item v-bind:title="$t('account.text.16')" name="1">
                          <div>{{ $t('account.text.17') }}</div>
                          <div>{{ $t('account.text.18') }}<strong>+7-921-450-66-73 / (8142) 59-20-33</strong></div>
                          <div>
                            <h3>{{ $t('account.text.19') }}</h3>
                            <p>{{ $t('account.text.20') }}</p>
                            <p>{{ $t('account.text.21') }}</p>
                            <p>{{ $t('account.text.22') }} (814 2) 592033</p>
                            <p>e-mail: invest@sbinvest.pro</p>
                            <p>{{ $t('account.text.23') }} 81898419</p>
                            <p>{{ $t('account.text.24') }} 1071001012917</p>
                            <p>{{ $t('account.text.25') }} 1001195450/100101001</p>
                            <p>{{ $t('account.text.26') }} 71.12.3, 43.12.4, 43.13, 71.12.4, 71.12.45</p>
                            <p>{{ $t('account.text.27') }}</p>
                            <p>{{ $t('account.text.28') }} 044030723</p>
                            <p>{{ $t('account.text.29') }} 30101810100000000723</p>
                            <p>{{ $t('account.text.30') }}</p>
                          </div>
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

                        <el-tooltip v-if="wallet.address && !walletEditing" v-bind:content="$t('account.text.36')" placement="top" effect="light">
                          <el-button size="mini" type="primary" icon="el-icon-edit" circle @click="onEditWallet"></el-button>
                        </el-tooltip>

                        <el-tooltip v-if="wallet.address && !walletEditing" v-bind:content="$t('account.text.37')" placement="top" effect="light">
                          <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="onRemoveWallet"></el-button>
                        </el-tooltip>
                      </el-form-item>

                      <el-form-item v-if="!wallet.address || walletEditing">
                        <el-tooltip v-bind:content="$t('account.text.38')" placement="right" effect="light">
                          <el-button type="success" icon="el-icon-check" circle @click="onSubmit"></el-button>
                        </el-tooltip>
                      </el-form-item>
                    </el-form>
                    <el-form ref="form" :inline="true" label-position="left" class="metaForm" :model="wallet">
                      <el-form-item v-if="wallet.address" v-bind:label="$t('account.text.10')">
                        <el-tag type="info">{{ wallet.balance }} SBI</el-tag>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>

                  <!--Метамаск-->
                  <el-tab-pane v-bind:label="$t('account.text.6')">
                    <el-row class="row-bg">
                      <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
                        <el-form ref="form" label-position="left" class="metaForm" :model="wallet" label-width="30%">
                          <el-form-item v-bind:label="$t('account.text.13')">
                            <el-input disabled v-model="metamaskAddress"></el-input>
                          </el-form-item>
                          <el-form-item v-bind:label="$t('account.text.10')">
                            <el-input disabled v-model="metamaskBalance"></el-input>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </el-tab-pane>

                  <!--Иное-->
                  <el-tab-pane v-bind:label="$t('account.text.7')">
                    <div class="text-block">
                      <strong>{{ $t('account.text.31') }}</strong>
                      <el-tooltip v-bind:content="$t('account.text.15')" placement="top" effect="light">
                        <el-button
                            class="copy-button"
                            type="success"
                            v-clipboard:copy="sberbank"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError">
                          4276 2500 1083 2871
                        </el-button>
                      </el-tooltip>
                      <p>{{ $t('account.text.32') }} <strong>{{ $t('account.text.33') }}</strong></p>
                      <p>{{ $t('account.text.34') }}
                        <el-tooltip v-bind:content="$t('account.text.15')" placement="top" effect="light">
                          <el-button
                              class="copy-button"
                              type="success"
                              v-clipboard:copy="user.id"
                              v-clipboard:success="onCopy"
                              v-clipboard:error="onError">
                            {{ user.id }}
                          </el-button>
                        </el-tooltip>
                      </p>
                      <p>{{ $t('account.text.35') }}</p>
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
  import { getBalance, getAccount } from './../../samples/web3Lib';
  import AccountMenu from './components/AccountMenu/AccountMenu.vue';

  export default {
    name: 'Account',
    props: {
      msg: String
    },
    data () {
      return {
        walletBalance: 0,
        metamaskAddress: null,
        metamaskBalance: 0,
        sbiEthRate: 0,
        activeNames: ['0'],
        sberbank: '4276250010832871',
        crowdsaleAddress: '0x693bb391F6E2cB3C9B8d6A261916C662f9c86A45',
        activeName: 'first',
        walletEditing: false,
        feedBackForm: {
          messageText: ''
        }
      };
    },
    methods: {
      ...mapActions({
        getUser: 'user/LOAD',
        getWallet: 'account/GET_WALLET',
        getRates: 'rate/LOAD',
        createWallet: 'account/CREATE_WALLET',
        deleteWallet: 'account/DELETE_WALLET',
        calculateRub: 'rate/SET_SBI_RUB',
        calculateEth: 'rate/SET_SBI_ETH'
      }),
      handleSelect (key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClick (tab, event) {
        // console.log(tab, event);
      },
      handleChange (val) {
        // console.log(val);
      },
      onSubmit () {
        this.createWallet(this.wallet.address);
        this.walletEditing = false;
        getBalance(this.wallet.address).then((balance) => {
          this.wallet.balance = balance;
          console.log('this.wallet.balance', this.wallet.balance);
        });
      },
      onEditWallet () {
        this.walletEditing = true;
      },
      onRemoveWallet () {
        this.deleteWallet();
      },
      showInput () {

      },
      onError: () => {
        alert('Failed to copy texts');
      },
      onCopy () {
        this.$message({
          message: 'Вы скопировали!',
          type: 'success'
        });
      },
      onChangeRub (newVal, prevVal) {
        this.calculateRub(newVal);
      },
      onChangeEth (newVal, prevVal) {
        this.calculateEth(newVal);
      }
    },
    components: {
      'account-menu': AccountMenu
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        wallet: 'account/wallet'
      }),
      rate: function () {
        return this.$store.getters['rate/rate'];
      }
    },
    created: function () {
      this.getUser();
      this.getWallet();
      this.getRates();
    },
    mounted: function () {
      getAccount().then((address) => {
        this.metamaskAddress = address;
        if (!this.metamaskAddress) {
          console.log('no metamask defined!');
        } else {
          getBalance(this.metamaskAddress).then((balance) => {
            this.metamaskBalance = balance;
            console.log('this.metamaskBalance', this.metamaskBalance);
          });
        }
      });
    }
  };
</script>
