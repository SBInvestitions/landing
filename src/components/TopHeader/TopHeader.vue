<template>
    <div id="top-header" class="top-header">
      <!-- <div class="videoContainer hidden-sm-and-down">
        <iframe id="video-background" src="https://www.youtube.com/embed/J3vj8LaJDtQ?modestbranding=1&autoplay=1&controls=0&fs=0&rel=0&showinfo=0&disablekb=1&start=10" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <el-row>
        <el-col :span="24" class="top-top">
          <div class="grid-content bg-purple-dark">
            <el-row type="flex" class="row-bg sbi-logo-container" justify="space-around">
              <el-col :xs="2" :sm="2" :md="1" :lg="1" :xl="1">
                <div class="grid-content bg-purple-light hidden-md-and-down">
                  <img src="./../../../src/assets/svg/logo-new.svg" class="sbi-logo" alt="sb-investitions">
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg sbi-text-container" justify="space-around">
              <el-col :xs="{span: 23, offset: 1}" :sm="24" :md="20" :lg="20" :xl="16">
                <div class="grid-content bg-purple-light">
                  <h1>{{ $t("topHeader.text.1") }}</h1>
                  <div class="divider"></div>
                  <h2><a target="_blank" href="https://cointelegraph.com/explained/what-is-a-daico-explained">DAICO</a> {{ $t("topHeader.text.2") }}</h2>
                  <h3>{{ $t("topHeader.text.3") }}</h3>
                  <el-button class="invest" round>{{ $t("topHeader.text.4") }}</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="top-bottom">
          <div v-if="!isIcoStarted" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :span="24">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">

                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="timer">
                      <span class="header">{{ $t("topHeader.text.6") }}</span>
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

                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="rized">
                      <span class="header">{{ $t("topHeader.text.5") }}</span>
                      <div class="h4">2,500,000</div>
                    </el-col>

                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="discount">
                      <span class="header">{{ $t("topHeader.text.13") }}</span>
                      <div class="h4">20%</div>
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
          <div v-if="isIcoStarted" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :span="24">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">
                    <el-col :span="24" class="before-ico">
                      <span class="header">{{ $t("topHeader.text.11") }}</span>
                      <el-row class="h4">
                        {{ $t("topHeader.text.12") }}
                      </el-row>
                      <el-row class="h4">
                        <el-col :span="4" :offset="1" class="scale days">-<span class="value">{{ $t("topHeader.text.7") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale hours">-<span class="value">{{ $t("topHeader.text.8") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale minutes">-<span class="value">{{ $t("topHeader.text.9") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale seconds">-<span class="value">{{ $t("topHeader.text.10") }}</span></el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="24" class="scale-line-block">
                      <div id="scale-line-2" class="scale-line">
                        <div class="line"></div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import moment from 'moment';
  import { getStarted } from './../../samples/web3Lib';

  export default {
    name: 'TopHeader',
    data () {
      return {
        date: moment([2018, 3, 20]),
        isIcoStarted: false,
        before: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      };
    },
    methods: {
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
      async icoStarted () {
        this.isIcoStarted = await getStarted();
      }
    },
    mounted () {
      window.setInterval(() => {
        this.before = this.changeTime(this.date);
      }, 1000);
    },
    beforeDestroy () {
      clearInterval(this.timer);
    }
  };
</script>
