<template>
  <div id="video-block" class="video-block">
    <el-row class="video-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>{{ $t("videoBlock.text.1") }}</h2>
                </el-col>
              </el-row>

              <el-row class="video-row row-bg">
                <el-col :xs="24" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("videoBlock.text.2") }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :span="12" class="video right">
                  <iframe width="90%" height="370px" id="video-background-1" src="https://www.youtube.com/embed/ZP3DXmDJ-xk?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>
                </el-col>
              </el-row>

              <el-row class="video-row">
                <el-col :xs="24" :span="12" class="video left">
                  <iframe width="90%" height="370px" id="video-background-2" src="https://www.youtube.com/embed/d005PC3zqVA?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>
                </el-col>
                <el-col :xs="24" :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("videoBlock.text.3") }}</p>
                  </div>
                </el-col>
              </el-row>

              <el-row class="video-row row-bg">
                <el-col :xs="24" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("videoBlock.text.5") }}</p>
                  </div>
                </el-col>
                <el-col :xs="24" :span="12" class="video right">
                  <iframe width="90%" height="370px" id="video-background-3" src="https://www.youtube.com/embed/2Dcn4t-Nw20?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1" frameborder="0" allowfullscreen></iframe>
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
  import photo1 from './../../assets/photos/11.jpg';
  import photo2 from './../../assets/photos/22.jpg';
  import photo3 from './../../assets/photos/33.jpg';
  import photo4 from './../../assets/photos/44.jpg';
  import photo5 from './../../assets/photos/55.jpg';

  export default {
    name: 'VideoBlock',
    data () {
      return {
        photos: [photo1, photo2, photo3, photo4, photo5]
      };
    },
    methods: {
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
        if (video1) {
          this.setVideoHeight(video1);
        }
        if (video2) {
          this.setVideoHeight(video2);
        }
        if (video3) {
          this.setVideoHeight(video3);
        }

        /* function setVideoHeight (video) {
         const windowWidth = video.offsetWidth;
         console.log('windowWidth', windowWidth);
         // video.style.width = '500px';
         video.style.height = `${windowWidth * 0.5625}px`;
         } */
      }
    },
    mounted () {
      this.vidRescale();
    }
  };
</script>
