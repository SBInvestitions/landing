<template>
  <div id="road-map" class="road-map">
    <el-row class="road-map-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col class="road-map-header" :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <h2>{{ $t("roadMap.text.1") }}</h2>
            <div class="text-block">
              <p>Каждый этап завершается ростом цены SBI.</p>
              <p>В конце каждой продажи месторождений осуществляется обратный выкуп SBI по указанной в графике цене.</p>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-md-and-down" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              PreICO со скидкой 60%
            </div>
            <div class="price">1 SBI = $0.02</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 августа 2018 года
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 января 2019 года
            </div>
            <div class="description">
              Получение лицензий на разведку
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 июля 2020 года
            </div>
            <div class="description">
              Защита запасов блочного камня
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2021 года
            </div>
            <div class="description">
              Предпродажная подготовка
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              до 31 декабря 2021 года
            </div>
            <div class="description">
              Продажа месторождений и обратный выкуп SBI
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg road-map-stages hidden-sm-and-down" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              PreICO со скидкой 60%
            </div>
            <div class="price">1 SBI = $0.02</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 августа 2018 года
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 января 2019 года
            </div>
            <div class="description">
              Получение лицензий на разведку
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-sm-and-down" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 июля 2020 года
            </div>
            <div class="description">
              Защита запасов блочного камня
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2021 года
            </div>
            <div class="description">
              Предпродажная подготовка
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              до 31 декабря 2021 года
            </div>
            <div class="description">
              Продажа месторождений и обратный выкуп SBI
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg road-map-stages hidden-xs-only" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">1</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              PreICO со скидкой 60%
            </div>
            <div class="price">1 SBI = $0.02</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">2</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 августа 2018 года
            </div>
            <div class="description">
              ICO
            </div>
            <div class="price">1 SBI = $0.052</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-xs-only" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">3</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 января 2019 года
            </div>
            <div class="description">
              Получение лицензий на разведку
            </div>
            <div class="price">1 SBI = $0.053</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">4</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 31 июля 2020 года
            </div>
            <div class="description">
              Защита запасов блочного камня
            </div>
            <div class="price">1 SBI = $0.21</div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg road-map-stages hidden-xs-only" justify="space-around">
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">5</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              До 30 июня 2021 года
            </div>
            <div class="description">
              Предпродажная подготовка
            </div>
            <div class="price">1 SBI = $0.24</div>
          </el-col>
          <el-col class="stage" :xs="8" :sm="8" :md="8" :lg="8" :xl="6">
            <div class="number">6</div>
            <div class="round"></div>
            <div class="vertical-line"></div>
            <div class="header">
              до 31 декабря 2021 года
            </div>
            <div class="description">
              Продажа месторождений и обратный выкуп SBI
            </div>
            <div class="price">1 SBI = $0.27</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import RoadMapLine from './RoadMapLine.vue';
  import RoadMapLineCopy from './RoadMapLineCopy.vue';
  export default {
    name: 'RoadMap',
    components: {
      'road-map-line': RoadMapLine,
      'road-map-line-copy': RoadMapLineCopy
    }
  };
</script>
