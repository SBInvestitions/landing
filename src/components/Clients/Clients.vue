<template>
  <div id="clients" class="clients">
    <el-row>
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>Наши клиенты</h2>
              <el-row :gutter="20">
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo"></div>
                        <div class="name"><a target="_blank" href="http://pntrans.info">ООО Промнерудтранс</a></div>
                        <div class="text">
                          Крупнейшая транспортно-логистическая по карьерным грузоперевозкам в Карелии.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple-light">
                    <div class="clients">
                      <div class="client">
                        <div class="logo"></div>
                        <div class="name"><a target="_blank" href="http://petrokam.pro">ООО ПетроКам</a></div>
                        <div class="text">
                          Владелец карьеров по добыче блочного камня и цехов камнеобработки.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo"></div>
                        <div class="name"><a target="_blank" href="http://nerudtrade.ru">ООО Щебень Карелии</a></div>
                        <div class="text">
                          Продажа щебня с доставкой с любых карьеров в Карелии.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo"></div>
                        <div class="name"><a target="_blank" href="http://eco-tehnologii.ru">ООО ЭкоТехнологии</a></div>
                        <div class="text">
                          Экологическое проектирование, строительство.
                        </div>
                      </div>
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
    name: 'Clients'
  };
</script>
