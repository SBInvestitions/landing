<template>
  <div id="about-company" class="about-company">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="16">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>{{ $t("aboutCompany.text.0") }}</h2>
                </el-col>
              </el-row>

             <el-row class="block-row">
                <el-col :xs="22" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.text.1") }}</p>
                    <p>{{ $t("aboutCompany.text.2") }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :span="12" class="gif right" ref="video1">
                  <a v-if="!showVideo1" rel="button" @click="showVideoByIndex(1)">
                    <img :src="img1" />
                  </a>
                  <img v-if="showVideo1" :src="gif1" />
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif left" ref="video2">
                  <a v-if="!showVideo2" rel="button" @click="showVideoByIndex(2)">
                    <img :src="img2" />
                  </a>
                  <img v-if="showVideo2" :src="gif2" />
                </el-col>
                <el-col :xs="22" :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.text.3") }}</p>
                    <p>{{ $t("aboutCompany.text.4") }} <strong>{{ $t("aboutCompany.text.5") }}</strong></p>
                  </div>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="22" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.text.6") }} <strong>{{ $t("aboutCompany.text.7") }}</strong>{{ $t("aboutCompany.text.8") }}<strong>{{ $t("aboutCompany.text.18") }}</strong></p>
                    <p>{{ $t("aboutCompany.text.9") }}<strong>{{ $t("aboutCompany.text.17") }}</strong>{{ $t("aboutCompany.text.10") }}</p>
                    <p>{{ $t("aboutCompany.text.11") }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :span="12" class="gif right" ref="video3">
                  <a v-if="!showVideo3" rel="button" @click="showVideoByIndex(3)">
                    <img :src="img3" />
                  </a>
                  <img v-if="showVideo3" :src="gif3" />
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif left" ref="video4">
                  <a v-if="!showVideo4" rel="button" @click="showVideoByIndex(4)">
                    <img :src="img4" />
                  </a>
                  <img v-if="showVideo4" :src="gif4" />
                </el-col>
                <el-col :xs="22" :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.text.12") }}<strong>{{ $t("aboutCompany.text.13") }}</strong></p>
                    <p>{{ $t("aboutCompany.text.14") }}<strong>{{ $t("aboutCompany.text.15") }}</strong>{{ $t("aboutCompany.text.16") }}</p>
                  </div>
                </el-col>
              </el-row>

            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

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
        showVideo4: false
      };
    },
    methods: {
      showVideoByIndex: function (index) {
        if (index === 1) {
          this.showVideo1 = true;
        }
        if (index === 2) {
          this.showVideo2 = true;
        }
        if (index === 3) {
          this.showVideo3 = true;
        }
        if (index === 4) {
          this.showVideo4 = true;
        }
      },
      onScroll: function (e) {
        this.position = e;
        if (this.$refs.video1) {
          const video1Offset = this.$refs.video1.$el.getBoundingClientRect().top;
          if (video1Offset <= 300 && !this.showVideo1) {
            this.showVideo1 = true;
          }
        }
        if (this.$refs.video2) {
          const video1Offset = this.$refs.video1.$el.getBoundingClientRect().top;
          if (video1Offset <= 300 && !this.showVideo2) {
            this.showVideo2 = true;
          }
        }
        if (this.$refs.video3) {
          const video1Offset = this.$refs.video1.$el.getBoundingClientRect().top;
          if (video1Offset <= 300 && !this.showVideo3) {
            this.showVideo3 = true;
          }
        }
        if (this.$refs.video4) {
          const video1Offset = this.$refs.video1.$el.getBoundingClientRect().top;
          if (video1Offset <= 300 && !this.showVideo4) {
            this.showVideo4 = true;
          }
        }
      }
    },
    /* methods: {
      setVideoHeight: function (video) {
        const windowWidth = video.offsetWidth;
        // console.log('windowWidth', windowWidth);
        // video.style.width = '500px';
        video.style.height = `${windowWidth * 0.56}px`;
      },
      vidRescale: function () {
        const video1 = document.getElementById('video-background-1');
        const video2 = document.getElementById('video-background-2');
        const video3 = document.getElementById('video-background-3');
        const video4 = document.getElementById('video-background-4');
        if (video1) {
          this.setVideoHeight(video1);
        }
        if (video2) {
          this.setVideoHeight(video2);
        }
        if (video3) {
          this.setVideoHeight(video3);
        }
        if (video4) {
          this.setVideoHeight(video4);
        }

        /!* function setVideoHeight (video) {
         const windowWidth = video.offsetWidth;
         console.log('windowWidth', windowWidth);
         // video.style.width = '500px';
         video.style.height = `${windowWidth * 0.5625}px`;
         } *!/
      }
    }, */
    mounted () {
      document.addEventListener('scroll', this.onScroll, true);
    },
    beforeDestroy: function () {
      document.removeEventListener('scroll', this.onScroll, true);
    }
  };
</script>
