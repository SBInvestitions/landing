<template>
  <div id="road-map-line-copy" class="road-map-line">
    <div class="road-map-stone">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage1">
              <div class="stage">
                <div class="number">1</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Октябрь 2020</h5>
                  Получение лицензии на разведку и добычу блочного камня.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple-light">
            <div class="stone-stage stone-stage2">
              <div class="stage">
                <div class="number">2</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Ноябрь 2020</h5>
                  Инженерно-геодезические и прочие изыскания по промышленный проект.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage3">
              <div class="stage">
                <div class="number">3</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Март 2021</h5>
                  Разработка проекта промышленной отработки месторождения безвзрывным способом.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage5">
              <div class="stage">
                <div class="number">4</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Май 2021</h5>
                  Согласование проекта промышленной отработки месторождения в Минприроды РК.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage4">
              <div class="stage">
                <div class="number">5</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Июнь 2021</h5>
                  Оформление прав пользования земельным участком для промышленной разработки месторождения.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage6">
              <div class="stage">
                <div class="number">6</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Июнь 2021</h5>
                  Получение горноотводного акта.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage7">
              <div class="stage">
                <div class="number">7</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Август 2021</h5>
                  Разработка и согласование Плана развития горных работ по объекту.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage8">
              <div class="stage">
                <div class="number">8</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Август 2021</h5>
                  Начало горных работ.
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'RoadMapLineCopy',
    props: ['order']
  };
</script>
