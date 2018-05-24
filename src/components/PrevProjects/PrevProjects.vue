<template>
  <div id="prev-projects" class="prev-projects">
    <el-row class="projects-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col class="projects-header" :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <h2>{{ $t("prevProjects.text.1") }}</h2>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg stages-middle-line" justify="space-around"></el-row>

        <el-row type="flex" class="row-bg projects hidden-md-and-down" justify="space-around">
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">

            <el-row class="round">
              <img src="./../../assets/projects/kalalam2.png" alt="kalalampi">
            </el-row>
            <el-row class="divider"></el-row>
            <el-row class="header">
              {{ $t("prevProjects.text.2") }}
            </el-row>
            <el-row class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,200,000
            </el-row>

          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/petrogranit2.png" alt="petrogranit">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.4") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,500,000
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/muezer2.png" alt="muezerskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.5") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" class="row-bg projects hidden-md-and-down" justify="space-around">
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/sever2.png" alt="sever-stroi">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.6") }}
            </div>
            <div class="description">
              <span class="red">{{ $t("prevProjects.text.7") }} ~ $500,000</span>
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/mavar2.png" alt="mavarskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.8") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $500,000
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/hakosel2.png" alt="hakosel">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.9") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
            </div>
          </el-col>
        </el-row>


        <el-row type="flex" class="row-bg projects hidden-lg-and-up hidden-xs-only" justify="space-around">
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <el-row class="round">
              <img src="./../../assets/projects/kalalam2.png" alt="kalalampi">
            </el-row>
            <el-row class="divider"></el-row>
            <el-row class="header">
              {{ $t("prevProjects.text.2") }}
            </el-row>
            <el-row class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,200,000
            </el-row>
          </el-col>
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/petrogranit2.png" alt="petrogranit">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.4") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,500,000
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg projects hidden-lg-and-up hidden-xs-only" justify="space-around">
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/muezer2.png" alt="muezerskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.5") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/sever2.png" alt="sever-stroi">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.6") }}
            </div>
            <div class="description">
              <span class="red">{{ $t("prevProjects.text.7") }} ~ $500,000</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg projects hidden-lg-and-up hidden-xs-only" justify="space-around">
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/mavar2.png" alt="mavarskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.8") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $500,000
            </div>
          </el-col>
          <el-col class="project" :xs="8" :sm="12" :md="10" :lg="8" :xl="8">
            <div class="round">
              <img src="./../../assets/projects/hakosel2.png" alt="hakosel">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.9") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
            </div>
          </el-col>
        </el-row>

        <el-row class="row-bg projects hidden-sm-and-up" >
          <el-col class="project" :span="24">

            <el-row class="round">
              <img src="./../../assets/projects/kalalam2.png" alt="kalalampi">
            </el-row>
            <el-row class="divider"></el-row>
            <el-row class="header">
              {{ $t("prevProjects.text.2") }}
            </el-row>
            <el-row class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,200,000
            </el-row>

          </el-col>
          <el-col class="project" :span="24">
            <div class="round">
              <img src="./../../assets/projects/petrogranit2.png" alt="petrogranit">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.4") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,500,000
            </div>
          </el-col>
          <el-col class="project" :span="24">
            <div class="round">
              <img src="./../../assets/projects/muezer2.png" alt="muezerskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.5") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
            </div>
          </el-col>
          <el-col class="project" :span="24">
            <div class="round">
              <img src="./../../assets/projects/sever2.png" alt="sever-stroi">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.6") }}
            </div>
            <div class="description">
              <span class="red">{{ $t("prevProjects.text.7") }} ~ $500,000</span>
            </div>
          </el-col>
          <el-col class="project" :span="24">
            <div class="round">
              <img src="./../../assets/projects/mavar2.png" alt="mavarskoe">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.8") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $500,000
            </div>
          </el-col>
          <el-col class="project" :span="24">
            <div class="round">
              <img src="./../../assets/projects/hakosel2.png" alt="hakosel">
            </div>
            <div class="divider"></div>
            <div class="header">
              {{ $t("prevProjects.text.9") }}
            </div>
            <div class="description">
              {{ $t("prevProjects.text.3") }} ~ $1,000,000
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
