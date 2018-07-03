<template>
  <div id="who-we-are" class="who-we-are">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>About us</h2>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :xs="24" :span="12" class="gif right">
                  <img :src="teamImage" class="team-image" alt="team" />
                </el-col>
                <el-col :xs="22" :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <header>We are employees of the Group of Companies "Technology":</header>
                    <ul class="group-list">
                      <li>Invest-Technology, LLC <a target="_blank" href="https://goo.gl/maps/behQLrm7gbF2"><i class="el-icon-location"></i></a></li>
                      <li>Eco-Technology, LLC <a target="_blank" href="https://goo.gl/maps/behQLrm7gbF2"><i class="el-icon-location"></i></a></li>
                      <li>Uniq-Art, LLC <a target="_blank" href="https://goo.gl/maps/Z9sUWR5zL2Q2"><i class="el-icon-location"></i></a></li>
                    </ul>
                    <el-collapse v-model="activeNames" @change="handleChange">
                      <el-collapse-item class="certificates-collapse" title="Our Licenses and Certificates:" name="1">
                        <ul class="list-of-certificates">
                          <li><a target="_blank" href="https://sbinvest.pro/documents/invest2.pdf" download>Certificate of registration of Invest-Technology LLC</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/invest1.pdf" download>Certificate of registration in the tax of Invest-Technology LLC</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco2.pdf" download>Certificate of registration of Eco-Technology LLC</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco1.pdf" download>Certificate of registration in the tax of Eco-Technology LLC</a></li>
                          <li><a target="_blank" href="https://sbinvest.pro/documents/eco3.pdf" download>Licenses for engineering, geodetic, engineering-geological, engineering-hydrometeorological, engineering-ecological, engineering-geotechnical surveys.</a></li>
                        </ul>
                      </el-collapse-item>
                    </el-collapse>
                    <div class="contacts">
                      <header>Our contact information:</header>
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