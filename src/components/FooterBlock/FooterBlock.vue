<template>
  <div id="footer-block" class="footer-block">
   <!-- <el-row :gutter="20">
      <el-col class="stones-top">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="38" viewBox="0 0 136 38">
          <image id="Слой_5" data-name="Слой 5" width="136" height="38" xlink:href="data:img/png;base64,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"/>
        </svg>
      </el-col>
    </el-row>-->
    <!--<el-row :gutter="20">
      <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :md="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :xl="{span: 12, offset: 6}">
        <div class="grid-content bg-purple">
          <p>{{ $t("footerBlock.text.1") }}</p>
          <p>{{ $t("footerBlock.text.2") }}</p>
          <p>{{ $t("footerBlock.text.3") }}</p>
          <p>{{ $t("footerBlock.text.4") }}</p>
        </div>
      </el-col>
    </el-row>-->

   <!-- <el-row :gutter="20">
      <el-col class="stones-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="185" height="38" viewBox="0 0 185 38">
          <image id="Векторный_смарт-объект" data-name="Векторный смарт-объект" width="185" height="38" xlink:href="data:img/png;base64,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"/>
        </svg>
      </el-col>
    </el-row>-->

    <!--<el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col>
        <div class="text-block">
          Вопросы
        </div>
      </el-col>
      <el-col>
        <div class="text-block">
          Новости
        </div>
      </el-col>
      <el-col>
        <div class="text-block">
          Документы
        </div>
      </el-col>
    </el-row>-->

    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <div class="text-block">
          Все права защищены
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center">
          <el-col>
            <div class="text-block">
              <a href="" target="_blank">Условия использования</a>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <div class="vertical-line"></div>
            </div>
          </el-col>
          <el-col>
            <div class="text-block">
              <a href="" target="_blank">Политика конфиденциальности</a>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <div class="vertical-line"></div>
            </div>
          </el-col>
          <el-col>
            <div class="text-block">
              <a href="" target="_blank">Соглашение о продаже SBI</a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :span="1">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="light" content="Project Github Repo" placement="top-start">
            <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/github.png" alt="github"></a>
          </el-tooltip>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="light" content="Project Telegram Channel" placement="top-start">
            <a href="https://t.me/sbinvest" class="social-link" target="_blank">
              <img src="./../../assets/socail/telegram.png" alt="telegram channel">
            </a>
          </el-tooltip>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="light" content="Project Facebook Group" placement="top-start">
            <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/facebook.jpg" alt="github"></a>
          </el-tooltip>
        </div>
      </el-col>

      <el-col :span="1">
        <div class="grid-content bg-purple">
          <el-tooltip class="item" effect="light" content="Project Vkontakte Group" placement="top-start">
            <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/vkontakte.png" alt="github"></a>
          </el-tooltip>
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
