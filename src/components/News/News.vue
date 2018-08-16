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
                      <el-form ref="form" :model="form" label-width="200px">
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
                            <mark v-if="form.mainImg">{{form.mainImg}}</mark>
                            <el-button class="button">Select file</el-button>
                            <el-input class="file-input" type="file" v-model="form.mainImg"></el-input>
                          </div>
                        </el-form-item>
                        <el-form-item label="Article image description">
                          <el-input type="text" v-model="form.mainImgAlt"></el-input>
                        </el-form-item>
                        <el-form-item label="Article text">
                          <vue-editor v-model="form.text"></vue-editor>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="onSubmit">Create</el-button>
                          <el-button>Cancel</el-button>
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
        form: {
          id: null,
          name: 'Article name',
          text: '<h1>Some initial content</h1>',
          description: 'Article description',
          mainImg: null,
          mainImgAlt: ''
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
      }
    },
    created: function () {
      console.log('getNews');
      this.getNews();
    }
  };
</script>