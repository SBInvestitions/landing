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
                <el-col :xs="24" :span="12" class="gif right">
                 <!-- <video autoplay loop id="video-gif-1" width="80%" height="60%">
                    <source src="./../../assets/videos/1.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/1_1.gif" />
                  </video>-->
                  <img src="./../../assets/videos/1s.gif" />
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif left">
                 <!-- <video autoplay="autoplay" loop="loop" id="video-gif-2" width="80%" height="60%">
                    <source src="./../../assets/videos/2.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/2-2.gif" />
                  </video>-->
                  <img src="./../../assets/videos/2s.gif" />
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
                <el-col :xs="24" :span="12" class="gif right">
                 <!-- <video autoplay="autoplay" loop="loop" id="video-gif-3" width="80%" height="60%">
                    <source src="./../../assets/videos/3.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/3.gif" />
                  </video>-->
                  <img src="./../../assets/videos/3s.gif" />
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif left">
                  <!--<video autoplay="autoplay" loop="loop" id="video-gif-4" width="80%" height="60%">
                    <source src="./../../assets/videos/4.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/4.gif" />
                  </video>-->
                  <img src="./../../assets/videos/4s.gif" />
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

  export default {
    name: 'AboutCompany',
    data () {
      return {
      };
    }
  };
</script>
