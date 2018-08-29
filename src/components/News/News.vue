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
                    <el-button v-if="user
                    && user.role
                    && (user.role[0].name === 'Admin' || user.role[0].name === 'Redactor')"
                               class="add-button"
                               size="mini"
                               type="primary"
                               icon="el-icon-plus"
                               circle
                               @click="onAddClick(true)">
                    </el-button>
                    <div v-if="news && news.length === 1 && !newArticle" class="grid-content bg-purple">
                      <el-row class="other-articles">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="articles-block">
                          <div class="article">
                            <h2><a :href="'/news/' + news[0]._id">{{ news[0].name }}</a></h2>
                            <img :src="'https://sbinvest.pro' + news[0].mainImg">
                            <div class="article-text" v-html="news[0].text"></div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <div v-if="news && news.length > 1" class="grid-content bg-purple">
                      <el-row v-if="!newArticle && news && news[0]" class="articles">
                        <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16" class="main-article">
                          <img :src="'https://sbinvest.pro' + news[0].mainImg">
                          <h2><a :href="'/news/' + news[0]._id">{{ news[0].name }}</a></h2>
                          <div class="article-text" v-html="news[0].text"></div>
                        </el-col>
                        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="secondary-articles">
                          <el-row v-if="news[1]" class="secondary-article">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                              <img :src="'https://sbinvest.pro' + news[1].mainImg">
                              <h2><a :href="'/news/' + news[1]._id">{{ news[1].name }}</a></h2>
                              <div class="article-text" v-html="news[1].text"></div>
                            </el-col>
                          </el-row>
                          <el-row v-if="news[2]" class="secondary-article">
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                              <img :src="'https://sbinvest.pro' + news[2].mainImg">
                              <h2><a :href="'/news/' + news[2]._id">{{ news[2].name }}</a></h2>
                              <div class="article-text" v-html="news[2].text"></div>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>

                      <el-row class="other-articles">
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="articles-block">
                          <div class="article"
                               v-for="(item, index) in news"
                               v-if="!newArticle && news && index !== 0 && index !== 1 && index !== 2 && news[3]"
                               :key="item._id"
                          >
                            <img :src="'https://sbinvest.pro' + item.mainImg">
                            <h2><a :href="'/news/' + item._id">{{ item.name }}</a></h2>
                            <div class="article-text" v-html="item.text"></div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
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
                        <p><el-button type="danger" v-on:click="deleteImage" v-if="form.mainImgSrc" class="button">Delete file</el-button></p>
                      </el-form-item>
                      <el-form-item label="Article image description">
                        <el-input type="text" v-model="form.mainImgAlt"></el-input>
                      </el-form-item>
                      <el-form-item label="Article text">
                        <vue-editor v-model="form.text"></vue-editor>
                      </el-form-item>
                      <el-form-item>
                        <el-button :disabled="!form.mainImg || !form.name || !form.text" type="primary" @click="onSubmit">Create</el-button>
                        <el-button @click="onAddClick(false)">Cancel</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
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
          _id: null,
          name: 'Article name',
          text: '<h1>Some initial content</h1>',
          description: 'Article description',
          mainImg: null,
          mainImgAlt: '',
          mainImgSrc: ''
        }
      };
    },
    components: {
      'account-menu': AccountMenu,
      VueEditor
    },
    computed: {
      ...mapGetters({
        news: 'news/news',
        user: 'user/user'
      })
    },
    methods: {
      ...mapActions({
        getNews: 'news/LOAD_NEWS',
        postArticle: 'news/POST_ARTICLE'
      }),
      onSubmit () {
        this.postArticle(this.form);
        this.newArticle = false;
      },
      onAddClick (state) {
        this.newArticle = state;
      },
      deleteImage () {
        this.form.mainImg = null;
        this.form.mainImgAlt = '';
        this.form.mainImgSrc = '';
      },
      handleChangeImage (event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (upload) {
          this.form.mainImg = upload.target.result;
          // this.form.mainImgSrc = reader.result;
        }.bind(this);
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.form.mainImgSrc = '';
        }
      }
    },
    created: function () {
      this.getNews();
    }
  };
</script>