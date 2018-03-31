<template>
  <div id="conditions" class="conditions">
    <el-row class="conditions-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="24">
                  <div class="grid-content bg-purple-light">
                    <h2>{{ $t("conditions.text.1") }}</h2>
                    <el-row class="graph-block" :gutter="20">
                      <el-col :xs="{span: 20, offset: 2}" :sm="12" :md="12" :lg="12" :xl="{span: 8, offset: 4}">
                        <div class="grid-content bg-purple graph-left-block">
                          <div class="graph-left">
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
                      <el-col :xs="{span: 20, offset: 2}" :sm="12" :md="12" :lg="12" :xl="8">
                        <div class="grid-content bg-purple graph-right-block" >
                          <div class="graph-right">
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
                    <div class="footer-text">
                      <p>{{ $t("conditions.text.13") }}</p>
                      <span>SoftCap = 16 000 000/HardCap = 22 800 000</span>
                    </div>
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
  export default {
    name: 'Conditions'
  };
</script>
