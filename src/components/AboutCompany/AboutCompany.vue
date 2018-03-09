<template>
  <div id="about-company" class="about-company">
    <el-row>
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="16">
            <div class="grid-content bg-purple-light">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="24">
                  <div class="grid-content bg-purple-light">
                    <h2>О проекте</h2>
                    <div class="text-block">
                      <div class="text">
                        <p>Мы располагаем геологической информацией об участках недр в Суоярвском районе Республики Карелия
                          с ресурсами залегания блочного камня в количестве 4 штук с ориентировочными запасами блоков 100 000 м3 каждый.
                          Такого запаса хватит на 40-50 лет разработки.</p>
                        <p>Для подготовки данных месторождений к разработке, оформления лицензий и последующей продажи добывающим компаниям мы привлекаем средства инвесторов.</p>
                        <p>Наша компания имеет все необходимые рабочие контакты, внимательно следит за рыночными тенденциями и стремится обеспечить максимальную выгоду себе и своим клиентам.</p>
                        <p>Благодаря наработанному годами опыту, мы находим и оформляем только самые лучшие участки, которые со временем только растут в цене.</p>
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
                  <p>Спрос на блочный камень в России и зарубежом постоянно растет, количество месторождений качественного камня уменьшается.
                    Сырье на уже существующих месторождениях заканчивается.</p>
                  <p>
                    Поскольку камень, найденный нашими специалистами, высокого качества и востребованных цветов,
                    стоимость продажи каждого месторождения на рынке на сегодняшний день превышает 80 миллионов рублей.
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
                    Для граждан Российской Федерации, принявших решение вложить средства в нашу компанию, мы предлагаем, по Вашему желанию, вступить в состав учредителей ООО "ИнвестТехнологии".
                  </p>
                  <p>
                    Иностранные инвесторы могут предоставить своего представителя с гражданством РФ.
                  </p>
                  <p>
                    Инвестируя в наш проект, вы получаете контроль над вложениями с помощью специально созданных смарт-контрактов, и на голосовании с другими инвесторами определяете,
                    будете ли Вы продолжать участие в проекте или же решите забрать средства обнатно.
                  </p>
                  <p>
                    Мы будем держать Вас в курсе, публикуя всю информацию о текущем ходе работ, сканированные документы, карты, лицензии.
                  </p>
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

  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'AboutCompany'
  };
</script>
