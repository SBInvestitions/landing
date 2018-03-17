<template>
  <div id="road-map" class="road-map">
    <el-row class="road-map-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>{{ $t("roadMap.text.1") }}</h2>
              <div class="text-block">
                <div class="text">
                  <h3>{{ $t("roadMap.text.2") }}</h3>
                  <h4>{{ $t("roadMap.text.3") }}</h4>
                  <road-map-line order="1" />
                  <h4>{{ $t("roadMap.text.4") }}</h4>
                  <road-map-line-copy order="2" />
                  <p><strong>{{ $t("roadMap.text.5") }}</strong></p>
                  <p>{{ $t("roadMap.text.6") }}</p>
                  <p>{{ $t("roadMap.text.7") }}</p>
                  <p>{{ $t("roadMap.text.8") }}</p>
                </div>
              </div>
            </div>
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
