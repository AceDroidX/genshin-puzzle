import { CubeBase } from './CubeBase'

// 旋转的方块，4个值(0-3)
export class Cube4 extends CubeBase {
  // 触发后顺时针旋转
  trigger () {
    this.value = this.value + 1
    if (this.value > 3) {
      this.value = 0
    }
  }
}

// 亮灯的方块，3个值(0-2)
export class Cube3 extends CubeBase {
  trigger () {
    this.value = this.value + 1
    if (this.value > 2) {
      this.value = 0
    }
  }
}
