<template>
  <div id="clients" class="clients">
    <el-row>
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>{{ $t("clients.text.1") }}</h2>
              <el-row>
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="client in clients" :key="client.id">
                    <div class="grid-content bg-purple">

                      <div class="clients">
                        <div class="client">
                          <div class="logo">
                            <a target="_blank" v-bind:href="client.link"><img :src="client.src" alt="client.alt"><p>{{ client.alt }}</p></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
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
  import pntrans from './../../assets/clients/logo-pntrans.png';
  import petrokam from './../../assets/clients/petrokam.png';
  import scheben from './../../assets/clients/logo-scheben.png';
  import fskEs from './../../assets/clients/mes.jpg';
  import kondopoga from './../../assets/clients/kondopoga.jpg';
  import vodokanal from './../../assets/clients/vodokanal.jpg';
  import karelkamen from './../../assets/clients/karelkamen.jpg';
  import storaenso from './../../assets/clients/storaenso.jpeg';

  export default {
    name: 'Clients',
    data () {
      return {
        clients: [
          {
            id: 1,
            link: 'http://pntrans.info',
            src: pntrans,
            alt: 'Promnerudtrans'
          }, {
            id: 2,
            link: 'http://petrokam.pro',
            src: petrokam,
            alt: 'PetroKam'
          }, {
            id: 3,
            link: 'http://nerudtrade.ru',
            src: scheben,
            alt: 'Crushed stone of Karelia'
          }, {
            id: 4,
            link: 'http://www.fsk-ees.ru/about/affiliates/mes_north_west/news/',
            src: fskEs,
            alt: 'FSK ES'
          }, {
            id: 5,
            link: 'http://www.oaokondopoga.ru/',
            src: kondopoga,
            alt: 'OAO Kondopoga'
          }, {
            id: 6,
            link: 'http://pks-vodokanal.ru/"',
            src: vodokanal,
            alt: 'PKS Vodokanal'
          }, {
            id: 7,
            link: 'http://www.karel-kamen.com/',
            src: karelkamen,
            alt: 'KarelStone'
          }, {
            id: 8,
            link: 'http://www.storaensopack.com.ru/',
            src: storaenso,
            alt: 'StoraEnso'
          }
        ]
      };
    }
  };
</script>
