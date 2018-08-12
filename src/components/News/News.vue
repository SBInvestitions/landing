<template>
  <div id="news" class="news">
    <el-container class="news-container">
      <el-header class="header-block">
        <account-menu />
      </el-header>
      <el-main class="main-block">
        <el-row type="flex" align="middle" class="row-bg" justify="center">
          <el-col :xs="24" :sm="22" :md="22" :lg="22" :xl="16">
            <div class="grid-content bg-purple">
              <el-card class="box-card block-card">
                <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
                  <el-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
                    <div class="grid-content bg-purple">
                      News {{news}}
                      <vue-editor v-model="content"></vue-editor>
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
        getNews: 'news/LOAD_NEWS'
      })
    },
    created: function () {
      console.log('getNews');
      this.getNews();
    },
    data () {
      return {
        content: '<h1>Some initial content</h1>'
      };
    }
  };
</script>