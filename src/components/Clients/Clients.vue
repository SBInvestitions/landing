<template>
  <div id="clients" class="clients">
    <el-row>
      <el-col :span="24" class="top-bottom">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
            <div class="grid-content bg-purple-light">
              <h2>Наши клиенты</h2>
              <el-row :gutter="20">
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo">
                          <a target="_blank" href="http://pntrans.info"><img src="./../../assets/clients/logo-pntrans.png" alt="promnerudtrans"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple-light">
                    <div class="clients">
                      <div class="client">
                        <div class="logo">
                          <a target="_blank" href="http://petrokam.pro"><img src="./../../assets/clients/petrokam.png" alt="promnerudtrans"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo">
                          <a target="_blank" href="http://nerudtrade.ru"><img src="./../../assets/clients/logo-scheben.png" alt="ООО Щебень Карелии"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col class="client-block" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                  <div class="grid-content bg-purple">
                    <div class="clients">
                      <div class="client">
                        <div class="logo">
                          <a target="_blank" href="http://eco-tehnologii.ru"><img src="./../../assets/clients/eco.png" alt="promnerudtrans"></a>
                        </div>
                      </div>
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
    name: 'Clients'
  };
</script>
