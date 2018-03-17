<template>
  <div id="road-map-line-copy" class="road-map-line">
    <div class="road-map-stone">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage1">
              <div class="stage">
                <div class="number">1</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.1") }}</h5>
                  {{ $t("roadMapLine.secondStage.2") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple-light">
            <div class="stone-stage stone-stage2">
              <div class="stage">
                <div class="number">2</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.3") }}</h5>
                  {{ $t("roadMapLine.secondStage.4") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage3">
              <div class="stage">
                <div class="number">3</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.5") }}</h5>
                  {{ $t("roadMapLine.secondStage.6") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage5">
              <div class="stage">
                <div class="number">4</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.7") }}</h5>
                  {{ $t("roadMapLine.secondStage.8") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage4">
              <div class="stage">
                <div class="number">5</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.9") }}</h5>
                  {{ $t("roadMapLine.secondStage.10") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage6">
              <div class="stage">
                <div class="number">6</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.11") }}</h5>
                  {{ $t("roadMapLine.secondStage.12") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage7">
              <div class="stage">
                <div class="number">7</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.13") }}</h5>
                  {{ $t("roadMapLine.secondStage.14") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage8">
              <div class="stage">
                <div class="number">8</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>{{ $t("roadMapLine.secondStage.15") }}</h5>
                  {{ $t("roadMapLine.secondStage.16") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'RoadMapLineCopy',
    props: ['order']
  };
</script>
