<template>
  <div id="top-header" class="five-stones">
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div class="grid-content bg-purple stones">
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <div class="stone-block stone-block1">
                  <div class="stone"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple-light">
                <div class="stone-block stone-block2">
                  <div class="stone"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <div class="stone-block stone-block3">
                  <div class="stone"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <div class="stone-block stone-block4">
                  <div class="stone"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <div class="stone-block stone-block5">
                  <div class="stone"></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  export default {
    name: 'FiveStones'
  };
</script>
