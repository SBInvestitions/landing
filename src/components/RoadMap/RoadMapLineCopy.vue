<template>
  <div id="road-map-line-copy" class="road-map-line">
    <div class="road-map-stone">
      <el-row :gutter="40">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage1">
              <div class="stage">
                <div class="number">1</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Октябрь 2020</h5>
                  Выбор и согласование  перспективных участков.
                  Подача заявки на лицензирование.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple-light">
            <div class="stone-stage stone-stage2">
              <div class="stage">
                <div class="number">2</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Ноябрь 2020</h5>
                  Получение лицензии с правом пользования недрами с целью геологического изучения участка недр местного значения.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage3">
              <div class="stage">
                <div class="number">3</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Июнь 2018</h5>
                  Составление и согласование проекта на проведение поисково-оценочных работ, получение экспертного заключения на проект.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage4">
              <div class="stage">
                <div class="number">4</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Июль 2018</h5>
                  Оформление  разрешительной документации на проведение поисково-оценочных  работ.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage5">
              <div class="stage">
                <div class="number">5</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Август 2018 - Март 2020</h5>
                  Полевые работы по геологическому изучению участка недр.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage6">
              <div class="stage">
                <div class="number">6</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Март 2020</h5>
                  Представление отчета на экспертизу в Минприроды Республики Карелия.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage7">
              <div class="stage">
                <div class="number">7</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Июнь 2020</h5>
                  Оформление свидетельств о первооткрывательстве выявленных объектов облицовочного камня.
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <div class="grid-content bg-purple">
            <div class="stone-stage stone-stage8">
              <div class="stage">
                <div class="number">8</div>
                <div class="vertical-line"></div>
                <div class="round"></div>
                <div class="text">
                  <h5>Март 2018</h5>
                  Подача заявки на получение лицензии на разведку и добычу облицовочного камня.
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
