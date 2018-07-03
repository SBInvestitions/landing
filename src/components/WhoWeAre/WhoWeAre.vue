<template>
  <div id="who-we-are" class="who-we-are">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>{{ $t('whoWeAre.text.1') }}</h2>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif right">
                  <img :src="teamImage" class="team-image" alt="team" />
                </el-col>
                <el-col :xs="22" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <header>{{ $t('whoWeAre.text.2') }}</header>
                    <ul class="group-list">
                      <li>{{ $t('whoWeAre.text.3') }}<a target="_blank" href="https://goo.gl/maps/behQLrm7gbF2"><i class="el-icon-location"></i></a></li>
                      <li>{{ $t('whoWeAre.text.4') }}<a target="_blank" href="https://goo.gl/maps/behQLrm7gbF2"><i class="el-icon-location"></i></a></li>
                      <li>{{ $t('whoWeAre.text.5') }}<a target="_blank" href="https://goo.gl/maps/Z9sUWR5zL2Q2"><i class="el-icon-location"></i></a></li>
                    </ul>
                    <el-collapse v-model="activeNames" @change="handleChange">
                      <el-collapse-item class="certificates-collapse" v-bind:title="$t('whoWeAre.text.6')" name="1">
                        <ul class="list-of-certificates">
                          <li><a target="_blank" href="https://sbinvest.pro/documents/invest2.pdf" download>{{ $t('whoWeAre.text.7') }}</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/invest1.pdf" download>{{ $t('whoWeAre.text.8') }}</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco2.pdf" download>{{ $t('whoWeAre.text.9') }}</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco1.pdf" download>{{ $t('whoWeAre.text.10') }}</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco3.pdf" download>{{ $t('whoWeAre.text.11') }}</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco4.pdf" download>{{ $t('whoWeAre.text.13') }}</a></li>
                        </ul>
                      </el-collapse-item>
                    </el-collapse>
                    <div class="contacts">
                      <header>{{ $t('whoWeAre.text.12') }}</header>
                      <p><i class="el-icon-phone"></i> 8 (814)2 33-20-04</p>
                      <p><i class="el-icon-mobile-phone"></i> +7 (921) 450-66-73</p>
                      <p><i class="el-icon-message"></i><a href="mailto:invest@sbinvest.pro"> invest@sbinvest.pro</a></p>
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
  import teamImage from './../../assets/team.jpg';
  export default {
    name: 'WhoWeAre',
    data () {
      return {
        teamImage: teamImage,
        activeNames: ['0']
      };
    },
    methods: {
      handleChange (val) {
        console.log(val);
      }
    }
  };
</script>