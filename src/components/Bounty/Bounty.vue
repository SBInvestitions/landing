<template>
  <div id="bounty" class="bounty">
    <el-row class="team-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="16">
            <div class="grid-content bg-purple-light">
              <h2>Бонусы</h2>
              <p>Мы предусмотрели дополнительные бонусы для стратегических партнеров в размере 3,200,000 SBI.</p>
              <p>Чтобы стать стратегическим партнером, необходимо приобрести более чем 1,000,000 SBI влючительно.</p>
              <p>Каждому стратегическому партнеру будет уплачено дополнительно 140 000 SBI на каждый купленный им миллион SBI.</p>
              <p>Каждый, кто приобретает более 2,000,000 SBI, будет включен в состав учредителей ООО "Инвест-Технологии" - компании-владельца месторождений,</p>
              <p>по желанию и при условии наличия гражданства Российской Федерации.</p>
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
    name: 'Bounty'
  };
</script>
