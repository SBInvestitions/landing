<template>
  <div id="road-map" class="road-map">
    <el-row class="road-map-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col class="road-map-header" :xs="22" :sm="22" :md="20" :lg="16" :xl="16">
            <h2>{{ $t("roadMap.text.1") }}</h2>
            <div class="text-block">
              <p>{{ $t("roadMap.text.9") }}</p>
              <p>{{ $t("roadMap.text.10") }}</p>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg stages-middle-line hidden-md-and-down" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-md-and-down" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <!--<div class="header">
              {{ $t("roadMap.text.12") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.13") }}
            </div>
            <div class="price">1 SBI = $0.02</div>-->
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <!--<div class="header">
              {{ $t("roadMap.text.14") }}
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>-->
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.15") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.16") }}
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.17") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.18") }}
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.19") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.20") }}
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.21") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.22") }}
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg stages-middle-line hidden-xs-only hidden-lg-and-up" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-xs-only hidden-lg-and-up" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.23") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.24") }}
            </div>
            <div class="price">1 SBI = $0.02</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.25") }}
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.26") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.27") }}
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line hidden-xs-only hidden-lg-and-up" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-xs-only hidden-lg-and-up" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.28") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.11") }}
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.29") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.30") }}
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.31") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.32") }}
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg stages-middle-line hidden-sm-and-up" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-sm-and-up" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.33") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.34") }}
            </div>
            <div class="price">1 SBI = $0.02</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.35") }}
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line hidden-sm-and-up" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-sm-and-up" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.36") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.37") }}
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.38") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.39") }}
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line hidden-sm-and-up" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-sm-and-up" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.40") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.41") }}
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              {{ $t("roadMap.text.42") }}
            </div>
            <div class="description">
              {{ $t("roadMap.text.43") }}
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import RoadMapLine from './RoadMapLine.vue';
  import RoadMapLineCopy from './RoadMapLineCopy.vue';
  export default {
    name: 'RoadMap',
    components: {
      'road-map-line': RoadMapLine,
      'road-map-line-copy': RoadMapLineCopy
    }
  };
</script>
