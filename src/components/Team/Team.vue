<template>
  <div id="team" class="team">
    <el-row class="team-row">
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="20" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>Команда</h2>
              <el-row :gutter="20">
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/11.jpg" alt="Belonogov">
                      </div>
                      <div class="name">Белоногов Александр</div>
                      <div class="text">
                        CEO проекта. Бизнесмен, эколог, меценат.
                      </div>
                      <a href="https://www.facebook.com/profile.php?id=100011838558872" class="social-link" target="_blank">
                        <img src="./../../assets/socail/facebook.jpg" alt="facebook profile">
                      </a>
                      <a href="https://vk.com/id163627615" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple-light">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/22.jpg" alt="Pirozhenko">
                      </div>
                      <div class="name">Пироженко Геннадий</div>
                      <div class="text">
                        Геолог, первооткрыватель месторождений в Карелии.
                      </div>
                      <a href="https://vk.com/id23330904" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/33.jpg" alt="Glariantov">
                      </div>
                      <div class="name">Глариантов Антон</div>
                      <div class="text">
                        Главный инженер-проектировщик, землеустроитель.
                      </div>
                      <a href="https://vk.com/id6166835" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/44.jpg" alt="Pozdnikin">
                      </div>
                      <div class="name">Поздникин Константин</div>
                      <div class="text">
                        Программист, аналитик.
                      </div>
                      <a href="https://www.facebook.com/profile.php?id=100010511285400" class="social-link" target="_blank">
                        <img src="./../../assets/socail/facebook.jpg" alt="facebook profile">
                      </a>
                      <a href="https://vk.com/ponyman" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava"><img src="./../../assets/avas/77.jpg" alt="Mukhin"></div>
                      <div class="name">Мухин Арсений</div>
                      <div class="text">
                        Ведущий программист
                      </div>
                      <a href="https://www.facebook.com/krappt" class="social-link" target="_blank">
                        <img src="./../../assets/socail/facebook.jpg" alt="facebook profile">
                      </a>
                      <a href="https://www.linkedin.com/in/krappt/" class="social-link" target="_blank">
                        <img src="./../../assets/socail/linkedin.png" alt="linkedin profile">
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/55.jpg" alt="Luzgin">
                      </div>
                      <div class="name">Лузгин Сергей</div>
                      <div class="text">
                        Инженер, администратор.
                      </div>
                      <a href="https://vk.com/sysoff" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
                    </div>
                  </div>
                </el-col>
                <el-col class="team-block" :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="member">
                      <div class="ava">
                        <img src="./../../assets/avas/66.jpg" alt="Ignatieva">
                      </div>
                      <div class="name">Игнатьева Александра</div>
                      <div class="text">
                        Арт-директор, дизайнер.
                      </div>
                      <a href="https://vk.com/mandy_yeagle" class="social-link" target="_blank">
                        <img src="./../../assets/socail/vkontakte.png" alt="vkontakte profile">
                      </a>
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
  export default {
    name: 'Team'
  };
</script>
