<template>
  <div id="footer-block" class="footer-block">
    <el-row :gutter="20">
      <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :xl="{span: 12, offset: 6}">
        <div class="grid-content bg-purple">
          <p>{{ $t("footerBlock.text.1") }}</p>
          <p>{{ $t("footerBlock.text.2") }}</p>
          <p>{{ $t("footerBlock.text.3") }}</p>
          <p>{{ $t("footerBlock.text.4") }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :span="1">
        <div class="grid-content bg-purple">
          <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/github.png" alt="github"></a>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple">
          <div class="vertical-line"></div>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple">
          <a href="https://t.me/sbinvest" class="social-link" target="_blank">
            <img src="./../../assets/socail/telegram.png" alt="telegram channel">
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'FooterBlock'
  };
</script>
