<template>
  <div id="footer-block" class="footer-block">
    <el-row :gutter="20">
      <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :xl="{span: 12, offset: 6}">
        <div class="grid-content bg-purple">
          <p>В соответствии с законом о недрах Российской Федерации, полномочия по распределению недр местного назначения, так называемые
          общедоступные полезные ископаемые, относятся к власти Республики Карелия.</p>
          <p>Местными законами и регламентами по распределению прав пользования участками недр установлено право первооткрывателя месторождения
            (так же установлено в Законе О Недрах Российской Федерации) на получение лицензии на недропользование без проведения аукциона (конкурса).</p>
          <p>На основании этих законов и подзаконных актов мы подаем заявки в Министерство Природных Ресурсов и Экологии Республики Карелия
          на получение лицензии на добычу полезного ископаемого.</p>
          <p>Мы должны понимать, что несем все риски, связанные с наличием-отсутствием на нашем участке полезного ископаемого и для первооткрывательства должны
          сделать большой объем работ с целью подтверждения наших данных комиссии Министерства.</p>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
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
