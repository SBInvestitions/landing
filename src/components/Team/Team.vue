<template>
  <div id="team" class="team">
    <el-row class="team-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="20" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>Команда</h2>
              <el-row :gutter="20" type="flex" justify="center">
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">1</div>
                      <div class="name">Белоногов Александр</div>
                      <div class="text">
                        CEO проекта. Бизнесмен, эколог, меценат.
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple-light">
                    <div class="member">
                      <div class="ava">2</div>
                      <div class="name">Пироженко Геннадий</div>
                      <div class="text">
                        Геолог с огромным опытом, первооткрыватель многих месторождений Карелии.
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">3</div>
                      <div class="name">Глариантов Антон</div>
                      <div class="text">
                        Главный инженер-проектировщик.
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">4</div>
                      <div class="name">Поздникин Константин</div>
                      <div class="text">
                        Программист, аналитик.
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" justify="center">
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">5</div>
                      <div class="name">Мухин Арсений</div>
                      <div class="text">
                        Талантливый программист международного уровня.
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">6</div>
                      <div class="name">Лузгин Сергей</div>
                      <div class="text">
                        Инженер, администратор.
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">7</div>
                      <div class="name">Игнатьева Александра</div>
                      <div class="text">
                        Арт-директор, дизайнер.
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
