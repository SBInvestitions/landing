<template>
  <div v-bind:style="blockFrameStyles" id="conditions" class="conditions">
    <div ref="videoBackground" class="videoContainer hidden-sm-and-down">
      <iframe height="60%" width="100%" v-bind:style="frameStyles" src="https://www.youtube-nocookie.com/embed/J3vj8LaJDtQ?controls=0&rel=0&autoplay=1&start=10&loop=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>    </div>
    <el-row class="conditions-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="16">
            <div class="grid-content bg-purple-light">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="24">
                  <div class="grid-content bg-purple-light">
                    <h2>{{ $t("conditions.text.1") }}</h2>

                    <el-row class="conditions-block" :gutter="20">
                      <div class="text-block">
                        <p>{{ $t("conditions.text.24") }}</p>
                        <p>{{ $t("conditions.text.25") }}</p>
                      </div>
                    </el-row>
                    <el-row class="pre-sale-block" :gutter="20">
                      <el-col :span="12">
                        {{ $t("conditions.text.26") }}<!--<strong>{{ $t("conditions.text.27") }}</strong>{{ $t("conditions.text.28") }}--> -
                      </el-col>
                      <el-col :span="12">
                        {{ $t("conditions.text.29") }}<!--<strong>15.06.18 - 30.06.18</strong>--> -
                      </el-col>
                    </el-row>
                    <el-row class="sale-block" :gutter="20">
                      <el-col :span="12">
                        <p>{{ $t("conditions.text.30") }}<!--<strong>1 SBI = $0.052</strong>--> -</p>
                        <p>{{ $t("conditions.text.31") }}<!--<strong>01.07.18 - 31.08.18</strong>--> -</p>
                      </el-col>
                      <el-col :span="12">
                        <p>Soft-Cap: <strong>$250,000.00</strong></p>
                        <p>Hard-Cap: <strong>$1,000,000.00</strong></p>
                      </el-col>
                    </el-row>

                    <el-row class="graph-block" :gutter="20">
                      <el-col :xs="{span: 20, offset: 2}" :sm="{span: 10, offset: 1}" :md="11" :lg="11" :xl="11">
                        <div class="grid-content bg-purple graph-left-block">
                          <div class="graph-left" id="graph-left" ref="left" v-bind:style="leftStyles">
                            <div class="top top-1">{{ $t("conditions.text.2") }}</div>
                            <div class="graph-svg" />
                            <div class="top top-2">{{ $t("conditions.text.3") }}<strong>{{ $t("conditions.text.4") }}</strong></div>
                            <div class="top top-3">{{ $t("conditions.text.5") }}<strong>{{ $t("conditions.text.6") }}</strong></div>
                            <div class="top top-4">{{ $t("conditions.text.7") }}<strong>{{ $t("conditions.text.8") }}</strong></div>
                            <div class="top top-5">{{ $t("conditions.text.9") }}<strong>{{ $t("conditions.text.10") }}</strong></div>
                            <div class="top top-6">{{ $t("conditions.text.11") }}<strong>{{ $t("conditions.text.12") }}</strong></div>
                            <div class="top top-7"><strong>{{ $t("conditions.text.13") }}</strong></div>
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="{span: 20, offset: 2}" :sm="10" :md="11" :lg="11" :xl="11">
                        <div class="grid-content bg-purple graph-right-block" >
                          <div class="graph-right" id="graph-right" ref="right" v-bind:style="rightStyles">
                            <div class="top top-1">{{ $t("conditions.text.14") }}</div>
                            <div class="graph-svg" />
                            <div class="top top-2">{{ $t("conditions.text.15") }}<strong>{{ $t("conditions.text.16") }}</strong></div>
                            <div class="top top-3">{{ $t("conditions.text.17") }}<strong>{{ $t("conditions.text.18") }}</strong></div>
                            <div class="top top-4">{{ $t("conditions.text.19") }}<strong>{{ $t("conditions.text.20") }}</strong></div>
                            <div class="top top-5">{{ $t("conditions.text.21") }}<strong>{{ $t("conditions.text.22") }}</strong></div>
                            <div class="top top-7"><strong>{{ $t("conditions.text.23") }}</strong></div>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
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
  import Vue from 'vue';
  export default {
    name: 'Conditions',
    data () {
      return {
        leftStyles: {},
        rightStyles: {},
        frameStyles: {},
        blockFrameStyles: {}
      };
    },
    methods: {
      matchWidth () {
        const left = this.$refs.left;
        const right = this.$refs.right;
        const leftHeight = left.offsetHeight;
        const rightHeight = right.offsetHeight;
        left.pseudoStyle('before', 'height', `${leftHeight - 45}px !important`, 'left-class');
        right.pseudoStyle('before', 'height', `${rightHeight - 45}px !important`, 'right-class');
      },
      setVideoHeight: function () {
        const windowWidth = this.$refs.videoBackground.offsetWidth;
        const offsetHeight = this.$refs.videoBackground.offsetHeight;
        if (windowWidth) {
          const frameWidth = `${windowWidth}px`;
          const frameHeigth = `${windowWidth * 0.563}px`;
          Vue.set(this.frameStyles, 'width', frameWidth);
          Vue.set(this.frameStyles, 'height', frameHeigth);
          if ((windowWidth * 0.563) < offsetHeight) {
            Vue.set(this.blockFrameStyles, 'backgroundSize', `${frameWidth} ${frameHeigth}`);
          } else {
            Vue.set(this.blockFrameStyles, 'backgroundSize', `${frameWidth} ${offsetHeight}px`);
          }
        }
      },
      vidRescale: function () {
        if (this.$refs.videoBackground) {
          this.setVideoHeight();
        }
      }
    },
    mounted () {
      // this.lineRescale();
      this.vidRescale();
      this.matchWidth();
    }
  };
</script>
