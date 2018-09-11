<template>
    <div id="news" class="news">
        <el-container class="news-container">
            <el-header class="header-block">
                <account-menu />
            </el-header>
            <el-main class="main-block">
                <el-row type="flex" align="middle" class="row-bg" justify="center">
                    <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="22">
                        <div class="grid-content bg-purple">
                            <el-card class="box-card block-card">
                                <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
                                    <el-col :span="22">
                                        <div class="grid-content bg-purple">
                                            <el-breadcrumb separator="/">
                                                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                                                <el-breadcrumb-item :to="{ path: '/news' }">News</el-breadcrumb-item>
                                                <el-breadcrumb-item v-if="article.name">{{ article.name }}</el-breadcrumb-item>
                                            </el-breadcrumb>
                                            <div v-if="user
                                            && user.role
                                            && (user.role[0].name === 'Admin' || user.role[0].name === 'Redactor')" class="actions-block">
                                                <el-button class="add-button" size="mini" type="primary" icon="el-icon-edit" circle @click="onEditClick()"></el-button>
                                                <el-button class="add-button" size="mini" type="danger" icon="el-icon-delete" circle @click="onDeleteClick(article._id)"></el-button>
                                            </div>
                                            <el-row v-if="!newArticle && article" class="articles ">
                                                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="main-article">
                                                    <img :src="'https://sbinvest.pro' + article.mainImg">
                                                    <h2>{{ article.name }}</h2>
                                                    <social-sharing class="social" :url="'https://sbinvest.pro/news/' + article._id"
                                                                    :title="article.name"
                                                                    :description="article.description"
                                                                    :quote="article.description"
                                                                    hashtags="sbi,invest,ico,ethereum,bitcoin,granite,realestate"
                                                                    twitter-user="ABelonogov"
                                                                    inline-template>
                                                        <div>
                                                            <network network="email">
                                                                <img src="./../../assets/socail/f-mail.png" alt="email share">
                                                            </network>
                                                            <network network="facebook">
                                                                <img src="./../../assets/socail/f-facebook.png" alt="facebook share">
                                                            </network>
                                                            <network network="linkedin">
                                                                <img src="./../../assets/socail/f-linkedin.png" alt="linkedIn share">
                                                            </network>
                                                            <!--<network network="reddit">
                                                                <i class="fa fa-reddit"></i> Reddit
                                                            </network>-->
                                                            <network network="telegram">
                                                                <img src="./../../assets/socail/f-telegram.png" alt="telegram">
                                                            </network>
                                                            <network network="twitter">
                                                                <img src="./../../assets/socail/f-twitter.png" alt="twitter share">
                                                            </network>
                                                            <network network="vk">
                                                                <img src="./../../assets/socail/f-vkontakte.png" alt="vkontakte share">
                                                            </network>
                                                            <!--<network network="weibo">
                                                                 <i class="fa fa-weibo"></i> Weibo
                                                             </network>-->
                                                            <!--<network network="whatsapp">
                                                                <i class="fa fa-whatsapp"></i> Whatsapp
                                                            </network>-->
                                                        </div>
                                                    </social-sharing>
                                                    <span class="date">{{ article.dateCreate | moment("dddd, MMMM Do YYYY")  }}</span>
                                                    <div class="article-text" v-html="article.text"></div>
                                                </el-col>
                                            </el-row>
                                            <el-form v-if="newArticle" ref="form" :model="form" label-width="200px">
                                                <h2>Enter article information:</h2>
                                                <el-form-item label="Article name">
                                                    <el-input type="text" v-model="form.name"></el-input>
                                                </el-form-item>
                                                <el-form-item label="Article description">
                                                    <el-input type="textarea" v-model="form.description"></el-input>
                                                </el-form-item>
                                                <el-form-item label="Article image">
                                                    <div class="file_upload">
                                                        <mark v-if="!form.mainImg">File not selected</mark>
                                                        <img v-if="form.mainImgSrc" :src=form.mainImgSrc>
                                                        <el-button v-if="!form.mainImgSrc" class="button">Select file</el-button>
                                                        <input ref="myFile" v-on:change="handleChangeImage" class="file-input" type="file">
                                                    </div>
                                                </el-form-item>
                                                <el-form-item label="Article image description">
                                                    <el-input type="text" v-model="form.mainImgAlt"></el-input>
                                                </el-form-item>
                                                <el-form-item label="Article text">
                                                    <vue-editor v-model="form.text"></vue-editor>
                                                </el-form-item>
                                                <el-form-item>
                                                    <el-button :disabled="!form.mainImg || !form.name || !form.text" type="primary" @click="onSubmit">Save</el-button>
                                                    <el-button @click="onAddClick(false)">Cancel</el-button>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <yandex-map
                                        :coords="[62.3615, 32.2400]"
                                        zoom="10"
                                        style="width: 600px; height: 600px;"
                                        :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
                                        :behaviors="['ruler']"
                                        :controls="['trafficControl']"
                                        :placemarks="placemarks"
                                        map-type="hybrid"
                                        @map-was-initialized="initMap"
                                    ></yandex-map>
                                </el-row>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { VueEditor } from 'vue2-editor';
  // import MainMenu from './../MainMenu/MainMenu.vue';
  import AccountMenu from './../Account/components/AccountMenu/AccountMenu.vue';
  export default {
    name: 'News',
    data () {
      return {
        newArticle: false,
        form: {
          _id: this.$route.params.id,
          name: null,
          text: null,
          description: null,
          mainImg: null,
          mainImgAlt: null,
          mainImgSrc: null
        },
        placemarks: [
          {
            coords: [54.8, 39.8],
            properties: {},
            options: {},
            clusterName: '1',
            balloonTemplate: '<div>"Custom template"</div>'
          }
        ],
        sites: [
          {
            id: 1,
            name: 'Khauki',
            points: ['32.2400', '62.3615', '32.2640', '62.3420', '32.2420', '62.3330', '32.2520', '62.3210', '32.2400', '62.3120', '32.2240', '62.3210', '32.2240', '62.3600', '32.2400', '62.3615'],
            deposits: [
              {
                name: 'Khauki-1',
                points: ['62.3620', '32.2351', '62.3540', '32.2440', '62.3540', '32.2253', '62.3600', '32.2253']
              },
              {
                name: 'Khauki-2',
                points: ['62.3505', '32.2535', '62.3440', '32.2604', '62.3434', '32.2554', '62.3452', '32.2500']
              },
              {
                name: 'Khauki-3',
                points: ['62.3435', '32.2611', '62.3416', '32.2638', '62.3353', '32.2520', '62.3421', '32.2539']
              },
              {
                name: 'Khauki-4',
                points: ['62.3415', '32.2253', '62.3420', '32.2220', '62.3345', '32.2410', '62.3340', '32.2330']
              },
              {
                name: 'Khauki-5',
                points: ['62.3356', '32.2231', '62.3404', '32.2257', '62.3339', '32.2322', '62.3333', '32.2243']
              },
              {
                name: 'Khauki-6',
                points: ['62.3328', '32.2245', '62.3339', '32.2336', '62.3313', '32.2336', '62.3313', '32.2245']
              },
              {
                name: 'Khauki-7',
                points: ['62.3250', '32.2240', '62.3250', '32.2320', '62.3210', '32.2320', '62.3230', '32.2240']
              },
              {
                name: 'Khauki-8',
                points: ['62.3300', '32.2324', '62.3300', '32.2400', '62.3230', '32.2410', '62.3210', '32.2410', '62.3210', '32.2340']
              },
              {
                name: 'Khauki-9',
                points: ['62.3310', '32.2409', '62.3310', '32.2442', '62.3330', '32.2452', '62.3220', '32.2420']
              },
              {
                name: 'Khauki-10',
                points: ['62.3155', '32.2350', '62.3150', '32.2440', '62.3120', '32.2400', '62.3135', '32.2340']
              }
            ]
          },
          {
            id: 2,
            name: 'Helga',
            points: ['62.3530', '32.2507', '62.3530', '32.2600', '62.3500', '32.2620', '62.3450', '32.2600'],
            deposits: [
            ],
          }
        ]
      };
    },
    components: {
      'account-menu': AccountMenu,
      VueEditor
    },
    computed: {
      ...mapGetters({
        article: 'news/article',
        user: 'user/user'
      })
    },
    methods: {
      ...mapActions({
        getArticle: 'news/LOAD_ARTICLE',
        putArticle: 'news/POST_ARTICLE',
        deleteArticle: 'news/DELETE_ARTICLE'
      }),
      initMap () {

      },
      onSubmit () {
        this.putArticle(this.form);
        this.newArticle = false;
      },
      onAddClick (state) {
        this.newArticle = state;
      },
      onEditClick (state) {
        this.newArticle = state;
        console.log('this.form', this.form);
      },
      onDeleteClick (articleId) {
        this.deleteArticle(articleId);
      },
      handleChangeImage (event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (upload) {
          this.form.mainImg = upload.target.result;
          this.form.mainImgSrc = reader.result;
        }.bind(this);
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.form.mainImgSrc = '';
        }
      }
    },
    created: function () {
      console.log('this.$route.params.id', this.$route.params.id);
      console.log('this.article', this.article);
      this.getArticle(this.$route.params.id);
    }
  };
</script>