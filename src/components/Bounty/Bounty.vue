<template>
  <div id="bounty" class="bounty">
    <el-row class="bounty-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>{{ $t("bounty.text.1") }}</h2>
              <!--<p>{{ $t("bounty.text.2") }} <span>3.200.000,00 SBI</span></p>
              <span class="round"></span>
              <p>{{ $t("bounty.text.3") }} <span>1.000.000,00 SBI</span> {{ $t("bounty.text.4") }}</p>
              <span class="round"></span>
              <p>{{ $t("bounty.text.5") }} <span>100.000,00 SBI</span> {{ $t("bounty.text.6") }}</p>
              <p><span>1.000.000,00 SBI</span></p>
              <span class="round"></span>
              <p><span>{{ $t("bounty.text.7") }} 2.000.000,00 SBI</span></p>
              <p>{{ $t("bounty.text.8") }}</p>-->
              <p>For those who want to participate in the promotion of our project (reposts, links, attracting customers), we are developing a Bounty program.</p>
              <p>The holding of Bounty is allocated 3,200,000.00 SBI</p>
              <p>Those who want to participate in the bounty program send requests to <a href="mailto:bounty@sbinvest.pro">bounty@sbinvest.pro</a></p>
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
    name: 'Bounty'
  };
</script>
