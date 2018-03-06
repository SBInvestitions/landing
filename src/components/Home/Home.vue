<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg menu-row" justify="center">
        <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">SBInvestitions</el-menu-item>
          <el-menu-item index="2">About Project</el-menu-item>
          <el-menu-item index="3">DAICO conditions</el-menu-item>
          <el-menu-item index="4">Roadmap</el-menu-item>
          <el-menu-item index="5">Team</el-menu-item>
          <el-menu-item index="6">Bounty</el-menu-item>
          <el-menu-item index="7">Clients</el-menu-item>
          <el-menu-item index="8">FAQ</el-menu-item>
          <!-- WHAT IS DAICO https://cointelegraph.com/explained/what-is-a-daico-explained -->
          <el-submenu index="9" class="el-sub-menu-sbi">
            <template slot="title">Docs</template>
            <el-menu-item index="9-1">Whitepaper</el-menu-item>
            <el-menu-item index="9-2">Business Summary</el-menu-item>
          </el-submenu>
          <el-menu-item index="10">Sign-in</el-menu-item>
          <el-menu-item index="11">Sign-up</el-menu-item>
        </el-menu>
      </el-row>
      <top-header/>
    </el-header>
    <el-main>
      <five-stones/>
      <el-row class="about-company">
        <el-col :span="24" class="top-bottom">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="16">
              <div class="grid-content bg-purple-light">
                <el-row type="flex" class="row-bg" justify="space-around">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-light">
                      <h3>О проекте</h3>
                      <div class="text-block">
                        <div class="text">
                          <p>Мы располагаем геологической информацией об участках недр в Суоярвском районе Республики Карелия
                          с ресурсами залегания блочного камня в количестве 4 штук с ориентировочными запасами блоков 100 000 м3 каждый.
                          Такого запаса хватит на 40-50 лет разработки.</p>
                          <p>Для подготовки данных месторождений к разработке, оформления лицензий и последующей продажи добывающим компаниям мы привлекаем средства инвесторов.</p>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>

                <h3>Образцы камня</h3>
                <el-row :gutter="12" class="granit">
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple-light">
                      <p>Красный гранит</p>
                      <img src="./../../../src/assets/red-granit.png" alt="red granit">
                    </div>
                  </el-col>
                  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple">
                      <p>Черный гранит</p>
                      <img src="./../../../src/assets/black-granit.png" alt="black granit">
                    </div>
                  </el-col>
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>

                <h3>Применение камня</h3>
                <div class="text-block">
                  <div class="text">
                    <p>
                      Поскольку камень, найденный нашими специалистами, высокого качества и востребованных цветов,
                      стоимость продажи каждого месторождения на рынке на сегодняшний день превышает 100 миллионов рублей.
                    </p>
                  </div>
                </div>
                <el-row type="flex" class="row-bg granit-samples" justify="space-around">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <img src="./../../../src/assets/i1.png" alt="granit sample 1">
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                      <img src="./../../../src/assets/i2.png" alt="granit sample 2">
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <img src="./../../../src/assets/i3.png" alt="granit sample 3">
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <img src="./../../../src/assets/i4.png" alt="granit sample 4">
                    </div>
                  </el-col>
                </el-row>
                <div class="text-block">
                  <div class="text">
                    <p>
                      Более подробную информацию вы можете прочитать в нашем <a href="https://sbinvest.pro/docs/white-paper.ru.pdf">Коммерческом предложении</a>.
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import TopHeader from './../TopHeader/TopHeader.vue';
  import FiveStones from './../FiveStones/FiveStones.vue';

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      'top-header': TopHeader,
      'five-stones': FiveStones
    }
  };
</script>
