<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline"> 1.选择谜题类型 </v-card-title>
          <v-card-text>
            <v-radio-group v-model="type">
              <v-radio
                v-for="(item, i) in types"
                :key="i"
                :label="item.name"
                :value="i"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline"> 2.输入描述谜题的数组 </v-card-title>
          <v-card-text>
            <v-text-field
              label="输入描述谜题的数组"
              v-model="cubestr"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline"> 3.开始解谜 </v-card-title>
          <v-card-text>
            计算结果：{{ result.msg }}<br />
            操作步骤：{{ result.steps }}<br />
            最后状态：{{ result.status }}<br />
            模拟次数：{{ result.count }}<br />
            <v-expansion-panels
              v-if="result.log != undefined && result.log != ''"
            >
              <v-expansion-panel>
                <v-expansion-panel-header>
                  查看详细日志
                </v-expansion-panel-header>
                <v-expansion-panel-content v-text="result.log" style="white-space: pre-line">
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="simulate(type, cubestr)"> 开始解谜 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import smu from "~/assets/simulator/index";

export default {
  data() {
    return {
      types: [
        { name: "条形+亮灯" },
        { name: "条形+旋转" },
        { name: "环形+亮灯" },
        { name: "环形+旋转" },
      ],
      type: 0,
      cubestr: "",
      result: {},
    };
  },
  methods: {
    simulate(type, cubestr) {
      // console.log(type);
      // console.log(cubestr);
      this.result = smu(type, cubestr);
    },
  },
};
</script>