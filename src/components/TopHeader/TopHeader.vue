<template>
  <div id="top-header" v-bind:class="{'show': showHeader }" class="top-header" ref="topHeader" v-bind:style="headerStyle">
    <div class="top-header-inner" v-loading="!showWorld">
      <div class="gif-container">
          <img v-if="showWorld" class="moved" :src="worldImage.src" @load="loaded" alt="main">
      </div>
      <el-row>
        <el-col :span="24" class="top-top">
          <div v-bind:class="{'show': showText}" class="left-text grid-content bg-purple-dark">
            <el-row type="flex" class="row-bg sbi-logo-container" justify="left">
              <el-col :span="7" :offset="2">
                <div class="grid-content bg-purple-light hidden-md-and-down">
                  <img src="./../../../src/assets/svg/logo-new.svg" class="sbi-logo" alt="sb-investitions">
                  <span>Subsoil Blockchain Investitions</span>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg sbi-text-container" justify="space-around">
              <el-col :xs="{span: 23, offset: 1}" :sm="24" :md="20" :lg="20" :xl="20">
                <div class="grid-content bg-purple-light">
                  <h1>{{ $t("topHeader.text.1") }}<p>{{ $t("topHeader.text.2") }}</p></h1>
                  <!--<el-button class="invest" v-on:click="goTo('register')" round>{{ $t("topHeader.text.4") }}</el-button>-->

                  <el-form :inline="true" :model="formInline" class="subscribe-form">
                    <div class="form-item" v-bind:class="{ 'submit': toSubmit }">
                      <input type="email" v-model="formInline.email" class="email-input" placeholder="Enter your email" clearable />
                      <button id="submit-button" @mouseleave="mouseLeave" @mouseover="mouseOver" class="el-button subscribe" type="primary" @click="onSubmit" roind>Subscribe</button>
                    </div>
                  </el-form>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
              <el-col :xs="{span: 23, offset: 1}" :sm="24" :md="20" :lg="20" :xl="20">
                <el-row type="flex" class="row-bg social" justify="left">

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/f-github.png" alt="github"></a>
                    </div>
                  </el-col>

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="https://t.me/joinchat/DY1Upw822WC1LcPgmEAtzw" class="social-link" target="_blank">
                        <img src="./../../assets/socail/f-telegram.png" alt="telegram channel">
                      </a>
                    </div>
                  </el-col>

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="https://www.youtube.com/channel/UCXrK81VbNIS1PF80xVjJukA/" class="social-link" target="_blank"><img src="./../../assets/socail/f-youtube.png" alt="youtube"></a>
                    </div>
                  </el-col>

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="https://twitter.com/ABelonogov" class="social-link" target="_blank">
                        <img src="./../../assets/socail/f-twitter.png" alt="twitter">
                      </a>
                    </div>
                  </el-col>

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="mailto:invest@sbinvest.pro" target="_top" class="social-link"><img src="./../../assets/socail/f-mail.png" alt="mail"></a>
                    </div>
                  </el-col>

                  <el-col :xs="4" :span="1">
                    <div class="grid-content bg-purple">
                      <a href="https://www.instagram.com/sbinvestitions/" class="social-link" target="_blank"><img src="./../../assets/socail/f-instagram.png" alt="instagram"></a>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="top-bottom">
          <div v-if="false" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :span="24">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">

                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="timer">
                      <span class="header">{{ $t("topHeader.text.11") }}</span>
                      <el-row class="h4">
                        <el-col :span="4" :offset="1" class="scale days">{{ before.days }}<span class="value">{{ $t("topHeader.text.7") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale hours">{{ before.hours }}<span class="value">{{ $t("topHeader.text.8") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale minutes">{{ before.minutes }}<span class="value">{{ $t("topHeader.text.9") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale seconds">{{ before.seconds }}<span class="value">{{ $t("topHeader.text.10") }}</span></el-col>
                      </el-row>
                    </el-col>

                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="rized">
                      <span class="header">{{ $t("topHeader.text.5") }}</span>
                      <div class="h4">$0</div>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="discount">
                      <span class="header">{{ $t("topHeader.text.13") }}</span>
                      <div class="h4">60%</div>
                    </el-col>
                    <el-col :span="24" class="scale-line-block">
                      <div id="scale-line" class="scale-line">
                        <div class="line"></div>
                      </div>
                    </el-col>

                    <el-col :span="24" class="comment-block">
                      <div class="start">
                        <header>0</header>
                        <span>{{ $t("topHeader.text.14") }}</span>
                      </div>
                      <div class="pre-ico">
                        <header>$116 000</header>
                        <span>{{ $t("topHeader.text.15") }}</span>
                      </div>
                      <div class="hard-cap">
                        <header>$1 M</header>
                        <span>{{ $t("topHeader.text.17") }}</span>
                      </div>
                    </el-col>

                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="false" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :span="24">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">

                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="timer">
                      <span class="header">{{ $t("topHeader.text.6") }}</span>
                      <el-row class="h4">
                        <el-col :span="4" :offset="1" class="scale days">{{ beforeDiscount.days }}<span class="value">{{ $t("topHeader.text.7") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale hours">{{ beforeDiscount.hours }}<span class="value">{{ $t("topHeader.text.8") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale minutes">{{ beforeDiscount.minutes }}<span class="value">{{ $t("topHeader.text.9") }}</span></el-col>
                        <el-col :span="1" class="scale points">:</el-col>
                        <el-col :span="4" class="scale seconds">{{ beforeDiscount.seconds }}<span class="value">{{ $t("topHeader.text.10") }}</span></el-col>
                      </el-row>
                    </el-col>

                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="rized">
                      <span class="header">{{ $t("topHeader.text.5") }}</span>
                      <div class="h4">{{ contractFundsBalance }} ETH</div>
                    </el-col>
                    <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="discount">
                      <span class="header">{{ $t("topHeader.text.13") }}</span>
                      <div class="h4">60%</div>
                    </el-col>
                    <el-col :span="24" class="scale-line-block">
                      <div id="scale-line-1" class="scale-line">
                        <div ref="line" class="line" v-bind:style="lineStyles"></div>
                      </div>
                    </el-col>

                    <el-col :span="24" class="comment-block">
                      <div class="start">
                        <header>0</header>
                        <span>{{ $t("topHeader.text.14") }}</span>
                      </div>
                      <div class="pre-ico">
                        <header>$116 000</header>
                        <span>{{ $t("topHeader.text.15") }}</span>
                      </div>
                      <div class="hard-cap">
                        <header>$1 M</header>
                        <span>{{ $t("topHeader.text.17") }}</span>
                      </div>
                    </el-col>

                  </el-row>
                </div>
                <!--<div class="grid-content bg-purple-light">
                  <el-row :gutter="20">
                    <h1 class="header">{{ $t("security.text.1") }}<a href="mailto:invest@sbinvest.pro">invest@sbinvest.pro</a></h1>
                  </el-row>
                </div>-->
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import moment from 'moment';
  import Vue from 'vue';
  import emailApi from './../../api/email';
  import { getStarted, getFundsBalance } from './../../samples/web3Lib';

  export default {
    name: 'TopHeader',
    props: {
      worldImage: HTMLImageElement,
      showWorld: Boolean
    },
    data () {
      return {
        formInline: {
          email: ''
        },
        toSubmit: false,
        date: moment([2018, 5, 15]),
        dateICOStart: moment.unix(1530403200),
        dateICOEnd: moment.unix(1535759940),
        isIcoStarted: false,
        contractFundsBalance: 0,
        before: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        },
        beforeDiscount: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        },
        lineStyles: {},
        headerStyle: {},
        crowdsaleAddress: '0xE01bA6C593003B0EdcD43b7839a7c36b00a44dfC',
        src: '//sbinvest.pro/assets/documents/h3.mov',
        showText: false,
        moved: false,
        showHeader: false
      };
    },
    methods: {
      onSubmit: function (e) {
        e.preventDefault();
        if (this.formInline.email && this.validEmail(this.formInline.email)) {
          console.log('submit!', this.formInline.email);
          this.toSubmit = true;
          emailApi.postEmail(this.formInline.email).then(() => {
            const h = this.$createElement;
            this.$message({
              message: h('p', null, [
                h('span', null, 'Thank you for subscribing to us!'),
                h('i', { style: 'color: teal' }, 'We will keep you updated with our news!')
              ]),
              type: 'success'
            });

            return true;
          });
        }
      },
      validEmail: function (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
        return re.test(email);
      },
      mouseOver: function () {
        // console.log('hover!');
        this.toSubmit = true;
      },
      mouseLeave: function () {
        // console.log('leave!');
        this.toSubmit = false;
      },
      loaded () {
        this.moved = true;
        this.showText = true;
        this.showHeader = true;
      },
      changeTime: (date) => {
        const days = moment(date).diff(moment(), 'days');
        const hours = moment(date).diff(moment(), 'hours') - days * 24;
        const minutes = moment(date).diff(moment(), 'minutes') - days * 24 * 60 - hours * 60;
        const seconds = moment(date).diff(moment(), 'seconds') - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
        return {
          days,
          hours,
          minutes,
          seconds
        };
      },
      goTo () {
        this.$router.push({ path: 'register' });
      },
      icoStarted () {
        getStarted().then((res, err) => {
          this.isIcoStarted = res;
        });
      },
      async getContractFundsBalance () {
        this.contractFundsBalance = (await getFundsBalance()) / 10000;
        // const line = this.$refs.line;
        const currentPercentBalance = `${(this.contractFundsBalance * 100 / 1831).toFixed(0)}%`;
        Vue.set(this.lineStyles, 'width', currentPercentBalance);
      },
      onScroll: function (e) {
        this.position = e;
        if (this.$refs.topHeader) {
          const topHeaderOffsetTop = this.$refs.topHeader.getBoundingClientRect().top;
          // console.log('topHeaderOffsetTop', topHeaderOffsetTop, 'topHeaderOffsetHeight', topHeaderOffsetHeight);
          const color = 1 - Math.abs(topHeaderOffsetTop / 500);
          if (color >= 0) {
            Vue.set(this.headerStyle, 'background', `rgba(255, 255, 255, ${Math.abs(color)})`);
          }
          // console.log('color', color);
        }
      },
      onCopy () {
        this.$message({
          message: this.$t('account.text.42'),
          type: 'success'
        });
      },
      onError: () => {
        alert('Failed to copy texts');
      }
    },
    mounted () {
      document.addEventListener('scroll', this.onScroll, true);

      window.setInterval(() => {
        this.before = this.changeTime(this.date);
        this.beforeDiscount = this.changeTime(this.dateICOStart);
      }, 1000);
      // check the line width
      this.icoStarted();
      this.getContractFundsBalance();
    },
    beforeDestroy () {
      clearInterval(this.timer);
      document.removeEventListener('scroll', this.onScroll, true);
    }
  };
</script>
