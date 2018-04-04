<template>
    <div id="top-header" class="top-header">
      <div class="videoContainer hidden-sm-and-down">
        <iframe id="video-background" src="https://www.youtube.com/embed/J3vj8LaJDtQ?modestbranding=1&autoplay=1&controls=0&fs=0&rel=0&showinfo=0&disablekb=1&start=10" frameborder="0" allowfullscreen></iframe>
      </div>
      <el-row>
        <el-col :span="24" class="top-top">
          <div class="grid-content bg-purple-dark">
            <el-row type="flex" class="row-bg sbi-logo-container" justify="space-around">
              <el-col :xs="2" :sm="2" :md="1" :lg="1" :xl="1">
                <div class="grid-content bg-purple-light hidden-md-and-down">
                  <img src="./../../../src/assets/logo.png" class="sbi-logo" alt="sb-investitions">
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg sbi-text-container" justify="space-around">
              <el-col :xs="{span: 23, offset: 1}" :sm="24" :md="20" :lg="20" :xl="16">
                <div class="grid-content bg-purple-light">
                  <h1>{{ $t("topHeader.text.1") }}</h1>
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
          <div v-if="isIcoStarted" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :xs="20" :sm="20" :md="20" :lg="16" :xl="16">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">
                    <el-col :span="10" class="left-block">
                      <span class="header">{{ $t("topHeader.text.5") }}</span>
                      <div class="h4">2,500,000</div>
                    </el-col>
                    <el-col :span="14">
                      <span class="header">{{ $t("topHeader.text.6") }}</span>
                      <el-row class="h4">
                        <el-col :span="4" :offset="1" class="scale days">01<span class="value">{{ $t("topHeader.text.7") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale hours">12<span class="value">{{ $t("topHeader.text.8") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale minutes">13<span class="value">{{ $t("topHeader.text.9") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale seconds">48<span class="value">{{ $t("topHeader.text.10") }}</span></el-col>
                      </el-row>
                    </el-col>
                    <el-col :offset="1" :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="scale-line-block">
                      <div id="scale-line" class="scale-line">
                        <div class="line"></div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="!isIcoStarted" class="grid-content bg-purple-light sbi-scale-container">
            <el-row type="flex" class="row-bg scale-row" justify="space-around">
              <el-col :xs="20" :sm="18" :md="16" :lg="16" :xl="16">
                <div class="grid-content bg-purple-light">
                  <el-row :gutter="20">
                    <el-col :span="24" class="before-ico">
                      <span class="header">{{ $t("topHeader.text.6") }}</span>
                      <el-row class="h4">
                        <el-col :span="4" :offset="1" class="scale days">{{ before.days }}<span class="value">{{ $t("topHeader.text.7") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale hours">{{ before.hours }}<span class="value">{{ $t("topHeader.text.8") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale minutes">{{ before.minutes }}<span class="value">{{ $t("topHeader.text.9") }}</span></el-col>
                        <el-col :span="2" class="scale points">:</el-col>
                        <el-col :span="4" class="scale seconds">{{ before.seconds }}<span class="value">{{ $t("topHeader.text.10") }}</span></el-col>
                      </el-row>
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
  import { getStarted } from './../../samples/getWeb3';

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
      vidRescale: () => {
        const video = document.getElementById('video-background');
        const windowWidth = window.innerWidth;
        if (video) {
          video.style.width = `${windowWidth}px`;
          video.style.height = `${windowWidth * 0.5625}px`;
        }
      },
      async icoStarted () {
        this.isIcoStarted = await getStarted();
      }
    },
    mounted () {
      this.vidRescale();
      window.setInterval(() => {
        this.before = this.changeTime(this.date);
      }, 1000);
    },
    beforeDestroy () {
      clearInterval(this.timer);
    }
  };
</script>
