<template>
  <div id="about-company" class="about-company">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>{{ $t("aboutCompany.theProblem.0") }}</h2>
                  <p>{{ $t("aboutCompany.theProblem.1") }}</p>
                  <p class="problem">{{ $t("aboutCompany.theProblem.2") }}</p>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.theProblem.3") }}</p>
                    <p>{{ $t("aboutCompany.theProblem.4") }}</p>
                  </div>
                </el-col>
                <el-col :span="12" class="video right">
                  <iframe width="600px" height="370px" id="video-background-1" src="https://www.youtube.com/embed/J3vj8LaJDtQ?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1&start=10" frameborder="0" allowfullscreen></iframe>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12" class="video left">
                  <iframe width="600px" height="370px" id="video-background-2" src="https://www.youtube.com/embed/J3vj8LaJDtQ?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1&start=10" frameborder="0" allowfullscreen></iframe>
                </el-col>
                <el-col :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.theProblem.5") }}</p>
                    <p>{{ $t("aboutCompany.theProblem.6") }}</p>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>{{ $t("aboutCompany.theProblem.7") }}</p>
                    <p>{{ $t("aboutCompany.theProblem.8") }}</p>
                  </div>
                </el-col>
                <el-col :span="12" class="video right">
                  <iframe width="600px" height="370px" id="video-background-3" src="https://www.youtube.com/embed/J3vj8LaJDtQ?modestbranding=1&autoplay=0&controls=1&fs=0&rel=0&showinfo=0&disablekb=1&start=10" frameborder="0" allowfullscreen></iframe>
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
    name: 'AboutCompany',
    data () {
      return {
        photos: [photo1, photo2, photo3, photo4, photo5]
      };
    },
    methods: {
      setVideoHeight: function (video) {
        const windowWidth = video.offsetWidth;
        console.log('windowWidth', windowWidth);
        // video.style.width = '500px';
        video.style.height = `${windowWidth * 0.5625}px`;
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
