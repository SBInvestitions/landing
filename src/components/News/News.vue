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
                      <el-button size="mini" type="primary" icon="el-icon-plus" circle @click="onAddClick(true)"></el-button>

                      <div v-if="!newArticle" class="articles">
                        <div class="main-article">
                          <header>{{ news[0].name }}</header>
                          <img :src="news[0].mainImg">
                          <div class="article-text">
                            {{ news[0].text }}
                          </div>
                        </div>
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
                    </div>
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
          id: null,
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
        news: 'news/news'
      })
    },
    methods: {
      ...mapActions({
        getNews: 'news/LOAD_NEWS',
        postArticle: 'news/POST_ARTICLE'
      }),
      onSubmit () {
        this.postArticle(this.form);
      },
      onAddClick (state) {
        this.newArticle = state;
      },
      handleChangeImage (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
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
      this.getNews();
    }
  };
</script>