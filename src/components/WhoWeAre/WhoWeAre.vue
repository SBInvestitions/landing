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
                    <p>We are employees of the Group of Companies "Technology":</p>
                    <ul>
                      <li>Invest-Technology, LLC</li>
                      <li>Eco-Technology, LLC</li>
                      <li>Uniq-Art, LLC</li>
                    </ul>
                    <p>Our primary Office</p>
                    <p>Our secondary Office</p>
                    <p>Our Licenses and Certificates:</p>
                    <ul>
                      <li>Certificate of registration of Invest-Technology LLC</li>
                      <li>Certificate of registration in the tax of Invest-Technology LLC</li>
                      <li>Certificate of registration of Eco-Technology LLC</li>
                      <li>Certificate of registration in the tax of Eco-Technology LLC</li>
                      <li>Licenses for engineering, geodetic, engineering-geological, engineering-hydrometeorological, engineering-ecological, engineering-geotechnical surveys.</li>
                    </ul>
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
        teamImage: teamImage
      };
    }
  };
</script>