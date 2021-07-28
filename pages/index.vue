<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> 欢迎使用genshin-puzzle </v-card-title>
        <v-card-text>
          <p>该网页可让您轻松解决原神稻妻雷方块(机关立方)的谜题</p>
          <p>点击「继续」以查看使用说明</p>
          <p>关于本网页的更多信息请查看 <NuxtLink to="/about">About页面</NuxtLink></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/guide"> 继续 </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
