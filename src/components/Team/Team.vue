<template>
  <div id="team" class="team">
    <el-row>
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="16">
            <div class="grid-content bg-purple-light">
              <h2>Команда</h2>
              <el-row :gutter="40" type="flex" class="row-bg" justify="space-around">
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage1">
                      <div class="stage">
                        <div class="number">1</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Белоногов Александр</h4>
                          CEO проекта. Бизнесмен, эколог, меценат.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple-light">
                    <div class="stone-stage stone-stage2">
                      <div class="stage">
                        <div class="number">2</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Пироженко Геннадий</h4>
                          Геолог с огромным опытом, первооткрыватель многих месторождений Карелии.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage3">
                      <div class="stage">
                        <div class="number">3</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Глариантов Антон</h4>
                          Главный инженер-проектировщик.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage4">
                      <div class="stage">
                        <div class="number">4</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Поздникин Константин</h4>
                          Программист, аналитик.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage5">
                      <div class="stage">
                        <div class="number">5</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Мухин Арсений</h4>
                          Талантливый программист международного уровня.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage6">
                      <div class="stage">
                        <div class="number">6</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Лузгин Сергей</h4>
                          Инженер, администратор.
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                  <div class="grid-content bg-purple">
                    <div class="stone-stage stone-stage7">
                      <div class="stage">
                        <div class="number">7</div>
                        <div class="vertical-line"></div>
                        <div class="round"></div>
                        <div class="text">
                          <h4>Игнатьева Александра</h4>
                          Арт-директор, дизайнер.
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
    name: 'Team'
  };
</script>
