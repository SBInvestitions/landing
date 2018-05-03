<template>
  <div id="about-company" class="about-company">
    <el-row class="about-company-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
            <div class="grid-content bg-purple-light">
              <el-row>
                <el-col :span="24" class="header">
                  <h2>В чем наш бизнес?</h2>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>Мы регистрируем пионерскую компанию.</p>
                    <p>Используя свой опыт и знания мы находим участок с месторождениями блочного камня, оформляем на него лицензию на недропользование 25 лет,
                    проводим геологическую разведку, получаем образцы камня и продаем компанию с лицензией крупным инвесторам готовым разрабатывать месторождение.</p>
                  </div>
                </el-col>
                <el-col :span="12" class="gif right">
                  <video autoplay="autoplay" loop="loop" id="video-gif-1" width="80%" height="60%">
                    <source src="./../../assets/videos/1.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/1_1.gif" />
                  </video>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :span="12" class="gif left">
                  <video autoplay="autoplay" loop="loop" id="video-gif-2" width="80%" height="60%">
                    <source src="./../../assets/videos/2.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/2-2.gif" />
                  </video>
                </el-col>
                <el-col :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>Один крупный инвестор несет проекту риски в стабильном финансировании и уменьшает количество месторождений для продажи.</p>
                    <p>Привлекая большое количество инвесторов мы делаем проект гибче и стабильнее, а также увеличиваем объемы работ и <strong>добавленная стоимость вложенного доллара растет в разы!</strong></p>
                  </div>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :span="12" class="idea left">
                  <div class="grid-content bg-purple-light text-block">
                    <p>Мы даем своим инвесторам возможность участия в руководстве финансированием проекта <strong>на каждом этапе</strong> и тем самым <strong>уменьшаем риски.</strong></p>
                    <p>Работая по проекту мы создаем <strong>полностью открытую и честную базу данных</strong> по участкам недр предлагаемых покупателям месторождений и продукции.</p>
                    <p>Кроме наших участков туда будут занесены месторождения предлагаемые к продаже, а также продукция любых компаний и частных лиц.</p>
                  </div>
                </el-col>
                <el-col :span="12" class="gif right">
                  <video autoplay="autoplay" loop="loop" id="video-gif-3" width="80%" height="60%">
                    <source src="./../../assets/videos/2.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/2-2.gif" />
                  </video>
                </el-col>
              </el-row>

              <el-row class="block-row">
                <el-col :span="12" class="gif left">
                  <video autoplay="autoplay" loop="loop" id="video-gif-4" width="80%" height="60%">
                    <source src="./../../assets/videos/2.mp4" type="video/mp4" />
                    <img src="./../../assets/videos/2-2.gif" />
                  </video>
                </el-col>
                <el-col :span="12" class="idea right">
                  <div class="grid-content bg-purple-light text-block">
                    <p>Естественно они должны будут пройти нашу или любую другую независимую экспертизу и оценку. Результаты экспертизы, как и рейтинги экспертов, <strong>будут храниться в блокчейне.</strong></p>
                    <p>Любой заинтересованый участник рынка, по всему миру, <strong>воспользовавшись токенами SBI</strong>, сможет получить информацию, оценку или поместить необходимую информацию в базу.</p>
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
  import 'element-ui/lib/theme-chalk/display.css';

  export default {
    name: 'AboutCompany',
    data () {
      return {
      };
    }
  };
</script>
