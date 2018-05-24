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

                    <el-row class="conditions-block" :gutter="20">
                      <div class="text-block">
                        <p>{{ $t("conditions.text.24") }}</p>
                        <p>{{ $t("conditions.text.25") }}</p>
                      </div>
                    </el-row>
                    <el-row class="pre-sale-block" :gutter="20">
                      <el-col :span="12">
                        {{ $t("conditions.text.26") }}<strong>{{ $t("conditions.text.27") }}</strong>{{ $t("conditions.text.28") }}
                      </el-col>
                      <el-col :span="12">
                        {{ $t("conditions.text.29") }}<strong>01.06.18 - 30.06.18</strong>
                      </el-col>
                    </el-row>
                    <el-row class="sale-block" :gutter="20">
                      <el-col :span="12">
                        <p>{{ $t("conditions.text.30") }}<strong>1 SBI = $0.052</strong></p>
                        <p>{{ $t("conditions.text.31") }}<strong>01.07.18 - 31.08.18</strong></p>
                      </el-col>
                      <el-col :span="12">
                        <p>Soft-Cap: <strong>-</strong></p>
                        <p>Hard-Cap: <strong>$1,000,000.00</strong></p>
                      </el-col>
                    </el-row>

                    <el-row class="graph-block" :gutter="20">
                      <el-col :xs="{span: 20, offset: 2}" :sm="{span: 10, offset: 1}" :md="11" :lg="11" :xl="11">
                        <div class="grid-content bg-purple graph-left-block">
                          <div class="graph-left" id="graph-left">
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
                          <div class="graph-right" id="graph-right">
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
  export default {
    name: 'Conditions',
    methods: {
      lineRescale: function () {
        const left = document.getElementById('graph-left');
        const right = document.getElementById('graph-right');
        if (left) {
          const leftHeight = left.offsetHeight;
          left.pseudoStyle('before', 'height', `${leftHeight - 35}px !important`, 'left-class');
        }
        if (right) {
          const rightHeight = right.offsetHeight;
          right.pseudoStyle('before', 'height', `${rightHeight - 35}px !important`, 'right-class');
        }
      }
    },
    mounted () {
      this.lineRescale();
    }
  };
</script>
