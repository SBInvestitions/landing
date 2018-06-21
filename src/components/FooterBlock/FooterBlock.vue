<template>
  <div id="footer-block" class="footer-block">
    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <div class="text-block">
          {{ $t("footerBlock.text.1") }}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg hidden-xs-only" justify="center">
      <el-col :span="20">
        <el-row :gutter="20" type="flex" class="row-bg" justify="center">
          <el-col>
            <div class="text-block">
              <a target="_blank" href="https://sbinvest.pro/documents/UserAgreement.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
                <span slot="title">Условия использования</span>
              </a>
              <a target="_blank"  href="https://sbinvest.pro/documents/UserAgreement.en.pdf" download v-if="this.$i18n.locale === 'en'">
                <span slot="title">Terms of Use</span>
              </a>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <div class="vertical-line"></div>
            </div>
          </el-col>
          <el-col>
            <div class="text-block">
              <a target="_blank" href="https://sbinvest.pro/documents/PersonalData.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
                <span slot="title">Политика конфиденциальности</span>
              </a>
              <a target="_blank"  href="https://sbinvest.pro/documents/PersonalData.en.pdf" download v-if="this.$i18n.locale === 'en'">
                <span slot="title">Privacy Policy</span>
              </a>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <div class="vertical-line"></div>
            </div>
          </el-col>
          <el-col>
            <div class="text-block">
              <a target="_blank" href="https://sbinvest.pro/documents/SalesAgreement.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
                <span slot="title">Соглашение о продаже</span>
              </a>
              <a target="_blank"  href="https://sbinvest.pro/documents/SalesAgreement.en.pdf" download v-if="this.$i18n.locale === 'en'">
                <span slot="title">Sale agreement</span>
              </a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="row-bg hidden-sm-and-up">
      <el-col>
        <div class="text-block">
          <a target="_blank" href="https://sbinvest.pro/documents/UserAgreement.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <span slot="title">Условия использования</span>
          </a>
          <a target="_blank"  href="https://sbinvest.pro/documents/UserAgreement.en.pdf" download v-if="this.$i18n.locale === 'en'">
            <span slot="title">Terms of Use</span>
          </a>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col>
        <div class="text-block">
          <a target="_blank" href="https://sbinvest.pro/documents/PersonalData.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <span slot="title">Политика конфиденциальности</span>
          </a>
          <a target="_blank"  href="https://sbinvest.pro/documents/PersonalData.en.pdf" download v-if="this.$i18n.locale === 'en'">
            <span slot="title">Privacy Policy</span>
          </a>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col>
        <div class="text-block">
          <a target="_blank" href="https://sbinvest.pro/documents/SalesAgreement.ru.pdf" download v-if="this.$i18n.locale === 'ru'">
            <span slot="title">Соглашение о продаже</span>
          </a>
          <a target="_blank"  href="https://sbinvest.pro/documents/SalesAgreement.en.pdf" download v-if="this.$i18n.locale === 'en'">
            <span slot="title">Sale agreement</span>
          </a>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="https://github.com/SBInvestitions" class="social-link" target="_blank"><img src="./../../assets/socail/f-github.png" alt="github"></a>
        </div>
      </el-col>

      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="https://t.me/joinchat/DY1Upw822WC1LcPgmEAtzw" class="social-link" target="_blank">
            <img src="./../../assets/socail/f-telegram.png" alt="telegram channel">
          </a>
        </div>
      </el-col>

      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="https://www.youtube.com/channel/UCXrK81VbNIS1PF80xVjJukA/" class="social-link" target="_blank"><img src="./../../assets/socail/f-youtube.png" alt="youtube"></a>
        </div>
      </el-col>

      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="https://twitter.com/ABelonogov" class="social-link" target="_blank">
            <img src="./../../assets/socail/f-twitter.png" alt="twitter">
          </a>
        </div>
      </el-col>

      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="mailto:invest@sbinvest.pro" target="_top" class="social-link"><img src="./../../assets/socail/f-mail.png" alt="mail"></a>
        </div>
      </el-col>

      <el-col :xs="4" :span="1">
        <div class="grid-content bg-purple">
          <a href="https://www.instagram.com/sbinvestitions/" class="social-link" target="_blank"><img src="./../../assets/socail/f-instagram.png" alt="instagram"></a>
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
