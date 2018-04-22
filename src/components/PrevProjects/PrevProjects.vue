<template>
  <div id="prev-projects" class="prev-projects">
    <el-row class="projects-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col class="projects-header" :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <h2>Наши прошлые проекты</h2>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line" justify="space-around"></el-row>
        <el-row type="flex" class="row-bg projects" justify="space-around">
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">

            <el-row class="round">
              <img src="./../../assets/projects/kalalam2.png" alt="kalalampi">
            </el-row>
            <el-row class="divider"></el-row>
            <el-row class="header">
              До 30 июня 2018 года
            </el-row>
            <el-row class="description">
              preICO со скидкой 100500%
            </el-row>

          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/petrogranit2.png" alt="petrogranit">
            </div>
            <div class="divider"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              preICO со скидкой 100500%
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/muezer2.png" alt="muezerskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              preICO со скидкой 100500%
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg projects" justify="space-around">
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/mavar2.png" alt="mavarskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              preICO со скидкой 100500%
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/hakosel2.png" alt="hakoselskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              preICO со скидкой 100500%
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/hakosel2.png" alt="sever-stroi">
            </div>
            <div class="divider"></div>
            <div class="header">
              До 30 июня 2018 года
            </div>
            <div class="description">
              preICO со скидкой 100500%
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
    name: 'PrevProjects'
  };
</script>
