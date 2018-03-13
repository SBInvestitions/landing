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
                    <h2>Условия продажи</h2>
                    <el-row class="graph-block" :gutter="20">
                      <el-col :xs="{span: 20, offset: 2}" :sm="12" :md="12" :lg="12" :xl="{span: 8, offset: 4}">
                        <div class="grid-content bg-purple graph-left-block">
                          <div class="graph-left">
                            <div class="top top-1">Распределение инвестиций</div>
                            <div class="graph-svg" />
                            <div class="top top-2">Разработка месторождений - <strong>16,000,000 рублей.</strong></div>
                            <div class="top top-3">Маркетинг - <strong>2,000,000 рублей.</strong></div>
                            <div class="top top-4">Административные затраты - <strong>2,200,000 рублей.</strong></div>
                            <div class="top top-5">Представительские расходы - <strong>1,600,000 рублей.</strong></div>
                            <div class="top top-6">Аудит и безопасность - <strong>1,000,000 рублей.</strong></div>
                            <div class="top top-7"><strong>Всего необходимо 22,800,000 рублей инвестиций.</strong></div>
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="{span: 20, offset: 2}" :sm="12" :md="12" :lg="12" :xl="8">
                        <div class="grid-content bg-purple graph-right-block" >
                          <div class="graph-right">
                            <div class="top top-1">Распределение SBI</div>
                            <div class="graph-svg" />
                            <div class="top top-2">Продажа - <strong>22,800,000 SBI.</strong></div>
                            <div class="top top-3">Команда - <strong>12,000,000 SBI.</strong></div>
                            <div class="top top-4">Стратегические партнеры - <strong>3,200,000 рублей.</strong></div>
                            <div class="top top-5">Реклама (Bounty, Promo) - <strong>2,000,000 SBI.</strong></div>
                            <div class="top top-7"><strong>Всего 40,000,000 SBI.</strong></div>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <div class="footer-text">
                      <p>После продажи месторождений и обратного выкупа SBI, мы планируем использовать токены для работы над новыми проектами.</p>
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
