<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="center">
        <el-menu :default-active="activeIndex" class="el-menu-sbi" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">SBInvestments</el-menu-item>
          <el-menu-item index="2">About Project</el-menu-item>
          <el-menu-item index="3">DAICO conditions</el-menu-item>
          <el-menu-item index="4">Roadmap</el-menu-item>
          <el-menu-item index="5">Team</el-menu-item>
          <el-menu-item index="6">Bounty</el-menu-item>
          <el-menu-item index="7">Clients</el-menu-item>
          <el-menu-item index="8">FAQ</el-menu-item>
          <!-- WHAT IS DAICO https://cointelegraph.com/explained/what-is-a-daico-explained -->
          <el-submenu index="9">
            <template slot="title">Docs</template>
            <el-menu-item index="9-1">Whitepaper</el-menu-item>
            <el-menu-item index="9-2">Business Summary</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-row>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
