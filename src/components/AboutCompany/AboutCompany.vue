<template>
  <div id="about-company" class="about-company">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>{{ $t("aboutCompany.text.0") }}</h2>
                </el-col>
              </el-row>

              <el-carousel :interval="10000" height="600px">
                <el-carousel-item v-for="video in videos" :key="video.id">
                  <el-row class="block-row">
                    <el-col :xs="22" :span="12" class="idea left">
                      <div class="grid-content bg-purple-light text-block">
                        <p>{{ video.text1 }}</p>
                        <p>{{ video.text2 }}</p>
                        <p v-if="video.text3">{{ video.text3 }}</p>
                      </div>
                    </el-col>

                    <el-col :xs="24" :span="12" class="gif right" ref="video1">
                      <img :src="video.src" />
                    </el-col>
                  </el-row>
                </el-carousel-item>
              </el-carousel>

            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<style>
  .el-carousel__button {
    background-color: #6872a9;
    height: 5px !important;
  }

</style>
<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import gif1 from './../../assets/videos/1s.gif';
  import gif2 from './../../assets/videos/2s.gif';
  import gif3 from './../../assets/videos/3s.gif';
  import gif4 from './../../assets/videos/4s.gif';
  import img1 from './../../assets/videos/v1.jpg';
  import img2 from './../../assets/videos/v2.jpg';
  import img3 from './../../assets/videos/v3.jpg';
  import img4 from './../../assets/videos/v4.jpg';

  export default {
    name: 'AboutCompany',
    data () {
      return {
        gif1: gif1,
        gif2: gif2,
        gif3: gif3,
        gif4: gif4,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        video1: '//sbinvest.pro/assets/videos/1.mp4',
        video2: '//sbinvest.pro/assets/videos/2.mp4',
        video3: '//sbinvest.pro/assets/videos/3.mp4',
        video4: '//sbinvest.pro/assets/videos/4.mp4',
        showVideo1: false,
        showVideo2: false,
        showVideo3: false,
        showVideo4: false,
        videos: [
          {
            id: 1,
            link: '//sbinvest.pro/assets/videos/1.mp4',
            src: gif1,
            alt: 'we invest',
            text1: this.$t('aboutCompany.text.1'),
            text2: this.$t('aboutCompany.text.2')
          }, {
            id: 2,
            link: '//sbinvest.pro/assets/videos/2.mp4',
            src: gif2,
            alt: 'few investors',
            text1: this.$t('aboutCompany.text.3'),
            text2: `${this.$t('aboutCompany.text.4')} ${this.$t('aboutCompany.text.5')}`
          }, {
            id: 3,
            link: '//sbinvest.pro/assets/videos/3.mp4',
            src: gif3,
            alt: 'voting',
            text1: `${this.$t('aboutCompany.text.6')} ${this.$t('aboutCompany.text.7')} ${this.$t('aboutCompany.text.8')} ${this.$t('aboutCompany.text.18')}`,
            text2: `${this.$t('aboutCompany.text.9')} ${this.$t('aboutCompany.text.17')} ${this.$t('aboutCompany.text.10')}`,
            text3: this.$t('aboutCompany.text.11')
          }, {
            id: 4,
            link: '//sbinvest.pro/assets/videos/4.mp4',
            src: gif4,
            alt: 'all the world',
            text1: `${this.$t('aboutCompany.text.12')} ${this.$t('aboutCompany.text.13')}`,
            text2: `${this.$t('aboutCompany.text.14')} ${this.$t('aboutCompany.text.15')} ${this.$t('aboutCompany.text.16')}`
          }
        ]
      };
    },
    methods: {
    },
    mounted () {
    },
    beforeDestroy: function () {
    }
  };
</script>
