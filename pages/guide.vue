<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">使用说明</v-card-title>
          <v-card-text>
            <p>
              雷方块解谜可依据排列方式分为两类：条形和环形
              <br />其中又根据响应方式分为两类：亮灯和旋转
              <br />根据上面两种分法即可大致分为四种谜题
            </p>
            <p>
              接着我们需要将遇到的谜题简化为数组
              <br />一般来说，描述谜题中方块的顺序是自左向右(条形)或从左下角开始顺时针方向(环形)
              <br />亮灯的数值范围为0-2，旋转的数值范围为0-3
            </p>
            <p>具体请参考以下例子：</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/puzzle"> 跳过说明并继续 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">例1 条形+亮灯</v-card-title>
          <v-card-text>
            <v-img src="/screenshot/20210726151802.png"></v-img>
            <p>
              图为荒海西侧的方块解谜，该解谜为条形+亮灯类别，其描述为0,2,0,1
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
