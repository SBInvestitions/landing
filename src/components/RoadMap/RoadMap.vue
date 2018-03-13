<template>
  <div id="road-map" class="road-map">
    <el-row class="road-map-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>Дорожная карта проекта</h2>
              <div class="text-block">
                <div class="text">
                  <h3>У проекта 2 стадии:</h3>
                  <h4>1. Геологическое изучение (поисково-оценочная стадия).</h4>
                  <road-map-line order="1" />
                  <h4>2. Разведка и добыча облицовочного камня.</h4>
                  <road-map-line-copy order="2" />
                  <p><strong>После окончания каждой стадии будет происходить рост стоимости целевого актива - месторождений.</strong></p>
                  <p>Геологически изученное месторождение в среднем на рынке стоит 15 миллионов рублей. Стоимость 4х месторождений соответственно 60 миллионов.</p>
                  <p>Разведанное месторождение с образцами добытых каменных блоков, которые доказывают высокое качество сырья, на рынке стоит более 80 миллионов рублей.</p>
                  <p>Таким образом конечная стоимость целевого актива будет более 320 миллионов рублей, обеспечивая 8-кратный рост стоимости SBI токена.</p>
                </div>
              </div>
            </div>
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
